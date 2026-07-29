import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Github, Check , Instagram} from "lucide-react";
import { PageHero } from "@/components/site/Section";

import api from "@/api/axios";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prehost Technology" },
      { name: "description", content: "Talk to Prehost Technology. Book a free consultation and receive a scoped project plan within 48 hours." },
      { property: "og:title", content: "Contact — Prehost Technology" },
      { property: "og:description", content: "Book a free consultation. Scoped plan within 48 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().regex(/^[A-Za-z ]+$/, "Invalid Name").trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().min(1, "Email is required").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format").max(200),
  phone: z.string().trim().regex(/^[0-9+\-\s()]{8,20}$/, "Invalid phone number").optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional(),
  details: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

const BUDGETS = ["<$10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    // setErrors({});
    // setSent(true);

    setErrors({});

    try {
      const response = await api.post("/contact", result.data);

      console.log("Response:", response);
      console.log("Status:", response.status);

      if (response.status === 200) {
        formElement.reset();
        setSent(true);
      }
    } catch (error) {
      console.error(error);
      toast("Failed to send message");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title={<>Book a <span className="text-gradient">free consultation</span></>}
        description="Tell us about your project. You'll get a scoped plan and a first-call slot within 48 hours."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass-strong p-8 md:p-10 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] border-primary"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Thanks — we're on it</h3>
                <p className="max-w-md text-primary">A senior team member will reply within one business day with next steps and calendar slots.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Alex Chen" error={errors.name} required />
                  <Field label="Company" name="company" placeholder="Acme Inc." error={errors.company} />
                  <Field label="Work email" name="email" type="email" placeholder="alex@company.com" error={errors.email} required />
                  <Field label="Phone" name="phone" type="tel" placeholder="+1 555 000 1234" error={errors.phone} />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" value={b} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-primary/10 bg-accent/50 px-4 py-1.5 text-xs font-medium transition peer-checked:border-primary/60 peer-checked:bg-primary/15 peer-checked:text-primary hover:bg-white/10">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Project details</label>
                  <textarea
                    id="details" name="details" rows={5}
                    placeholder="Tell us about the product, timeline and any constraints…"
                    className="w-full rounded-2xl border border-primary/50 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-white/[0.07]"
                  />
                  {errors.details && <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>}
                </div>

                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5">
                  Schedule Consultation <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">We reply within one business day. NDAs available on request.</p>
              </form>
            )}
          </motion.div>

          <div className="space-y-4">
            <InfoCard icon={Mail} label="Email" value="prehost9@gmail.com" />
            <InfoCard icon={Phone} label="Phone" value="+91 79904 86335" />
            <InfoCard icon={MapPin} label="Head office" value="Time Trade Centre, 275, Vesu Canal Rd, opposite polaris, Magob, puna, Surat, Gujarat 395010" />
            <InfoCard icon={Clock} label="Business hours" value={<>Mon–Fri · 9:00am – 6:00pm</>} />

            {/* <div className="glass p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Follow us</div>
              <div className="flex gap-2">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div> */}

            <div className="glass p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Follow us
              </div>

              <div className="flex gap-2">
                {[
                  // {
                  //   Icon: Twitter,
                  //   link: "#",
                  // },
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/company/prehost-technology",
                  },
                  {
                    Icon: Github,
                    link: "https://github.com/parasprajapati641",
                  },
                  {
                    Icon: Instagram,
                    link: "https://www.instagram.com/prehost_technology/",
                    label: "Instagram"
                  },
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:border-0 hover:text-white hover:bg-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass overflow-hidden">
              {/* <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-primary/40 to-accent/30">
                <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-strong flex items-center gap-2 px-4 py-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-accent" /> Prehost HQ · Dubai
                  </div>
                </div>
              </div> */}
              <iframe
                title="Prehost Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8773632712673!2d72.8724829088464!3d21.197030180413343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c200733af%3A0x1381040cfe6c2e42!2sPrehost%20Technology!5e0!3m2!1sen!2sin!4v1784922856509!5m2!1sen!2sin"
                className="w-full aspect-[4/3]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, error, type = "text", placeholder, required }: { label: string; name: string; error?: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        className="w-full rounded-2xl border border-primary/50 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode }) {
  return (
    <div className="glass group flex gap-4 p-5 hadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-primary group-hover:text-white group-hover:bg-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium text-foreground/95">{value}</div>
      </div>
    </div>
  );
}
