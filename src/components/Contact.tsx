import { links } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-foreground/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Contact
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          I&apos;m looking for opportunities to keep building AI systems that are
          useful, explainable, and responsibly designed — including the Claude
          Corps Fellowship. Feel free to reach out.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${links.email}`}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            {links.email}
          </a>
          <a
            href={`tel:${links.phoneHref}`}
            className="rounded-md border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
          >
            {links.phone}
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
      </div>
    </section>
  );
}
