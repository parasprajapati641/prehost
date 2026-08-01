import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Rocket, Globe2, Heart } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      // { title: "About — Prehost Technology" },
      { name: "description", content: "Prehost Technology is a global software, AI and design partner founded in 2019, shipping premium products across four continents." },
      { property: "og:title", content: "About — Prehost Technology" },
      { property: "og:description", content: "Global software, AI and design partner founded in 2019." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Quality First",
    desc: "We focus on delivering high-quality solutions with clean code, attention to detail, and long-term reliability."
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "We follow agile development to deliver projects quickly without compromising quality."
  },
  {
    icon: Globe2,
    title: "Global Client Focus",
    desc: "We proudly serve clients worldwide with reliable communication, transparency, and timely project delivery."
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    desc: "We build lasting relationships by providing continuous support, trust, and value beyond project delivery."
  },
];

const TIMELINE = [
  { year: "2019", title: "Founded", desc: "Three engineers with a shared belief: software should be delivered, not promised." },
  { year: "2020", title: "First platform launch", desc: "Shipped our first enterprise ERP for a manufacturer in the Middle East." },
  { year: "2021", title: "150+ clients", desc: "Expanded across Europe and the GCC region." },
  { year: "2023", title: "AI practice", desc: "Launched a dedicated AI & ML division serving a Fortune 500 partner." },
  { year: "2025", title: "30+ countries", desc: "100+ shipped products, 50+ active clients, four continents." },
  { year: "2026+", title: "Horizon", desc: "Agentic products, private AI infra and deeper vertical SaaS partnerships." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Engineering partners for a <span className="text-gradient">software defined world</span></>}
        description="Prehost Technology was founded in 2019 to give ambitious teams the delivery quality of a Silicon Valley studio with the reliability of an in house team."
      />

      <section className="mx-auto max-w-7xl px-4 pt-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="glass p-6 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold">{v.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 md:mt-32">
        <div className="mb-12 text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Journey</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From three engineers to a global studio</h2>
        </div>
        <div className="space-y-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="glass flex gap-6 p-6 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="w-20 shrink-0 text-lg font-bold text-gradient">{t.year}</div>
              <div className="min-w-0">
                <div className="text-base font-semibold">{t.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 pb-24 md:mt-32 md:pb-32">
        <div className="glass-strong flex flex-col items-center gap-4 p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Want to build with us?</h2>
          <p className="max-w-xl text-muted-foreground">Book a free consultation with our engineering leads and we'll return a scoped plan within 48 hours.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] border-primary hover:border-0 transition hover:-translate-y-0.5">
            Book consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
