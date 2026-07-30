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

  const [showUserMenu, setShowUserMenu] = useState(false);

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
    // const onScroll = () => setScrolled(window.scrollY > 8);
    // onScroll();

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // mobile menu close on scroll
      if (open) {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl border border-primary/20 px-4 py-2.5 gap-2 backdrop-blur-xl transition-all ${scrolled ? "bg-background/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-background/40"}`}>
          {/* <Link to="/" className="flex items-center gap-0 shrink-0 px-0">
            <img
              src="/PREHOST.svg"
              alt="Prehost Technology"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">Prehost</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Technology</div>
            </div>
          </Link> */}

          <Link to="/" className="flex items-center gap-1 shrink-0 px-0">
            <img
              src="/PREHOSTlogo.png"
              alt="Prehost Technology"
              className="h-8 w-auto sm:h-10 rounded-xl object-contain"
            />
          </Link>

          <nav className="hidden items-center lg:flex gap-0">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/5" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium transition hover:bg-primary/5 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">

            {/* Login / Signup */}
            {/* {user ? (
              <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <User className="h-5 w-5" />
                <span className="font-semibold">
                  {user.firstName}
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold"
              >
                Login / Signup
              </Link>
            )} */}

            <div className="relative hidden md:block">
              {user ? (
                <>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-primary/5 px-4 py-2 transition hover:bg-white/10"
                  >
                    <User className="h-5 w-5" />
                    <span className="font-semibold">{user.firstName}</span>

                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-background/95 shadow-xl backdrop-blur-xl"
                      >
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10"
                        >
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-brand)] px-4 py-2 text-xs font-semibold shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.8)]"
                >
                  Login / Signup
                </Link>
              )}
            </div>

            {/* Book Consultation */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-brand)] px-4 py-2 text-xs font-semibold shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.8)]"
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              aria-label="Toggle Menu"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
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
                {user ? (
                  <div className="flex items-center gap-2 rounded-xl px-4 py-3">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{user.firstName}</span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="mt-1 rounded-xl bg-[var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-muted-foreground hover:bg-white/5 hover:text-foreground "
                  >
                    Login / Signup
                  </Link>
                )}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-[var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-muted-foreground hover:bg-white/5 hover:text-foreground shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.8)]"
                >
                  Book Consultation
                </Link>
                {user && (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="rounded-xl border border-red-500/30 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
