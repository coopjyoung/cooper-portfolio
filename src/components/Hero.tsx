import { links, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="text-sm font-medium text-accent">{profile.location}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-foreground/70 sm:text-xl">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
        {profile.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={links.concord}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          View Concord
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
