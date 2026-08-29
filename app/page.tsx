import { SiteMenu } from "@/components/sections/SiteMenu";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { WhyMe } from "@/components/sections/WhyMe";
import { Philosophy } from "@/components/sections/Philosophy";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

/**
 * Reads as a CV: who he is, what he shipped, the numbers behind it, how he
 * thinks, what he does, where he's worked, what he knows, and how he trained.
 */
export default function Home() {
  return (
    <>
      <SiteMenu />
      <main>
        <Hero />
        {/* Rides up over the pinned hero — needs a stacking context and an
            opaque background to occlude it. */}
        <div className="relative z-10 bg-ink">
          <About />
          <Work />
          <WhyMe />
          <Philosophy />
          <Expertise />
          <Experience />
          <Skills />
          <Education />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
