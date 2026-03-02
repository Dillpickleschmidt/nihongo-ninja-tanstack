import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute(
  "/_home/lessons/_chapter-0/welcome-to-nihongo-ninja",
)({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/welcome-overview",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Welcome to Nihongo Ninja
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-emerald-400" />
      </header>

      <main class="mx-auto max-w-3xl space-y-6 px-6 leading-relaxed">
        <p>
          When I first walked through the doors to my Japanese class at
          university, one of the things my professor asked us was which of us
          were inspired to take the class because of Japanese anime.
        </p>

        <p class="my-10 text-center text-xl font-semibold tracking-tight">
          In a class of 20 students, 18 raised their hands.
        </p>

        <p>
          If you're reading this page, there's at least a 9-in-10 chance that
          some form of Japanese media inspired you to come here. If that's you,
          welcome to Nihongo Ninja! I'm Dylan (Nihongo Ninja founder), and I'd
          like to help you find ways to learn Japanese through the content you
          love.
        </p>

        {/* Divider */}
        <div class="border-border my-10 border-t" />

        <p>
          If it's your first time here, we should clarify what Nihongo Ninja is
          and what it isn't.
        </p>

        <div class="my-8 space-y-6 pl-5">
          <div>
            <p class="mb-1.5 text-sm font-bold uppercase tracking-widest text-emerald-400">
              Is
            </p>
            <p class="text-muted-foreground">
              A free collection of tools, curated resources, and
              textbook-aligned learning paths to help you learn Japanese through
              anime, dramas, and media you actually enjoy.
            </p>
          </div>

          <div>
            <p class="text-muted-foreground mb-1.5 text-sm font-bold uppercase tracking-widest">
              Isn't
            </p>
            <p class="text-muted-foreground">
              A subscription-only service. While we certainly have subscription
              offers that are helpful long-term and can enhance your experience
              (e.g. the spaced-repetition system), each tool can be used by
              anyone anonymously, without progression tracking. Additionally, we
              support free integration with many of the most popular third-party
              tools like Anki, so you can add progression tracking there if you
              wish.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div class="border-border my-10 border-t" />

        <p>
          I started writing Nihongo Ninja during my first year studying Japanese
          in college (Fall 2023), largely because I couldn't find any resources
          that were were good enough to meet my 3 needs:
        </p>

        {/* Quality / Price / Time */}
        <section class="my-10 space-y-10">
          <div>
            <h2 class="mb-2 text-lg font-semibold">Quality</h2>
            <p class="text-muted-foreground">
              There are a lot of excellent quality courses out there—I bought
              several of them, including those offered by some of my favorite
              YouTubers. But while the quality of the input was great, the
              quality of the output was not. Most online courses are primarily
              instructional, and don't offer ways to put what you learned into
              practice. I had what was arguably the best form of instructional
              material (a college class). I received excellent input, could ask
              questions, but at the end of the day, when the class was over, my
              learning was over. Yes, I had lots of take-home work, but it was
              sheets of paper, some weird listening exercises, and doing it was
              something I dreaded every day (forgive me{" "}
              <span class="font-japanese">先生</span>).
            </p>
          </div>

          <div>
            <h2 class="mb-2 text-lg font-semibold">Price</h2>
            <div class="text-muted-foreground space-y-4">
              <p>
                As a broke college student with a $60/mo allowance, the online
                options that actually looked promising weren't cheap. I did try
                some, but even after spending the money, I wasn't getting the
                kind of practice I actually needed, so I was paying a premium
                for content that wasn't solving my problem.
              </p>
              <p>
                Eventually I couldn't justify the cost and canceled everything,
                which left me right back where I started. I wanted something
                that would always be there for me, something I could keep
                learning from without a paywall cutting me off.
              </p>
            </div>
          </div>

          <div>
            <h2 class="mb-2 text-lg font-semibold">Time</h2>
            <div class="text-muted-foreground space-y-4">
              <p>
                There's a surprisingly large amount of free Japanese learning
                content available on the internet. But in an ocean of
                information, finding what's actually worth your time is a job in
                itself.
              </p>
              <p>
                I'm a cheap bastard who has a low attention span. If something
                isn't engaging enough that I'd watch it even without learning
                Japanese, isn't free, or treats me like a child, I'm clicking
                off. But content that's comprehensible enough at low levels
                while being genuinely interesting is like finding a unicorn. So
                I've ended up spending years doing the filtering for you. If you
                create an account, you'll get an email with a curated list of
                the best freely available resources I've found so you can spend
                your time learning from the best material at your level.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div class="border-border my-10 border-t" />

        <p>
          If any of this sounds interesting, feel free to poke around the site
          or move on to the next module.
        </p>

        <p class="font-japanese pt-2 text-xl text-muted-foreground">
          よろしくお願いします
        </p>
      </main>
    </div>
  )
}
