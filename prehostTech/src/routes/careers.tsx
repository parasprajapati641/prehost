import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock, Briefcase, GraduationCap, Heart, Sparkles, Coffee, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      // { title: "Careers — Prehost Technology" },
      { name: "description", content: "Join Prehost Technology. Remote-first, senior-heavy teams shipping premium software, AI and cloud products worldwide." },
      { property: "og:title", content: "Careers — Prehost Technology" },
      { property: "og:description", content: "Remote-first roles across engineering, AI, design and growth." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const ROLES = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", loc: "Remote (Global)", type: "Full-time" },
  { title: "Staff AI Engineer (LLM / RAG)", team: "AI & ML", loc: "Remote (EU / MENA)", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", loc: "Remote (Global)", type: "Full-time" },
  { title: "DevOps / Platform Engineer", team: "Cloud", loc: "Remote (EU / APAC)", type: "Full-time" },
  { title: "Mobile Engineer (iOS/Android)", team: "Engineering", loc: "Remote (Global)", type: "Full-time" },
  { title: "Engineering Manager", team: "Engineering", loc: "Remote (EU)", type: "Full-time" },
  { title: "Growth & Performance Marketer", team: "Growth", loc: "Remote (Global)", type: "Full-time" },
  { title: "Software Engineering Intern", team: "Engineering", loc: "Remote", type: "Internship" },
];

const BENEFITS = [
  { icon: Building2, title: "Office-based", desc: "Work from our office and collaborate closely with the team" },
  { icon: Heart, title: "Real health cover", desc: "Comprehensive health & wellness stipend, wherever you live." },
  // { icon: GraduationCap, title: "Learning budget", desc: "$2,000/year for courses, books and conferences." },
  { icon: Coffee, title: "Workspace stipend", desc: "office or coworking budget your call." },
  { icon: Sparkles, title: "Equity for seniors", desc: "Meaningful ownership for staff and above." },
  { icon: Clock, title: "Sane hours", desc: "Sustainable pace. No hero mode, no permanent on-call." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the <span className="text-gradient">next 100 products</span> with us</>}
        description="We hire senior engineers, designers and product leaders who care about craft. Remote first, timezone friendly, and built to last."
      />

      {/* <section className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 pt-5">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Open positions</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Roles we're hiring for</h2>
          </div>
          <p className="text-sm text-muted-foreground">Don't see your role? <a href="#apply" className="text-primary hover:underline">Send an open application.</a></p>
        </div>
        <div className="grid gap-3">
          {ROLES.map((r, i) => (
            <motion.a
              key={r.title}
              href="#apply"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="glass group flex items-center justify-between gap-4 p-5 transition hover:-translate-y-0.5 hover:border-0"
            >
              <div className="min-w-0">
                <div className="text-base font-semibold">{r.title}</div>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {r.team}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.loc}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5">{r.type}</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>
      </section> */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:mt-1">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Benefits</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built for people who plan to stay</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="glass p-6 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/50 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold">{b.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="apply" className="mx-auto mt-24 max-w-5xl px-4 pb-24 md:mt-32 md:pb-32">
        <div className="glass-strong flex flex-col items-center gap-4 p-10 text-center md:p-16 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apply now</h2>
          <p className="max-w-xl text-muted-foreground">Send your CV or portfolio. Every application is reviewed by a human, usually within a week.</p>
          {/* <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=prehost9@gmail.com" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-white">
            Apply <ArrowRight className="h-4 w-4" />
          </Link> */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prehost9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(37,99,235,0.3)] border-primary hover:border-0 transition hover:-translate-y-0.5"
          >Apply <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </>
  );
}
