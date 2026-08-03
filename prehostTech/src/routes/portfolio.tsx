import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Section";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "ASTRA",
    tag: "Educational Social Platform",
    desc: "Astra is a new field of SNS specializing in educational support, and we thought about what it could do for children.By taking advantage of the characteristics of SNS and collecting people's thoughts and money flow, we support facility management and We will create a new form of support through things, things, and communities'' for children.",
    metric: "Education & Community",
    image: "/projects/astra.png",
  },
  {
    title: "SHUBH LIBAAS",
    tag: "Fashion E-commerce",
    desc: "A modern fashion platform dedicated to Indian ethnic and contemporary women's wear. SHUBH LIBAAS blends traditional craftsmanship with modern design, offering stylish, high-quality, and affordable fashion through a seamless online shopping experience.",
    metric: "Ethnic Fashion",
    image: "/projects/shubhLibaas.png",
  },
  {
    title: "HR SIMPLIFY",
    tag: "HR Management Platform",
    desc: "A comprehensive HR management platform designed to streamline workforce operations with features including attendance tracking, leave management, payroll processing, salary calculations, task management, face recognition, and employee performance tools—all within a single, intuitive system.",
    metric: "All-in-One HR Suite",
    image: "/projects/hr-simplify.png",
  },
  {
    title: "Poly9",
    tag: "Spatial Commerce",
    desc: "A cutting-edge spatial commerce platform that transforms product presentation through interactive 3D experiences. It empowers businesses to create immersive digital showrooms, engage customers, and efficiently manage product content across their supply chain.",
    metric: "3D Product Experience",
    image: "/projects/poly9.png",
  },
  {
    title: "XPOD",
    tag: "Gym Management Platform",
    desc: "A smart gym management platform that helps users discover nearby gyms, book time slots, manage wallet-based payments, and track attendance using AI-powered facial recognition. The platform streamlines gym operations while delivering a seamless fitness experience.",
    metric: "Smart Fitness",
    image: "/projects/pod.png",
  },
  {
    title: "The Liferoom Archive",
    tag: "Digital Legacy Platform",
    desc: "A full-stack web application designed to preserve personal stories and digital legacies. Built with a focus on secure authentication, scalable backend architecture, intuitive user experience, and high-performance data management.",
    metric: "Full-Stack MVP",
    image: "/projects/liferoom-archive.png",
  },
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
];

function PortfolioPage() {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const nextProject = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev === PROJECTS.length - 1 ? 0 : prev + 1;
    });
  };

  const prevProject = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return PROJECTS.length - 1;
      return prev === 0 ? PROJECTS.length - 1 : prev - 1;
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Products shaping <span className="text-gradient">real industries</span></>}
        description="Every case study is measured, referenceable and delivered by a senior team you can call directly."
      />
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
          <div className="relative mx-auto my-6 w-full max-w-6xl max-h-[80vh] lg:max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 bg-background">

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Image */}

              <div className="relative flex h-64 items-center justify-center bg-muted sm:h-80 lg:h-[480px] xl:h-[520px]">
                <img
                  src={PROJECTS[selectedIndex].image}
                  alt={PROJECTS[selectedIndex].title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}

              <div className="flex flex-col p-5 sm:p-8 lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {PROJECTS[selectedIndex].tag}
                </span>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {PROJECTS[selectedIndex].title}
                </h2>

                <p className="mt-5 max-h-64 overflow-y-auto pr-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {PROJECTS[selectedIndex].desc}
                </p>

                <div className="mt-6 inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-sm">
                  {PROJECTS[selectedIndex].metric}
                </div>
              </div>

            </div>

            {/* Prev / Next*/}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 lg:hidden">
              <button
                onClick={prevProject}
                className="rounded-full bg-black/60 p-3 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextProject}
                className="rounded-full bg-black/60 p-3 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/50 p-3 text-white lg:block"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/50 p-3 text-white lg:block"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>

        </div>
      )}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={`absolute inset-0 ${p.image || "from-blue-500/60 to-cyan-400/40"}`} />
                )}
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
                  <h3 className="text-xl font-bold text-black">{p.title}</h3>
                  <p className="mt-1 text-xs text-black/85">{p.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5">
            Request full case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
