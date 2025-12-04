-- Dictionary tables mirroring Yomitan's IndexedDB structure
-- for Jitendex + BCCWJ frequency data integration

-- 1. dictionaries (metadata about each dictionary)
CREATE TABLE dictionaries (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  revision TEXT NOT NULL,
  format INTEGER NOT NULL DEFAULT 3,
  sequenced BOOLEAN NOT NULL DEFAULT false,
  author TEXT,
  url TEXT,
  description TEXT,
  attribution TEXT,
  source_language TEXT DEFAULT 'ja',
  target_language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_dictionaries_title ON dictionaries(title);

-- 2. terms (dictionary term entries)
CREATE TABLE terms (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  expression TEXT NOT NULL,
  reading TEXT NOT NULL,
  definition_tags TEXT,
  rules TEXT,
  score INTEGER NOT NULL DEFAULT 0,
  glossary JSONB NOT NULL,
  sequence INTEGER NOT NULL DEFAULT -1,
  term_tags TEXT
);
CREATE INDEX idx_terms_dictionary ON terms(dictionary);
CREATE INDEX idx_terms_expression ON terms(expression);
CREATE INDEX idx_terms_reading ON terms(reading);
CREATE INDEX idx_terms_sequence ON terms(sequence);

-- 3. term_meta (frequency, pitch accent, IPA data)
CREATE TABLE term_meta (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  expression TEXT NOT NULL,
  mode TEXT NOT NULL,
  data JSONB NOT NULL
);
CREATE INDEX idx_term_meta_dictionary ON term_meta(dictionary);
CREATE INDEX idx_term_meta_expression ON term_meta(expression);

-- 4. kanji (kanji dictionary entries)
CREATE TABLE kanji (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  character TEXT NOT NULL,
  onyomi TEXT,
  kunyomi TEXT,
  tags TEXT,
  meanings JSONB NOT NULL,
  stats JSONB
);
CREATE INDEX idx_kanji_dictionary ON kanji(dictionary);
CREATE INDEX idx_kanji_character ON kanji(character);

-- 5. kanji_meta (kanji metadata)
CREATE TABLE kanji_meta (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  character TEXT NOT NULL,
  mode TEXT NOT NULL,
  data JSONB NOT NULL
);
CREATE INDEX idx_kanji_meta_dictionary ON kanji_meta(dictionary);
CREATE INDEX idx_kanji_meta_character ON kanji_meta(character);

-- 6. tag_meta (tag definitions)
CREATE TABLE tag_meta (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  description TEXT,
  score INTEGER DEFAULT 0
);
CREATE INDEX idx_tag_meta_dictionary ON tag_meta(dictionary);
CREATE INDEX idx_tag_meta_name ON tag_meta(name);

-- 7. media (dictionary media assets - for future use)
CREATE TABLE media (
  id BIGSERIAL PRIMARY KEY,
  dictionary TEXT NOT NULL,
  path TEXT NOT NULL,
  media_type TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  content BYTEA
);
CREATE INDEX idx_media_dictionary ON media(dictionary);
CREATE INDEX idx_media_path ON media(path);

-- RPC function: find terms with all metadata in a single query
CREATE OR REPLACE FUNCTION find_terms(search_expression TEXT)
RETURNS JSON
LANGUAGE SQL
STABLE
AS $$
  SELECT json_build_object(
    'terms', COALESCE((
      SELECT json_agg(t ORDER BY t.score DESC)
      FROM terms t
      WHERE t.expression = search_expression
    ), '[]'::json),
    'termMeta', COALESCE((
      SELECT json_agg(m)
      FROM term_meta m
      WHERE m.expression = search_expression
    ), '[]'::json)
  );
$$;
