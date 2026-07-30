import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Code2, Cpu, Cloud, Palette, Megaphone, ShoppingCart, LifeBuoy,
  Sparkles, Zap, Shield, Users, Rocket, Check, Star, Globe2, Building2,
  Heart, GraduationCap, Landmark, Home, ShoppingBag, Factory, Truck, Plane, UtensilsCrossed,
  HardHat, Scale, UserCog, Briefcase, Server, Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // { title: "Prehost Technology — Build the Future with Premium Software & AI" },
      { name: "description", content: "Prehost Technology designs, develops and scales world-class digital products, AI solutions, cloud platforms and mobile apps for ambitious businesses worldwide." },
      { property: "og:title", content: "Prehost Technology — Build the Future" },
      { property: "og:description", content: "Software, AI, cloud, design and growth partners to startups, SMEs and enterprises worldwide." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ---------------- data ---------------- */

const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "30+", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const SERVICES = [
  { icon: Code2, title: "Software Engineering", desc: "Web, mobile and enterprise apps engineered for scale and clarity.", items: ["Web Applications", "Mobile Apps", "Custom Software", "Enterprise Solutions"] },
  { icon: Cpu, title: "AI & Machine Learning", desc: "From LLM copilots to intelligent automation and predictive systems.", items: ["AI Development", "ML Solutions", "Automation", "LangChain / RAG"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Production grade infra on AWS, GCP and Azure resilient by design.", items: ["Cloud Architecture", "API Development", "Backend Engineering", "DevOps & SRE"] },
  { icon: Palette, title: "Design & Brand", desc: "Product design that users love and brand systems that scale.", items: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Video Editing"] },
  { icon: Megaphone, title: "Digital Growth", desc: "SEO, performance and social growth engines that compound.", items: ["SEO", "Performance Marketing", "Social Media", "Content Strategy"] },
  { icon: ShoppingCart, title: "Commerce & Platforms", desc: "Marketplaces and storefronts on Shopify, WordPress and Magento.", items: ["E-commerce", "Shopify", "WordPress", "Magento"] },
  { icon: LifeBuoy, title: "Maintenance & Support", desc: "SLA-backed support, monitoring and continuous improvement.", items: ["24/7 Support", "Monitoring", "Performance Tuning", "Security Audits"] },
  { icon: Users, title: "Dedicated Teams", desc: "Vetted engineers embedded in your workflow — remote-first.", items: ["Staff Augmentation", "Product Squads", "IT Consulting", "CTO as a Service"] },
];

const INDUSTRIES = [
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Finance" },
  { icon: Home, name: "Real Estate" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Plane, name: "Travel" },
  { icon: Building2, name: "Hospitality" },
  { icon: UtensilsCrossed, name: "Food Delivery" },
  { icon: HardHat, name: "Construction" },
  { icon: Scale, name: "Legal" },
  { icon: UserCog, name: "Human Resources" },
  { icon: Rocket, name: "Startups" },
  { icon: Briefcase, name: "Enterprise" },
  { icon: Server, name: "SaaS" },
  { icon: Globe2, name: "Government" },
];

const WHY = [
  { icon: Users, title: "Experienced Engineers", desc: "Senior heavy teams with product intuition, not just code output." },
  { icon: Zap, title: "Modern Technologies", desc: "React, Next.js, Node, Python, Go, Rust the right tool per job." },
  { icon: Rocket, title: "Agile Delivery", desc: "Two week iterations with demoable value at every checkpoint." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 ready practices, encryption at rest and in transit." },
  { icon: Wrench, title: "Scalable Architecture", desc: "Designed for 10x event driven, observable, cost-aware." },
  { icon: Sparkles, title: "Transparent Communication", desc: "Shared boards, weekly reviews, live dashboards. No surprises." },
];

// const TECH = {
//   Frontend: ["React", "Next.js","Angular", "Vue", "Nuxt.js", "Svelte", "Remix", "Astro", "HTML", "CSS", "Sass", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Material UI", "Shadcn UI", "Redux", "Zustand", "React Query", "TanStack Router", "Framer Motion", "Ant Design"],
//   Backend: [ "Node.js", "Express", "NestJS", "Fastify", "Python", "Django", "FastAPI", "Flask", "PHP", "Laravel", "CodeIgniter", "Java", "Spring Boot", "C#", ".NET", "Go", "Gin", "Rust", "Ruby on Rails"],
//   Databases: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "SQLite", "Firebase", "Supabase", "Redis", "Elasticsearch", "Oracle Database"],
//   Cloud: ["AWS",
//       "Azure",
//       "Google Cloud",
//       "DigitalOcean",
//       "Docker",
//       "Kubernetes",
//       "Terraform",
//       "GitHub Actions",
//       "GitLab CI/CD",
//       "Jenkins",
//       "NGINX",
//       "Cloudflare",
//       "Vercel", "Netlify", "Render"],
//   AI: ["OpenAI",
//       "Gemini",
//       "Claude",
//       "LangChain",
//       "LlamaIndex",
//       "Hugging Face",
//       "Python AI",
//       "Machine Learning",
//       "Deep Learning", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "RAG", "Vector Databases"],
// };

const PROJECTS = [
  { title: "Meridian Health", tag: "Healthcare Platform", desc: "Telemedicine + EHR for 40k clinicians across 3 continents.", palette: "from-blue-500/60 to-cyan-400/40" },
  { title: "Nova AI", tag: "AI SaaS Dashboard", desc: "GPT-powered analytics copilot with real-time embeddings.", palette: "from-indigo-500/60 to-fuchsia-400/40" },
  { title: "Vanta CRM", tag: "Sales Platform", desc: "Custom CRM replacing legacy Salesforce for a fintech.", palette: "from-emerald-500/60 to-cyan-400/40" },
  { title: "OrbitERP", tag: "Enterprise ERP", desc: "Manufacturing ERP unifying 12 factories into one system.", palette: "from-orange-500/60 to-rose-400/40" },
  { title: "Kart Commerce", tag: "E-commerce", desc: "Headless commerce doing $60M+ GMV, 200ms p95 checkout.", palette: "from-cyan-500/60 to-blue-400/40" },
  { title: "Atlas LMS", tag: "Learning Platform", desc: "Adaptive learning for 1M+ students with AI tutors.", palette: "from-violet-500/60 to-blue-400/40" },
  // { title: "TableOne", tag: "Restaurant Platform", desc: "POS + reservations SaaS for 3k independent restaurants.", palette: "from-rose-500/60 to-orange-400/40" },
  // { title: "Estate Nexus", tag: "Real Estate Portal", desc: "Marketplace with 3D tours, valuations and mortgage flow.", palette: "from-sky-500/60 to-indigo-400/40" },
  // { title: "Ledger Finance", tag: "Finance Dashboard", desc: "Realtime treasury dashboard for multi-currency ops.", palette: "from-teal-500/60 to-green-400/40" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep dive workshops to map goals, users and constraints." },
  { step: "02", title: "Research", desc: "Market, competitive and technical feasibility validation." },
  { step: "03", title: "Planning", desc: "Roadmap, architecture and success metrics locked in." },
  { step: "04", title: "UI/UX", desc: "High fidelity design system and interactive prototypes." },
  { step: "05", title: "Development", desc: "Two week sprints with continuous integration and previews." },
  { step: "06", title: "Testing", desc: "Automated, manual and load testing to production standards." },
  { step: "07", title: "Deployment", desc: "Blue/green rollouts to AWS, GCP or your private cloud." },
  { step: "08", title: "Support", desc: "SLA backed maintenance, monitoring and iteration." },
];

const TESTIMONIALS = [
  { name: "Sara Bennett", role: "VP Engineering, Meridian Health", quote: "Prehost delivered our telemedicine platform in 14 weeks. Their AI team quietly outperformed our in house benchmark." },
  { name: "Daniel Okafor", role: "Founder, Kart Commerce", quote: "Every sprint shipped. Every deadline hit. Rare, honest and technically brilliant partners." },
  { name: "Priya Raman", role: "CTO, OrbitERP", quote: "They rewrote 8 years of legacy ERP without a single production outage. That should be impossible." },
  { name: "Marcus Weiss", role: "Head of Product, Nova AI", quote: "The LLM pipeline they built is the reason we raised our Series B. Full stop." },
];

const TIMELINE = [
  { year: "2019", title: "Founded", desc: "Three engineers, one office, a promise: no vaporware." },
  { year: "2021", title: "First 50 Clients", desc: "Expanded across Europe and the Middle East." },
  { year: "2023", title: "AI Practice", desc: "Launched our AI & ML division with a Fortune 500 partner." },
  { year: "2025", title: "30+ Countries", desc: "Remote first teams shipping across four continents." },
  { year: "2026+", title: "The Future", desc: "Agentic products, private AI infra, deeper vertical SaaS." },
];

const FAQ = [
  { q: "How quickly can we start?", a: "Discovery calls happen within 48 hours. Most engagements begin within 2 weeks of signing." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We tailor team shape and pricing to funded startups, SMEs and Fortune 500s alike." },
  { q: "Who owns the code and IP?", a: "You do 100%. Everything is delivered in your repositories under your license." },
  { q: "How do you price projects?", a: "Fixed scope, time and materials, or dedicated squads. We recommend the model that fits your risk profile." },
  { q: "What about security and compliance?", a: "SOC 2 ready practices, GDPR/HIPAA experience, code scanning, secrets management and pentesting on request." },
  { q: "Do you sign NDAs?", a: "Always before any details are shared." },
];

const CLIENTS = ["Meridian", "OrbitERP", "Nova AI", "Kart", "Atlas", "Ledger", "Vanta", "Estate Nexus", "TableOne", "Skyline"];

/* ---------------- component ---------------- */

function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Marquee />
      <Services />
      <Industries />
      <WhyUs />
      {/* <Technologies /> */}
      <Portfolio />
      <Process />
      <Testimonials />
      <Timeline />
      <FAQSection />
      <CTA />
    </div>
  );
}

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* floating cards */}
      <div className="pointer-events-none absolute left-[6%] top-40 hidden lg:block">
        <FloatingCard delay={0}>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-300"><Check className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Deployment</div>
              <div className="text-sm font-semibold">Prod · 200ms p95</div>
            </div>
          </div>
        </FloatingCard>
      </div>
      <div className="pointer-events-none absolute right-[6%] top-56 hidden lg:block">
        <FloatingCard delay={1.5}>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/25 text-primary"><Cpu className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">AI Copilot</div>
              <div className="text-sm font-semibold">+38% conversion</div>
            </div>
          </div>
        </FloatingCard>
      </div>
      <div className="pointer-events-none absolute right-[12%] top-[26rem] hidden lg:block">
        <FloatingCard delay={3}>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/25 text-accent"><Shield className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Security</div>
              <div className="text-sm font-semibold">SOC 2 Type II</div>
            </div>
          </div>
        </FloatingCard>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Silicon-Valley-grade engineering, delivered globally
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.02]"
        >
          Build the Future with{" "}
          <span className="text-gradient">Prehost Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          We design, develop and scale world class digital products, AI systems, cloud platforms and mobile apps for ambitious businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5">
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-white/10">
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass px-5 py-5">
              <div className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="glass-strong animate-float px-4 py-3 shadow-[var(--shadow-elevated)]" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Marquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative border-y border-primary/10 bg-primar/[0.02] py-10">
      <div className="mx-auto mb-6 max-w-7xl px-4">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by teams shipping to millions
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 px-6">
          {row.map((name, i) => (
            <div key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground/60">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="What we do"
          title={<>End to end digital <span className="text-gradient">product delivery</span></>}
          description="Eight practices, one integrated team. Choose a service or compose them into a squad tailored to your roadmap."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.3)]"
            >
              {/* <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40  rounded-full bg-primary/55 opacity-0 blur-3xl transition group-hover:opacity-100" /> */}
              <>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100 " />

                <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
              </>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] text-primary ">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-xs text-foreground/80">
                    <Check className="h-3.5 w-3.5 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="relative py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Industries we serve"
          title={<>Deep expertise across <span className="text-gradient">18 industries</span></>}
          description="From regulated healthcare and finance to fast moving retail and SaaS we bring vertical fluency, not template solutions."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 grid-cols-3 md:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.03 }}
              className="group glass flex flex-col items-center justify-center gap-2 p-5 text-center transition hover:-translate-y-0.5 hover:border-0 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.2)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-primary transition group-hover:bg-primary/15 group-hover:text-primary">
                <ind.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-medium">{ind.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Prehost"
          title={<>Engineering partners you can <span className="text-gradient">bet the roadmap on</span></>}
          description="Senior heavy squads, transparent delivery and a bias for shipping the operating model that top teams choose."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass flex gap-4 p-6 hover:border-white transition hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.2)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-primary">
                <w.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-semibold">{w.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function Technologies() {
