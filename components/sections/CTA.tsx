import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CTA as CTA_CONTENT, RESUME } from "@/lib/data";

/**
 * Contact band. The portrait owns the right side and all copy stacks on the
 * left, so nothing is ever set over his face. The glow sits on the section
 * rather than inside the image wrapper — clipping it to the wrapper leaves a
 * visible vertical seam at the wrapper's edge.
 */
export function CTA() {
  return (
    <section
      id="cta"
      data-name="Contact"
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-ink py-24 lg:py-32"
    >
      {/* Section-level glow, behind the figure. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(38% 46% at 76% 72%, rgba(255,73,37,0.12) 0%, rgba(255,73,37,0.035) 48%, transparent 74%)",
        }}
      />

      {/* Portrait, bottom-aligned against the section floor. */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 hidden w-[46%] lg:block xl:w-[42%]">
        <Image
          src={CTA_CONTENT.image}
          alt=""
          fill
          sizes="46vw"
          className="object-contain object-bottom"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, #000 12%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, #000 12%, #000 100%)",
          }}
        />
      </div>

      <div className="shell relative z-10">
        {/* All copy stays clear of the portrait column. */}
        <div className="lg:max-w-[54%]">
          <Reveal variant="up">
            <h2 className="font-display text-[3.5rem] uppercase leading-[0.92] tracking-display text-paper sm:text-[5.5rem] lg:text-[6.25rem] xl:text-[7.5rem]">
              <span className="mb-2 block lg:mb-3">
                {CTA_CONTENT.headingLine1}
              </span>
              <span className="block">{CTA_CONTENT.headingLine2}</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="mt-10 block">
            <p className="max-w-md font-sans text-sm leading-relaxed text-muted-light sm:text-base lg:text-lg">
              {CTA_CONTENT.blurb}
            </p>
          </Reveal>

          {/* Three tiers so the actions don't compete: accent pill for the
              primary contact, neutral outline to open the CV, quiet text link
              to save it. */}
          <Reveal variant="fade" delay={0.2} className="mt-10 block">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-5">
              <Link
                href={CTA_CONTENT.buttonHref}
                className="group inline-flex items-center justify-center rounded-full border border-accent px-10 py-4 text-xs font-bold uppercase tracking-widest text-accent shadow-glow transition-colors duration-300 hover:bg-accent hover:text-paper"
              >
                {CTA_CONTENT.buttonLabel}
              </Link>

              <a
                href={RESUME.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 text-xs font-bold uppercase tracking-widest text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {RESUME.viewLabel}
                <span className="sr-only">(opens in a new tab)</span>
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  &#8599;
                </span>
              </a>

              <a
                href={RESUME.href}
                download={RESUME.filename}
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors duration-300 hover:text-paper"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="M7 12l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                {RESUME.downloadLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
