import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import { useState } from "react"

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Prehost Technology" },
      { name: "description", content: "Essays and playbooks on AI, engineering, product design, cloud infrastructure and digital growth from the Prehost Technology team." },
      { property: "og:title", content: "Insights — Prehost Technology" },
      { property: "og:description", content: "AI, engineering, design and growth playbooks from the Prehost team." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const CATEGORIES = ["All", "AI", "Development", "Design", "Marketing", "Business"] as const;

const POSTS = [
  { cat: "AI", title: "The RAG stack we actually run in production", excerpt: "Vector stores, retrieval strategies and prompt hardening — the parts that survived real users.", read: "9 min", palette: "from-indigo-500/60 to-fuchsia-400/40" },
  { cat: "Development", title: "Why we standardized on TypeScript everywhere", excerpt: "A pragmatic take on shared types across frontend, backend and infra.", read: "6 min", palette: "from-blue-500/60 to-cyan-400/40" },
  { cat: "Design", title: "Design systems that survive engineering", excerpt: "Tokens, semantic layers and governance — what breaks when you scale past 30 designers.", read: "7 min", palette: "from-rose-500/60 to-orange-400/40" },
  { cat: "AI", title: "Evaluating LLM apps without vibes-only tests", excerpt: "A minimal evaluation harness we use before promoting any prompt to prod.", read: "8 min", palette: "from-violet-500/60 to-blue-400/40" },
  { cat: "Marketing", title: "SEO for AI-first products", excerpt: "How to compete when the top of the funnel is being rewritten by chat interfaces.", read: "5 min", palette: "from-emerald-500/60 to-cyan-400/40" },
  { cat: "Business", title: "Fixed price vs. squads: choosing the right engagement", excerpt: "A framework we give clients before we ever quote a project.", read: "4 min", palette: "from-amber-500/60 to-red-400/40" },
  { cat: "Development", title: "Zero-downtime database migrations at scale", excerpt: "Playbook, tooling and the mistakes we no longer make.", read: "10 min", palette: "from-teal-500/60 to-green-400/40" },
  { cat: "Design", title: "Motion that earns its place", excerpt: "Framer Motion patterns we use to make dense UIs feel calm.", read: "6 min", palette: "from-sky-500/60 to-indigo-400/40" },
  { cat: "Business", title: "How we scope in 48 hours", excerpt: "The exact intake and estimation process behind our proposal SLA.", read: "5 min", palette: "from-cyan-500/60 to-blue-400/40" },
  { cat: "AI", title: "From prototype to production: AI deployment lessons", excerpt: "The architecture, monitoring, and safeguards we rely on to ship reliable AI-powered applications.", read: "7 min", palette: "from-purple-500/60 to-indigo-400/40", },
  { cat: "Development", title: "Building APIs that are fast, secure, and maintainable", excerpt: "Best practices for designing REST APIs with clean architecture, robust validation, and long-term scalability.", read: "6 min", palette: "from-cyan-500/60 to-blue-400/40", },
];

function InsightsPage() {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All"
      ? POSTS
      : POSTS.filter((post) => post.cat === selectedCategory);
  return (
    <>
      <PageHero
        eyebrow="Insights & essays"
        title={<>Playbooks from the <span className="text-gradient">delivery floor</span></>}
        description="No thought-leadership fluff. Just the patterns, tools and mistakes behind our recent projects."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {/* {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setSelectedCategory(c)} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
              {c}
            </button>
          ))} */}

          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${selectedCategory === c
                ? "border-primary bg-primary text-white"
                : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredPosts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${p.palette}`}>
                <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{p.read} read</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
