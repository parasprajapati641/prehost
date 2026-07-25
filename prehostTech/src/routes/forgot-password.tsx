import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — Prehost Technology" },
      {
        name: "description",
        content: "Reset your Prehost Technology account password.",
      },
    ],
  }),
  component: ForgotPasswordPage,
});

const schema = z.object({
  email: z.string().email("Enter a valid email"),
});

function ForgotPasswordPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const result = schema.safeParse(data);

    if (!result.success) {
      const errs: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        errs[String(issue.path[0])] = issue.message;
      });

      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await api.post("/user/forgot-password", result.data);

      setSent(true);
      e.currentTarget.reset();
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Forgot Password"
        title={
          <>
            Reset Your <span className="text-gradient">Password</span>
          </>
        }
        description="Enter your registered email address and we'll send you a password reset link."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-md glass-strong p-8"
        >
          {sent ? (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold">
                Email Sent Successfully
              </h2>

              <p className="text-muted-foreground">
                Please check your inbox for the password reset link.
              </p>

              <Link
                to="/login"
                className="mt-6 inline-block rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-white"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/60"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />

                {loading ? "Sending..." : "Send Reset Link"}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-primary hover:underline"
                >
                  Sign In
                </Link>
              </p>

            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}