package main

import (
	"context"
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/ikawaha/kagome-dict/ipa"
	"github.com/ikawaha/kagome/v2/tokenizer"
)

var tok *tokenizer.Tokenizer

func init() {
	t, err := tokenizer.New(ipa.Dict(), tokenizer.OmitBosEos())
	if err != nil {
		panic(err)
	}
	tok = t
}

type request struct {
	Sentences []string `json:"sentences"`
}

type response struct {
	Results [][]string `json:"results"`
}

// Primary POS tags to exclude
var excludedPrimaryPOS = map[string]bool{
	"記号":   true,
	"補助記号": true,
	"助詞":   true,
	"フィラー": true,
	"その他":  true,
}

func shouldSkipToken(token tokenizer.Token) bool {
	if token.Class == tokenizer.UNKNOWN {
		return true
	}

	pos := token.POS()
	if len(pos) == 0 {
		return true
	}

	primary := pos[0]
	if excludedPrimaryPOS[primary] {
		return true
	}

	// Excluded POS pairs
	if len(pos) > 1 {
		secondary := pos[1]
		if primary == "名詞" && secondary == "固有名詞" {
			return true
		}
		if primary == "名詞" && secondary == "数" {
			return true
		}
		if primary == "感動詞" && secondary == "間投" {
			return true
		}
	}

	base, ok := token.BaseForm()
	if !ok || base == "" {
		return true
	}

	return false
}

func extractBaseForms(sentence string) []string {
	tokens := tok.Tokenize(sentence)
	seen := make(map[string]bool)
	var baseForms []string

	for _, token := range tokens {
		if shouldSkipToken(token) {
			continue
		}

		base, _ := token.BaseForm()
		if !seen[base] {
			seen[base] = true
			baseForms = append(baseForms, base)
		}
	}

	return baseForms
}

func handler(ctx context.Context, event events.LambdaFunctionURLRequest) (events.LambdaFunctionURLResponse, error) {
	var req request
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return events.LambdaFunctionURLResponse{
			StatusCode: 400,
			Body:       `{"error":"invalid JSON"}`,
		}, nil
	}

	results := make([][]string, len(req.Sentences))
	for i, sentence := range req.Sentences {
		baseForms := extractBaseForms(sentence)
		if baseForms == nil {
			baseForms = []string{}
		}
		results[i] = baseForms
	}

	body, _ := json.Marshal(response{Results: results})

	return events.LambdaFunctionURLResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": "application/json"},
		Body:       string(body),
	}, nil
}

func main() {
	lambda.Start(handler)
}
