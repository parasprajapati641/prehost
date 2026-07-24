import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Code2, Cpu, Cloud, Palette, Megaphone, ShoppingCart, LifeBuoy, Users } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prehost Technology" },
      { name: "description", content: "Software, AI, cloud, design and growth services — end-to-end product delivery from a single senior team." },
      { property: "og:title", content: "Services — Prehost Technology" },
      { property: "og:description", content: "End-to-end product delivery: software, AI, cloud, design, growth and dedicated teams." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Code2, title: "Software Engineering", desc: "Web, mobile and enterprise applications engineered for scale, clarity and long-term ownership.", items: ["Website Development", "Web Applications", "Mobile Apps (iOS/Android)", "Custom Software", "Enterprise Solutions"] },
  { icon: Cpu, title: "AI & Machine Learning", desc: "From LLM copilots to computer vision and predictive systems — production-ready AI.", items: ["LLM & RAG Systems", "AI Development", "Machine Learning", "Intelligent Automation", "Python AI"] },
  { icon: Cloud, title: "Cloud & Platform Engineering", desc: "Reliable, observable, cost-aware infra on AWS, GCP, Azure and Cloudflare.", items: ["Cloud Architecture", "API Development", "Backend Engineering", "Frontend Engineering", "DevOps & SRE"] },
  { icon: Palette, title: "Design & Brand", desc: "Product design that users love and brand systems that scale across every touchpoint.", items: ["UI/UX Design", "Brand Identity", "Graphic Design", "Motion Graphics", "Video Editing"] },
  { icon: Megaphone, title: "Digital Growth", desc: "Compounding growth engines: SEO, paid, social and content — with clear attribution.", items: ["SEO", "Performance Marketing", "Social Media", "Content Strategy"] },
  { icon: ShoppingCart, title: "Commerce & Marketplaces", desc: "Headless commerce, marketplaces and storefronts on the platforms you already use.", items: ["E-commerce Development", "Shopify", "WordPress", "Magento", "Marketplace Solutions"] },
  { icon: LifeBuoy, title: "Maintenance & Support", desc: "SLA-backed support, monitoring and continuous improvement after launch.", items: ["24/7 Support", "Monitoring & Observability", "Performance Tuning", "Security Audits", "IT Consulting"] },
  { icon: Users, title: "Dedicated Development Teams", desc: "Vetted engineers embedded in your workflow — remote-first, timezone-friendly.", items: ["Staff Augmentation", "Product Squads", "CTO-as-a-Service", "Fractional Engineering Leadership"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Full-stack partners for <span className="text-gradient">every step</span></>}
        description="Choose a service or combine several into a dedicated squad. Every engagement is led by a senior team that owns the outcome, not just the sprint."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="glass p-8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)] text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-foreground/90">
                    <Check className="h-4 w-4 shrink-0 text-accent" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)]">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
