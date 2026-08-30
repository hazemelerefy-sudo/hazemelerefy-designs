import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PHILOSOPHY } from "@/lib/data";

/**
 * Identity band. The portrait is a transparent cutout, so it is composited as
 * a standing figure directly on the ink — bottom-aligned and flush with the
 * section edge, with a warm radial glow behind it and an elliptical floor
 * shadow beneath. Those two details are what stop a cutout reading as a
 * sticker pasted onto the page.
 */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      data-name="Philosophy"
      className="relative overflow-hidden"
    >
      {/* Accent-tinted glow, centred behind the figure. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 52% at 26% 72%, rgba(255,73,37,0.13) 0%, rgba(255,73,37,0.04) 45%, transparent 72%)",
        }}
      />

      <div className="shell relative grid items-end gap-12 pt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pt-36">
        {/* Portrait — bottom edge sits flush with the section, so he stands on
            the boundary with the next section rather than inside a box. */}
        <Reveal variant="up" className="block">
          <div className="relative mx-auto flex h-[400px] w-full max-w-[360px] items-end sm:h-[480px] lg:h-[580px] lg:max-w-none">
            <Image
              src={PHILOSOPHY.portrait}
              alt={`${PHILOSOPHY.author}, ${PHILOSOPHY.role}`}
              fill
              sizes="(min-width: 1024px) 36vw, 88vw"
              className="object-contain object-bottom"
              /* Fades the cutout's cropped hem into the page instead of ending
                 on a hard horizontal cut. Masking the image itself — rather
                 than layering an opaque panel over it — avoids a visible
                 rectangle against the glow behind. */
              style={{
                maskImage:
                  "linear-gradient(to top, transparent 0%, #000 13%, #000 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, #000 13%, #000 100%)",
              }}
            />
          </div>
        </Reveal>

        {/* Quote */}
        <div className="pb-24 lg:pb-36">
          <Reveal variant="fade">
            <SectionLabel>{PHILOSOPHY.label}</SectionLabel>
          </Reveal>

          <Reveal variant="up" className="mt-8 block">
            <span
              aria-hidden
              className="block font-display text-6xl leading-none text-accent"
            >
              &ldquo;
            </span>

            <blockquote className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-display sm:text-4xl lg:text-5xl">
              {PHILOSOPHY.quote}
            </blockquote>
          </Reveal>

          <Reveal variant="fade" className="mt-10 block">
            {/* Accent rule ties the attribution to the quote above it. */}
            <div className="flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-accent" />
              <div>
                <p className="text-sm font-medium text-paper">
                  {PHILOSOPHY.author}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {PHILOSOPHY.role}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
