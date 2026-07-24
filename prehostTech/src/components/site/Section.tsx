import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <div className={`${center ? "mx-auto" : ""} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          {eyebrow}
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
