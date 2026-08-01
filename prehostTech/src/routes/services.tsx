import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Code2, Cpu, Cloud, Palette, Megaphone, ShoppingCart, LifeBuoy, Users } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      // { title: "Services — Prehost Technology" },
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
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom web, mobile, and enterprise solutions built for performance, scalability, and long-term success.",
    items: [
      "Website Development",
      "Web Applications",
      "Mobile App Development",
      "Custom Software",
      "Enterprise Solutions"
    ]
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    desc: "Intelligent AI-powered solutions that automate processes and improve business efficiency.",
    items: [
      "AI Development",
      "LLM & RAG Systems",
      "Machine Learning",
      "Computer Vision",
      "Intelligent Automation"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Solutions",
    desc: "Secure cloud infrastructure, scalable APIs, and modern backend systems for growing businesses.",
    items: [
      "Cloud Architecture",
      "Backend Development",
      "API Development",
      "DevOps",
      "Cloud Deployment"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    desc: "Beautiful, user-focused designs that strengthen your brand and improve customer experience.",
    items: [
      "UI/UX Design",
      "Brand Identity",
      "Graphic Design",
      "Motion Graphics",
      "Prototyping"
    ]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to grow your online presence and generate quality leads.",
    items: [
      "SEO",
      "Social Media Marketing",
      "Performance Marketing",
      "Content Marketing"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom online stores and e-commerce platforms designed to increase sales and customer engagement.",
    items: [
      "Shopify",
      "WooCommerce",
      "WordPress",
      "Magento",
      "Custom E-commerce"
    ]
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "Reliable maintenance, security updates, and ongoing technical support after project delivery.",
    items: [
      "Application Maintenance",
      "Performance Optimization",
      "Security Updates",
      "Bug Fixes",
      "Technical Support"
    ]
  },
  {
    icon: Users,
    title: "IT Consulting",
    desc: "Expert technology consulting to help businesses choose the right solutions and accelerate digital transformation.",
    items: [
      "Technology Consulting",
      "Architecture Planning",
      "Digital Transformation",
      "Project Planning",
      "Technical Strategy"
    ]
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Full-stack partners for <span className="text-gradient">every step</span></>}
        description="Choose a service or combine several into a dedicated squad. Every engagement is led by a senior team that owns the outcome, not just the sprint."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="glass p-8 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)] text-primary shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-foreground/90">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
