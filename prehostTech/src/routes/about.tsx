import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Rocket, Globe2, Heart, Mail, Linkedin, Instagram } from "lucide-react";
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

const FOUNDERS = [
  {
    name: "Paras Prajapati",
    role: "Founder & CEO",
    image: "/founder/paras-prajapati.png",
    //  I specialize in React.js, Next.js, TypeScript, Node.js, Python, Shopify, WordPress, Magento, and React Native, helping startups, agencies, and businesses turn ideas into modern, reliable, and scalable products.
    description: `I'm Paras Prajapati, the Founder & CEO of Prehost Technology and a Senior Full-Stack Developer with 6+ years of experience building fast, scalable, and high-performing digital solutions.

    As the founder of Prehost Technology, my mission is to deliver innovative software that solves real business challenges, enhances user experiences, and creates long-term value through technology.`,
    expertise: [
      "Full-Stack Development",
      "Custom Software Development",
      "SaaS Development",
      "Web & Mobile Solutions",
      "React.js & Next.js",
      "Node.js & TypeScript",
      "UI/UX Strategy",
      "Project Management",
      "Business Growth",
      "Leadership",
    ],
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=prehost9@gmail.com",
    linkedin: "https://in.linkedin.com/in/paras-prajapati-4b9831235",
    instagram: "https://www.instagram.com/prehost_technology/",
  },
];

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

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-14 text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Leadership
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our <span className="text-gradient">Founder</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The vision behind Prehost Technology, focused on innovation,
              engineering excellence, and building long-term partnerships.
            </p>
          </div>
          <div className="mt-16">
            {FOUNDERS.map((f) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-16 lg:grid-cols-[340px_1fr] items-center">

                  {/* Left */}
                  <div className="relative mx-auto">
                    <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />

                    <img
                      src={f.image}
                      alt={f.name}
                      className="relative h-[420px] w-[320px] rounded-3xl object-cover"
                    />
                  </div>

                  {/* Right */}
                  <div className="items-start text-center lg:text-left">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Founder & CEO
                    </span>

                    <h2 className="mt-3 text-2xl font-bold lg:text-3xl">
                      {f.name}
                    </h2>

                    <p className="whitespace-pre-line mt-6 text-base leading-6 text-muted-foreground text-left">
                      {f.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {f.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-primary/20 px-4 py-2 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex gap-4">
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-primary/20 px-4 py-2 transition hover:bg-primary hover:text-white flex items-center text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>

                      <a
                        href={f.email}
                        className="rounded-xl border border-primary/20 px-4 py-2 transition hover:bg-primary hover:text-white flex items-center text-primary"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={f.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-primary/20 px-4 py-2 transition hover:bg-primary hover:text-white flex items-center text-primary"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="mt-10 border-l-4 border-primary pl-6">
                      <p className="text-sm italic text-muted-foreground">
                        "Every successful digital product starts with a vision, grows through innovation, and succeeds by creating real value."
                      </p>

                      <p className="mt-4 font-semibold">
                        - {f.name}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-5 max-w-5xl px-4 md:mt-10">
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

      <section className="mx-auto mt-15 max-w-5xl px-4 pb-24 md:mt-20 md:pb-20">
        <div className="glass-strong border border-primary flex flex-col items-center gap-4 p-10 text-center md:p-16">
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
