import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-foreground/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          About
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
