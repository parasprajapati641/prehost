import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Prehost Technology" },
      { name: "description", content: "A cross-section of software, AI and platform work Prehost Technology has shipped across healthcare, finance, retail and SaaS." },
      { property: "og:title", content: "Portfolio — Prehost Technology" },
      { property: "og:description", content: "Real projects, measured outcomes — healthcare, finance, e-commerce, SaaS and more." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  { title: "Meridian Health", tag: "Healthcare Platform", desc: "Telemedicine + EHR serving 40k clinicians across 3 continents.", metric: "1.2M patients", palette: "from-blue-500/60 to-cyan-400/40" },
  { title: "Nova AI", tag: "AI SaaS Dashboard", desc: "GPT-powered analytics copilot with real-time embeddings.", metric: "+38% conversion", palette: "from-indigo-500/60 to-fuchsia-400/40" },
  { title: "Vanta CRM", tag: "CRM System", desc: "Custom CRM replacing legacy Salesforce for a fintech.", metric: "$2.4M saved/yr", palette: "from-emerald-500/60 to-cyan-400/40" },
  { title: "OrbitERP", tag: "ERP Software", desc: "Manufacturing ERP unifying 12 factories into one system.", metric: "12 sites live", palette: "from-orange-500/60 to-rose-400/40" },
  { title: "Kart Commerce", tag: "E-commerce Platform", desc: "Headless commerce doing $60M+ GMV, 200ms p95 checkout.", metric: "$60M GMV", palette: "from-cyan-500/60 to-blue-400/40" },
  { title: "Atlas LMS", tag: "Learning Management", desc: "Adaptive learning for 1M+ students with AI tutors.", metric: "1M+ students", palette: "from-violet-500/60 to-blue-400/40" },
  { title: "TableOne", tag: "Restaurant Platform", desc: "POS + reservations SaaS for 3k independent restaurants.", metric: "3,000 venues", palette: "from-rose-500/60 to-orange-400/40" },
  { title: "Estate Nexus", tag: "Real Estate Portal", desc: "Marketplace with 3D tours, valuations and mortgage flow.", metric: "$1.8B listings", palette: "from-sky-500/60 to-indigo-400/40" },
  { title: "Ledger Finance", tag: "Finance Dashboard", desc: "Realtime treasury dashboard for multi-currency ops.", metric: "27 currencies", palette: "from-teal-500/60 to-green-400/40" },
  { title: "RouteX Logistics", tag: "Logistics Management", desc: "Fleet TMS with route optimization and driver mobile app.", metric: "−22% miles", palette: "from-amber-500/60 to-red-400/40" },
  { title: "Booklane", tag: "Booking Platform", desc: "Multi-vertical booking engine with dynamic pricing.", metric: "4.9★ NPS", palette: "from-purple-500/60 to-pink-400/40" },
  { title: "PeoplePeak", tag: "HR Management", desc: "ATS + onboarding + performance for 500-person orgs.", metric: "500+ orgs", palette: "from-lime-500/60 to-teal-400/40" },
  { title: "StockCore", tag: "Inventory Management", desc: "Multi-warehouse inventory & fulfillment for retail chains.", metric: "18 warehouses", palette: "from-fuchsia-500/60 to-blue-400/40" },
];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Products shaping <span className="text-gradient">real industries</span></>}
        description="Every case study is measured, referenceable and delivered by a senior team you can call directly."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${p.palette}`}>
                <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <div className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {p.tag}
                  </div>
                  <div className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold text-accent backdrop-blur">
                    {p.metric}
                  </div>
                </div>
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-xs text-white/85">{p.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)]">
            Request full case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
