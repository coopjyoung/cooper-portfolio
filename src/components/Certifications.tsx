import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="border-t border-foreground/10 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Certifications
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/80">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
