import { StickyScroll } from "@/components/velora/sticky-scroll";
import { WORK_STAGES } from "@/data/portfolioData";

const items = WORK_STAGES.map((stage) => ({
  title: `${stage.step}. ${stage.title}`,
  description: stage.description,
  content: (
    <div className="relative flex size-full flex-col justify-between overflow-hidden rounded-xl border border-[var(--hair)] bg-[#0b192c]/90 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50 sm:text-xs">
        <span>AdotShelor / Process</span>
        <span className="rounded-full border border-[var(--hair)] px-3 py-1 text-[#00d2ee]">
          {stage.timeline}
        </span>
      </div>

      <div>
        <span
          aria-hidden="true"
          className="block font-display text-[clamp(7rem,15vw,12rem)] leading-[0.8] font-semibold tracking-[-0.09em] text-white/[0.08]"
        >
          {stage.step}
        </span>
        <div className="mt-7 h-px w-full bg-gradient-to-r from-[#0284c7] via-[#00d2ee] to-transparent" />
      </div>

      <div>
        <p className="text-sm font-medium text-[#00d2ee]">
          Stage {stage.step}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {stage.title}
        </p>
      </div>
    </div>
  ),
}));

export function ProcessSection() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-12 border-t border-[var(--hair-soft)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,210,238,0.28)] bg-[rgba(0,210,238,0.12)] px-3 py-1 text-xs font-semibold text-[#00d2ee]">
            Our Development Process
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Clear Path from Idea to Impact.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            How we work: four deliberate stages designed to ensure complete
            technical clarity, continuous collaboration, and reliable
            execution.
          </p>
        </div>

        <StickyScroll items={items} className="gap-8 lg:gap-16" />
      </div>
    </section>
  );
}
