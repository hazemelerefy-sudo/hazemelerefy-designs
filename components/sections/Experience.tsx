import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitText } from "@/components/ui/SplitText";
import { Skiper52 } from "@/components/ui/skiper52";
import { EXPERIENCE_ROLES } from "@/lib/data";

/**
 * Career timeline. Reuses the template's expand-on-hover cards: the marker is
 * the year, the expanded face carries the company, dates, and what the role
 * actually involved.
 */
export function Experience() {
  return (
    <section
      id="experience"
      data-name="Experience"
      className="bg-ink py-28 lg:py-40"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SplitText
            as="h2"
            text="Experience"
            className="text-display-md tracking-wider"
            stagger={0.02}
          />
          <SectionLabel>(JOURNEY)</SectionLabel>
        </div>

        <div className="mt-16">
          <Reveal variant="up">
            <Skiper52 items={[...EXPERIENCE_ROLES]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
