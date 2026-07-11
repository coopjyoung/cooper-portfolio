"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") {
        setOpenIndex((current) =>
          current === null ? current : (current + 1) % screenshots.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpenIndex((current) =>
          current === null
            ? current
            : (current - 1 + screenshots.length) % screenshots.length,
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, screenshots.length]);

  const active = openIndex === null ? null : screenshots[openIndex];

  return (
    <>
      <div className="mt-3 grid gap-6 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot.src}
            className="overflow-hidden rounded-lg border border-foreground/10"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="block w-full cursor-zoom-in"
              aria-label={`Open larger view of ${screenshot.alt}`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                className="h-auto w-full transition-opacity hover:opacity-90"
              />
            </button>
            <figcaption className="border-t border-foreground/10 px-4 py-3 text-sm leading-relaxed text-foreground/70">
              {screenshot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black/90 p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Close ✕
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((current) =>
                    current === null
                      ? current
                      : (current - 1 + screenshots.length) % screenshots.length,
                  );
                }}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 px-3 py-2 text-lg text-white transition-colors hover:bg-white/10 sm:left-4"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((current) =>
                    current === null ? current : (current + 1) % screenshots.length,
                  );
                }}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 px-3 py-2 text-lg text-white transition-colors hover:bg-white/10 sm:right-4"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative max-h-[75vh] w-full max-w-4xl"
            style={{ aspectRatio: `${active.width} / ${active.height}` }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <p className="max-w-2xl text-center text-sm text-white/80">
            {active.caption}
          </p>
        </div>
      )}
    </>
  );
}
