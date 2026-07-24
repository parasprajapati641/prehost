import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { User } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/technologies", label: "Technologies" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.reload();
  }
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all ${scrolled ? "bg-background/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-background/40"}`}>
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/PREHOST.svg"
              alt="Prehost Technology"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">Prehost</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Technology</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground bg-white/5" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium transition hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">

            {/* Login / Signup */}
            {user ? (
              <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="font-semibold">
                  {user.firstName}
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold"
              >
                Login / Signup
              </Link>
            )}

            {/* Book Consultation */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.8)]"
            >
              Book Consultation
            </Link>

          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-background/85 p-2 backdrop-blur-xl lg:hidden"
            >
              <div className="grid gap-0.5">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-white/5 text-foreground" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-[var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
