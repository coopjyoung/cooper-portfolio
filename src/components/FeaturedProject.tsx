import ScreenshotGallery from "@/components/ScreenshotGallery";
import { project } from "@/lib/data";

export default function FeaturedProject() {
  return (
    <section id="project" className="border-t border-foreground/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Featured Project
        </h2>

        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.name} — {project.tagline}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            {project.urlLabel} ↗
          </a>
        </div>
        <p className="mt-1 text-sm text-foreground/60">
          {project.role} · {project.period} · Live in production
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Problem</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75 sm:text-base">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Solution</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75 sm:text-base">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-foreground">Features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm leading-relaxed text-foreground/75 sm:text-base"
              >
                <span className="text-accent">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium text-foreground/75"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-foreground">Challenges Overcome</h4>
          <ul className="mt-3 space-y-2">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-2 text-sm leading-relaxed text-foreground/75 sm:text-base"
              >
                <span className="text-accent">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold text-foreground">Screenshots</h4>
          <p className="mt-1 text-xs text-foreground/50">
            Click any screenshot to view it larger.
          </p>
          <ScreenshotGallery screenshots={project.screenshots} />
        </div>
      </div>
    </section>
  );
}
