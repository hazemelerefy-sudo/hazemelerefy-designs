import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CTA as CTA_CONTENT } from "@/lib/data";

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

          <Reveal variant="fade" delay={0.2} className="mt-10 block">
            <Link
              href={CTA_CONTENT.buttonHref}
              className="group inline-flex items-center justify-center rounded-full border border-accent px-10 py-4 text-xs font-bold uppercase tracking-widest text-accent shadow-glow transition-colors duration-300 hover:bg-accent hover:text-paper"
            >
              {CTA_CONTENT.buttonLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
