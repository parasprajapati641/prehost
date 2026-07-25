import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Prehost Technology" },
      { name: "description", content: "The modern engineering stack we use every day: React, Next.js, Node, Python, AWS, GCP, OpenAI, LangChain and more." },
      { property: "og:title", content: "Technologies — Prehost Technology" },
      { property: "og:description", content: "Frontend, backend, cloud, databases and AI — the stack behind our work." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechnologiesPage,
});

const TECH = [
  { cat: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { cat: "Backend", items: ["Node.js", "Python", "Django", "FastAPI", "Express", "NestJS", "PHP", "Laravel", "Java", "Spring Boot", ".NET"] },
  { cat: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"] },
  { cat: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vercel", "Cloudflare"] },
  { cat: "AI & Machine Learning", items: ["OpenAI", "Gemini", "Claude", "LangChain", "Python AI", "Machine Learning", "PyTorch", "TensorFlow"] },
];

function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our stack"
        title={<>The <span className="text-gradient">modern engineering stack</span>, mastered</>}
        description="We use battle-tested tools by default and evaluate new ones carefully. Every choice has a reason your team can inspect."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="space-y-8">
          {TECH.map((group, i) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{group.cat}</h2>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{group.items.length} tools</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground/90 transition hover:border-primary/40 hover:bg-primary/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
