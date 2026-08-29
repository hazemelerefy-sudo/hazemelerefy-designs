import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { PHILOSOPHY } from "@/lib/data";

/**
 * Full-width pull-quote. Same treatment the template used for a client
 * testimonial, repurposed to carry Youssef's own working principle — with his
 * portrait behind it at low opacity.
 */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      data-name="Philosophy"
      className="shell py-28 lg:py-40"
    >
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
          <Image
            src={PHILOSOPHY.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top opacity-20"
          />

          <div className="relative px-8 py-20 text-center lg:px-24 lg:py-32">
            <span
              aria-hidden
              className="font-display text-7xl leading-none text-accent"
            >
              &ldquo;
            </span>

            <blockquote className="mx-auto mt-6 max-w-4xl font-display text-3xl uppercase leading-tight tracking-display lg:text-5xl">
              {PHILOSOPHY.quote}
            </blockquote>

            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-full bg-line">
                <Image
                  src={PHILOSOPHY.avatar}
                  alt={PHILOSOPHY.author}
                  fill
                  sizes="56px"
                  /* Source is a half-body portrait — zoom from the top edge so
                     the circle frames the face rather than the torso. */
                  className="origin-top scale-[2.4] object-cover"
                />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium">{PHILOSOPHY.author}</p>
                <p className="text-xs text-muted">{PHILOSOPHY.role}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
