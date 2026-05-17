import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.png";
import { poems } from "@/data/poems";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Letters from a Quiet Alley — Six Poems" },
      { name: "description", content: "A collection of six poems on loneliness, love, disaster, and the oath beneath the ruins." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,200..900,0..100,0..1;1,9..144,200..900,0..100,0..1&family=Cinzel:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/75 to-background/95" aria-hidden />

      <header className="px-6 pt-24 pb-20 text-center fade-up">
        <p className="font-label text-[0.65rem] text-foreground/55">A Collection · MMXXVI</p>
        <h1 className="font-display mt-6 text-6xl sm:text-8xl text-foreground">
          Letters from a<br />
          <span className="font-display-italic">Quiet Alley</span>
        </h1>
        <div className="mx-auto mt-8 h-px w-16 bg-foreground/30" />
        <p className="font-verse mt-8 max-w-xl mx-auto text-lg text-foreground/75 italic leading-relaxed">
          Six poems written between the war and the warmth — for the one whose voice still reaches through the static.
        </p>
      </header>

      <main className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem, i) => (
            <Link
              key={poem.id}
              to="/poem/$poemId"
              params={{ poemId: poem.id }}
              className="group fade-up rounded-lg border border-foreground/15 bg-background/40 p-7 backdrop-blur-md transition-all hover:bg-background/60 hover:border-foreground/40 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-numeral text-3xl text-foreground/55 group-hover:text-foreground/90 transition-colors">
                  {poem.numeral}
                </span>
                <span className="font-label text-[0.6rem] text-foreground/40">Poem</span>
              </div>
              <h2 className="font-display mt-8 text-[2.1rem] text-foreground">
                {poem.title}
              </h2>
              <p className="font-verse mt-3 italic text-base text-foreground/65">{poem.subtitle}</p>
              <div className="font-label mt-10 flex items-center gap-2 text-[0.6rem] text-foreground/50 group-hover:text-foreground/95 transition-colors">
                Read <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="pb-12 text-center font-label text-[0.6rem] text-foreground/45">
        For Jzreine Kronelle
      </footer>
    </div>
  );
}
