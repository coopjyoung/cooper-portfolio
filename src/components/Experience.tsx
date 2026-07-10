import { education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-foreground/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Experience
        </h2>
        <div className="mt-6 space-y-10">
          {experience.map((job) => (
            <div key={job.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role} · {job.org}
                </h3>
                <span className="text-sm text-foreground/60">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/75 sm:text-base"
                  >
                    <span className="text-accent">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
            Education
          </h3>
          <div className="mt-4 space-y-2">
            {education.map((ed) => (
              <div
                key={ed.school}
                className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm sm:text-base"
              >
                <span className="font-medium text-foreground/85">
                  {ed.school}
                  {ed.detail ? ` — ${ed.detail}` : ""}
                </span>
                <span className="text-foreground/60">{ed.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
