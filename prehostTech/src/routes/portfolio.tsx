import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      // { title: "Portfolio — Prehost Technology" },
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
  {
    title: "Reactify",
    tag: "Web3 Social Platform",
    desc: "A modern Web3 social platform that enables users to create posts, engage with communities, and manage digital assets through an integrated wallet. Built with responsive UI, secure API integration, reward tracking, and real-time transaction ledger management.",
    metric: "Web3 Ecosystem",
    image: "/projects/reactify.png",
  },
  {
    title: "Sophifino",
    tag: "Luxury Fashion Store",
    desc: "A modern fashion e-commerce platform built to showcase premium apparel collections through an elegant user experience, intuitive product discovery, secure payments, and a responsive shopping journey across all devices.",
    metric: "Global E-commerce",
    image: "/projects/sophifino.png",
  },
  {
    title: "The Liferoom Archive",
    tag: "Digital Legacy Platform",
    desc: "A full-stack web application designed to preserve personal stories and digital legacies. Built with a focus on secure authentication, scalable backend architecture, intuitive user experience, and high-performance data management.",
    metric: "Full-Stack MVP",
    image: "/projects/liferoom-archive.png",
  },
  {
    title: "Poly9",
    tag: "Spatial Commerce",
    desc: "A cutting-edge spatial commerce platform that transforms product presentation through interactive 3D experiences. It empowers businesses to create immersive digital showrooms, engage customers, and efficiently manage product content across their supply chain.",
    metric: "3D Product Experience",
    image: "/projects/poly9.png",
  },
  {
    title: "SHUBH LIBAAS",
    tag: "Fashion E-commerce",
    desc: "A modern fashion platform dedicated to Indian ethnic and contemporary women's wear. SHUBH LIBAAS blends traditional craftsmanship with modern design, offering stylish, high-quality, and affordable fashion through a seamless online shopping experience.",
    metric: "Ethnic Fashion",
    image: "/projects/shubhLibaas.png",
  },
  {
    title: "ASTRA",
    tag: "Educational Social Platform",
    desc: "Astra is a new field of SNS specializing in educational support, and we thought about what it could do for children.By taking advantage of the characteristics of SNS and collecting people's thoughts and money flow, we support facility management and We will create a new form of support through things, things, and communities for children.",
    metric: "Education & Community",
    image: "/projects/astra.png",
  },
  {
    title: "HR SIMPLIFY",
    tag: "HR Management Platform",
    desc: "A comprehensive HR management platform designed to streamline workforce operations with features including attendance tracking, leave management, payroll processing, salary calculations, task management, face recognition, and employee performance tools—all within a single, intuitive system.",
    metric: "All-in-One HR Suite",
    image: "/projects/hr-simplify.png",
  },
  {
    title: "XPOD",
    tag: "Gym Management Platform",
    desc: "A smart gym management platform that helps users discover nearby gyms, book time slots, manage wallet-based payments, and track attendance using AI-powered facial recognition. The platform streamlines gym operations while delivering a seamless fitness experience.",
    metric: "Smart Fitness",
    image: "/projects/pod.png",
  },
];

function PortfolioPage() {

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Products shaping <span className="text-gradient">real industries</span></>}
        description="Every case study is measured, referenceable and delivered by a senior team you can call directly."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="space-y-24">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              // onClick={() => setSelectedIndex(i)}
              className={`rounded-3xl border border-primary/20 p-5 md:p-6 lg:border-0 lg:p-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Hover Glow */}
              {/* <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" /> */}

              {/* Image */}
              <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72 lg:h-auto"
                />
              </div>

              {/* Content */}
              <div className="mt-6 max-w-xl space-y-5 lg:mt-0">
                <h3 className="text-2xl font-bold leading-tight transition-colors duration-300 sm:text-3xl lg:text-5xl">
                  {p.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg lg:leading-8">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary sm:px-4 sm:py-2 sm:text-xs">
                    {p.tag}
                  </span>

                  <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                    {p.metric}
                  </span>

                </div>

                <div className="flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm font-semibold text-primary sm:text-base">
                    View Case Study
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5">
            Request full case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
