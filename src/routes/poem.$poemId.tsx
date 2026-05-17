import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.png";
import { poems } from "@/data/poems";

export const Route = createFileRoute("/poem/$poemId")({
  head: ({ params }) => {
    const poem = poems.find((p) => p.id === params?.poemId);
    return {
      meta: [
        { title: poem ? `${poem.title} — Letters from a Quiet Alley` : "Poem" },
        { name: "description", content: poem?.subtitle ?? "A poem" },
      ],
      links: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,200..900,0..100,0..1;1,9..144,200..900,0..100,0..1&family=Cinzel:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap" },
      ],
    };
  },
  loader: ({ params }) => {
    const poem = poems.find((p) => p.id === params.poemId);
    if (!poem) throw notFound();
    return { poem };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-4xl">Poem not found</h1>
        <Link to="/" className="mt-4 inline-block underline italic">return to the collection</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <p>{error.message}</p>
    </div>
  ),
  component: PoemPage,
});

function PoemPage() {
  const { poemId } = Route.useParams();
  const poem = poems.find((p) => p.id === poemId)!;
  const idx = poems.findIndex((p) => p.id === poem.id);
  const prev = poems[(idx - 1 + poems.length) % poems.length];
  const next = poems[(idx + 1) % poems.length];

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-background/88" aria-hidden />

      <nav className="px-6 pt-8 max-w-3xl mx-auto">
        <Link to="/" className="font-label text-[0.6rem] text-foreground/60 hover:text-foreground transition">
          ← The Collection
        </Link>
      </nav>

      <article className="mx-auto max-w-2xl px-6 py-16 fade-up">
        <header className="text-center border-b border-foreground/15 pb-12">
          <p className="font-numeral text-5xl text-foreground/45">{poem.numeral}</p>
          <h1 className="font-display-italic mt-6 text-5xl sm:text-7xl text-foreground">
            {poem.title}
          </h1>
          <p className="font-verse mt-5 italic text-lg text-foreground/70">{poem.subtitle}</p>
        </header>

        <div className="mt-14 space-y-12">
          {poem.stanzas.map((st, i) => (
            <section key={i} className="fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <p className="font-label text-[0.6rem] text-foreground/45 mb-4">
                {st.label}
              </p>
              <div className="font-verse text-[1.2rem] leading-[1.75] text-foreground/90 space-y-1">
                {st.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-24 flex items-center justify-between border-t border-foreground/15 pt-10 text-sm">
          <Link
            to="/poem/$poemId"
            params={{ poemId: prev.id }}
            className="group max-w-[45%]"
          >
            <p className="font-label text-[0.6rem] text-foreground/50">← Previous</p>
            <p className="font-display-italic text-2xl mt-2 text-foreground/80 group-hover:text-foreground">
              {prev.title}
            </p>
          </Link>
          <Link
            to="/poem/$poemId"
            params={{ poemId: next.id }}
            className="group max-w-[45%] text-right"
          >
            <p className="font-label text-[0.6rem] text-foreground/50">Next →</p>
            <p className="font-display-italic text-2xl mt-2 text-foreground/80 group-hover:text-foreground">
              {next.title}
            </p>
          </Link>
        </nav>
      </article>
    </div>
  );
}