//   return (
//     <section id="technologies" className="relative py-5 md:py-10">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeader
//           eyebrow="Technologies"
//           title={<>The <span className="text-gradient">modern stack</span>, mastered end to end</>}
//           description="We pick the boring, proven tools until an exciting one earns its place."
//         />
//         <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {Object.entries(TECH).map(([cat, list], i) => (
//             <motion.div
//               key={cat}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.5, delay: i * 0.04 }}
//               className="glass p-6 tran hover:border-primary transition hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.2)]"
//             >
//               <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{cat}</div>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {list.map((t) => (
//                   <span key={t} className="rounded-full border border-primary/50 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground/90">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Recent work"
          title={<>Products shaping <span className="text-gradient">real industries</span></>}
          description="A cross section of what we've shipped in the last 24 months. Every case study is measured, real and referenceable."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${p.palette}`}>
                <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute inset-x-6 bottom-6">
                  <div className="text-xl font-bold text-white">{p.title}</div>
                  <p className="mt-1 text-xs text-white/80">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.2)] hover:border-0">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="How we work"
          title={<>An 8 step process, <span className="text-gradient">tuned for velocity</span></>}
          description="Predictable delivery without process theater. Every step has an owner, an artifact and a definition of done."
        />
        <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass relative overflow-hidden p-6 transition hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.2)] hover:border-0"
            >
              <div className="md:text-4xl font-bold tracking-tight text-primary">{p.step}</div>
              <div className="md:mt-3 text-sm md:text-base font-semibold">{p.title}</div>
              <p className="md:mt-1 text-xs md:text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Client stories"
          title={<>Words from the <span className="text-gradient">people we build with</span></>}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="md:h-4 md:w-4 h-3 w-3 fill-current" />)}
              </div>
              <blockquote className="mt-4 md:text-lg leading-snug text-foreground/95">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid md:h-10 md:w-10 h-8 w-8 place-items-center rounded-full bg-primary text-xs md:text-sm font-bold text-white">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Our journey"
          title={<>A short history, a <span className="text-gradient">long horizon</span></>}
        />
        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent md:block" />
          <div className="space-y-6 md:space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className={`grid gap-4 md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className={`glass p-6 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.year}</div>
                  <div className="mt-2 text-lg font-semibold">{t.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          eyebrow="Questions"
          title={<>Frequently <span className="text-gradient">asked</span></>}
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          {FAQ.map((f) => (
            <details className="group border-b border-border last:border-b-0 transition-all duration-300 open:bg-primary/5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-6 font-semibold transition-colors duration-300 hover:bg-primary/5">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-open:rotate-45 group-open:bg-primary group-open:text-white">
                  +
                </span>    
              </summary>
              <p className="mt-2 mb-2 px-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-5 md:py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[var(--gradient-brand)] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-25" />
          <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Have an idea? Let's build it right.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-foreground/85 md:text-lg">
              Book a free 30 minute consultation with our engineering leads. We'll return a scoped plan within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:-translate-y-0.5">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-secondary bg-white/10 px-6 py-3 text-sm font-semibold text-primary backdrop-blur hover:bg-white/20">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
