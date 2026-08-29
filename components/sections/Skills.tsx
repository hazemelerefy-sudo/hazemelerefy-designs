import { Marquee } from "@/components/ui/Marquee";
import { Odometer } from "@/components/ui/Odometer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitText } from "@/components/ui/SplitText";
import { SKILLS_INTRO, SKILL_GROUPS, TOOLS } from "@/lib/data";

/**
 * Technical toolkit. Keeps the template's three-card grid and odometer roll —
 * the headline figure is now a proficiency level rather than a price, and the
 * supporting list carries the adjacent skills.
 */
export function Skills() {
  return (
    <section id="skills" data-name="Skills" className="py-28 lg:py-40">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SplitText
            as="h2"
            text={SKILLS_INTRO.heading}
            className="text-display-md tracking-wider"
            stagger={0.02}
          />
          <SectionLabel>{SKILLS_INTRO.label}</SectionLabel>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.name} variant="up" delay={index * 0.06}>
              <article
                className={`flex h-full flex-col rounded-xl border p-8 transition-colors duration-300 lg:p-10 ${
                  group.featured
                    ? "border-accent bg-accent-tint shadow-glow"
                    : "border-line bg-surface hover:border-line-soft"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl tracking-display">{group.name}</h3>
                  {group.featured ? (
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-wider">
                      Main track
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.blurb}
                </p>

                <div className="mt-8 flex items-baseline">
                  <Odometer
                    value={group.level}
                    className="font-display text-5xl leading-none tracking-display"
                  />
                  <span className="font-display text-3xl text-muted">%</span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-line pt-8">
                  {group.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-light"
                    >
                      <span className="mt-1.5 text-accent" aria-hidden>
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" className="mt-10 block">
          <p className="text-xs uppercase tracking-wider text-muted">
            {SKILLS_INTRO.note}
          </p>
        </Reveal>
      </div>

      {/* Supporting tools, scrolling edge to edge. */}
      <div className="mt-16 border-y border-line py-6">
        <Marquee speed={48}>
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="mx-6 shrink-0 font-display text-xl uppercase tracking-display text-muted transition-colors duration-300 hover:text-paper lg:text-2xl"
            >
              {tool}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
