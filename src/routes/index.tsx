import { createFileRoute } from "@tanstack/react-router";

const COURSE_FOLDER =
  "https://drive.google.com/drive/u/0/folders/17AsDt0xtHcmSvpeLSEoSSTRtdhB2xzbH";

const weeks = [
  "Foundations",
  "Prompting",
  "Verification",
  "Refactor",
  "Review",
  "Systems",
  "Ship",
  "Demo",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Coding — UW CSE" },
      {
        name: "description",
        content:
          "The course hub for UW CSE Vibe Coding: class specification, first lecture, and first project.",
      },
      { property: "og:title", content: "Vibe Coding — UW CSE" },
      {
        property: "og:description",
        content:
          "Build software with AI collaborators through prompting, verification, and thoughtful review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CourseHome,
});

function ResourceLink({
  label,
  primary = false,
}: {
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={COURSE_FOLDER}
      target="_blank"
      rel="noreferrer"
      className={`group flex min-h-13 items-center justify-between rounded-lg px-4 py-3.5 font-display text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uw ${
        primary
          ? "bg-uw text-primary-foreground"
          : "bg-panel text-ink ring-1 ring-uw/15"
      }`}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`font-mono text-xs transition-transform group-hover:translate-x-0.5 ${primary ? "text-gold" : "text-uw"}`}
      >
        ↗
      </span>
    </a>
  );
}

function CourseHome() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-mist text-ink antialiased">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 -top-40 size-[520px] rounded-full bg-uw/15 blur-3xl" />
        <div className="absolute -right-40 top-1/3 size-[460px] rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-[420px] rounded-full bg-uw/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <header className="animate-rise flex items-center justify-between gap-4 py-5">
          <a href={import.meta.env.BASE_URL} className="flex min-w-0 items-center gap-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-md bg-uw font-display text-lg font-bold text-gold">
              C
            </div>
            <div className="min-w-0 leading-tight">
              <p className="font-display text-[15px] font-semibold">CSE · Vibe Coding</p>
              <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                University of Washington
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/60 md:flex">
            <a href={COURSE_FOLDER} target="_blank" rel="noreferrer" className="transition-colors hover:text-uw">Syllabus</a>
            <a href={COURSE_FOLDER} target="_blank" rel="noreferrer" className="transition-colors hover:text-uw">Lecture</a>
            <a href={COURSE_FOLDER} target="_blank" rel="noreferrer" className="transition-colors hover:text-uw">Project</a>
          </nav>
          <span className="shrink-0 rounded-full border border-uw/20 px-3 py-1 font-mono text-[11px] text-ink/50">
            Course hub
          </span>
        </header>

        <main>
          <section className="mt-4 grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="animate-rise lg:col-span-7">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-uw">
                Build · inspect · iterate
              </p>
              <h1 className="max-w-[12ch] text-balance font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
                Vibe Coding
              </h1>
              <p className="mt-5 max-w-[48ch] text-pretty text-[17px] leading-relaxed text-ink/75">
                Build software by directing AI collaborators with intent, not just syntax. Learn to prompt, verify, refactor, and ship with the rigor of a CSE course and the curiosity of a lab.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Prompting', 'Verification', 'Refactoring', 'Review'].map((skill) => (
                  <span key={skill} className="rounded-full bg-uw/10 px-3 py-1.5 font-mono text-[11px] text-uw">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-rise lg:col-span-5 [animation-delay:120ms]">
              <div className="relative h-full rounded-lg bg-panel p-6 shadow-sm ring-1 ring-uw/15 backdrop-blur-xl">
                <div className="absolute -top-2 left-6 size-4 rounded-full bg-gold ring-4 ring-mist" aria-hidden="true" />
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Pinned · Start here
                </p>
                <div className="space-y-3">
                  <ResourceLink label="Class specification" primary />
                  <ResourceLink label="Lecture 01" />
                  <ResourceLink label="Project 01" />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/50">
                  Course files open in the shared UW CSE Google Drive folder.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-12">
            <article className="animate-pin rounded-lg bg-panel p-6 shadow-sm ring-1 ring-uw/15 backdrop-blur-xl lg:col-span-4 [animation-delay:200ms]">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Studio method</p>
              <h2 className="font-display text-xl font-semibold">Human judgment stays in the loop.</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Each cycle moves from a clear specification to an AI-assisted draft, then through testing, critique, and revision.
              </p>
              <ol className="mt-5 space-y-2 font-mono text-[11px] text-ink/60">
                <li>01 · Frame the problem</li>
                <li>02 · Direct the model</li>
                <li>03 · Test the output</li>
                <li>04 · Explain the choices</li>
              </ol>
            </article>

            <article className="animate-pin rounded-lg bg-panel p-6 shadow-sm ring-1 ring-uw/15 backdrop-blur-xl lg:col-span-8 [animation-delay:280ms]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Course rhythm</h2>
                <span className="font-mono text-[11px] text-uw">Studio sequence</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {weeks.map((week, index) => (
                  <div
                    key={week}
                    className={`min-h-20 rounded-md px-2 py-3 text-center ring-1 ${
                      index === 0
                        ? "bg-uw text-primary-foreground ring-uw"
                        : index === weeks.length - 1
                          ? "bg-gold text-uw-deep ring-gold"
                          : "bg-panel text-ink ring-uw/15"
                    }`}
                  >
                    <p className="font-mono text-[10px] opacity-60">W{index + 1}</p>
                    <p className="mt-1 break-words font-display text-xs font-semibold">{week}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </main>

        <footer className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-uw/15 py-6 font-mono text-[11px] text-ink/50 sm:flex-row sm:items-center">
          <p>CSE · Vibe Coding · University of Washington</p>
          <p>A studio workbench for AI-assisted development</p>
        </footer>
      </div>
    </div>
  );
}