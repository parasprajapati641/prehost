  import { Link } from "@tanstack/react-router";
  import { Sparkles, Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
  import { useState } from "react";
  import api from "../../api/axios";

  const COLUMNS = [
    {
      heading: "Company",
      links: [
        { to: "/about", label: "About" },
        { to: "/careers", label: "Careers" },
        { to: "/insights", label: "Insights" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      heading: "Services",
      links: [
        { to: "/services", label: "Software Development" },
        { to: "/services", label: "AI & Machine Learning" },
        { to: "/services", label: "Cloud & DevOps" },
        { to: "/services", label: "Design & Branding" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { to: "/portfolio", label: "Portfolio" },
        { to: "/technologies", label: "Technologies" },
        { to: "/industries", label: "Industries" },
        { to: "/insights", label: "Blog" },
      ],
    },
  ] as const;

  export function SiteFooter() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        setLoading(true);

        const response = await api.post("/subscriber", {
          email,
        });

        alert(response.data.message);
        setEmail("");
      } catch (error) {
        const err = error as any;
        console.log(err);
        console.log(err.response);
        console.log(err.response?.data);

        alert(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    return (
      <footer className="relative mt-0 border-t border-primary/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-0">
                {/* <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-[var(--shadow-glow)]">
                  <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div> */}
                  <img
                    src="/PREHOSTlogo.png"
                    alt="Prehost Technology"
                    className="h-15 w-auto rounded-xl object-contain"
                  />
                {/* <div className="leading-tight">
                  <div className="text-base font-bold">Prehost Technology</div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Since 2019</div>
                </div> */}
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Transforming ideas into powerful digital solutions. Software, AI, cloud, and design partners to ambitious teams worldwide.
              </p>
              <div className="mt-6 flex items-center gap-2">
                {[
                  // {
                  //   Icon: Twitter,
                  //   link: "#",
                  //   label: "Twitter",
                  // },
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/company/prehost-technology",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Github,
                    link: "https://www.linkedin.com/company/prehost-technology",
                    label: "GitHub",
                  },
                  {
                    Icon: Mail,
                    link: "https://mail.google.com/mail/?view=cm&fs=1&to=prehost9@gmail.com",
                    label: "Email",
                  },
                  {
                    Icon: Instagram,
                    link: "https://www.instagram.com/prehost_technology/",
                    label: "Instagram"
                  },
                ].map(({ Icon, link, label }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:bg-primary hover:text-white "
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-foreground/80 transition hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Newsletter</h4>
              <p className="mt-4 text-sm text-muted-foreground">Insights on AI, product & engineering monthly.</p>
              <form className="mt-4 flex overflow-hidden rounded-full border border-primary bg-white/5" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
                />
                <button type="submit" className="shrink-0 bg-[var(--gradient-brand)] px-4 text-sm font-semibold text-primary">
                  {loading ? "Joining..." : "Join"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Prehost Technology. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Security</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
