import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitText } from "@/components/ui/SplitText";
import { EDUCATION } from "@/lib/data";

/**
 * Education & training. Keeps the template's layered-glass card composition —
 * one full-width feature over a 5/7 split. The original blurred its body copy
 * until hover; these cards stay legible, since the dates and programmes are
 * the point.
 */
export function Education() {
  const [feature, second, third] = EDUCATION;

  return (
    <section
      id="education"
      data-name="Education"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      {/* Section background with edge blending into the page ink. */}
      <div className="absolute inset-0 -z-10 bg-ink">
        <Image
          src="/images/insights-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
          priority
          unoptimized
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink via-transparent via-40% to-ink pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SplitText
            as="h2"
            text="Education"
            className="text-display-md tracking-wider text-white"
            stagger={0.02}
          />
          <SectionLabel>(CREDENTIALS)</SectionLabel>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Feature card — heavy frosted glass. */}
          {feature && (
            <div className="col-span-full">
              <Reveal variant="up">
                <article className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] p-8 sm:min-h-[400px] sm:p-12 lg:p-14">
                  <div className="pointer-events-none absolute inset-0 z-0 rounded-[32px] bg-black/55 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-[16px]" />
                  <div className="pointer-events-none absolute inset-0 z-[1] rounded-[32px] bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 z-[2] rounded-[32px] shadow-[inset_2px_2px_4px_0_rgba(255,255,255,0.6),inset_-2px_-2px_4px_0_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.3)]" />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/40 bg-white/20 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                      {feature.category}
                    </span>
                    <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/90">
                      {feature.date}
                    </span>
                  </div>

                  <div className="relative z-10 mt-8 sm:mt-12">
                    <h3 className="font-display text-3xl uppercase leading-tight tracking-display text-white sm:text-4xl lg:text-5xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                      {feature.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          )}

          {/* Clear liquid-glass card. */}
          {second && (
            <div className="col-span-1 lg:col-span-5">
              <Reveal variant="up" delay={0.08} className="h-full">
                <article className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] p-7 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 z-0 rounded-[32px] bg-gradient-to-br from-white/25 via-white/5 to-black/35 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-[3px]" />
                  <div className="pointer-events-none absolute inset-0 z-[1] rounded-[32px] shadow-[inset_2px_2px_4px_0_rgba(255,255,255,0.7),inset_-2px_-2px_4px_0_rgba(255,255,255,0.45),inset_0_0_0_1px_rgba(255,255,255,0.5)]" />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/50 bg-white/30 px-3.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                      {second.category}
                    </span>
                    <span className="font-sans text-[11px] font-medium uppercase tracking-wider text-white/90">
                      {second.date}
                    </span>
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-8">
                    <h3 className="font-display text-2xl uppercase leading-snug tracking-display text-white sm:text-3xl">
                      {second.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-xs leading-relaxed text-white/90 sm:text-sm">
                      {second.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          )}

          {/* Frosted glass card. */}
          {third && (
            <div className="col-span-1 lg:col-span-7">
              <Reveal variant="up" delay={0.14} className="h-full">
                <article className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] p-7 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 z-0 rounded-[32px] bg-black/60 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-[24px]" />
                  <div className="pointer-events-none absolute inset-0 z-[1] rounded-[32px] bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 z-[2] rounded-[32px] shadow-[inset_2px_2px_4px_0_rgba(255,255,255,0.6),inset_-2px_-2px_4px_0_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.3)]" />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/40 bg-white/20 px-3.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                      {third.category}
                    </span>
                    <span className="font-sans text-[11px] font-medium uppercase tracking-wider text-white/90">
                      {third.date}
                    </span>
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-8">
                    <h3 className="font-display text-2xl uppercase leading-snug tracking-display text-white sm:text-3xl">
                      {third.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-xs leading-relaxed text-white/85 sm:text-sm">
                      {third.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
