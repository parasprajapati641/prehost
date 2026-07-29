import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Send, CheckCircle, EyeOff, Eye, Lock } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      // { title: "Forgot Password — Prehost Technology" },
      {
        name: "description",
        content: "Reset your Prehost Technology account password.",
      },
    ],
  }),
  component: ForgotPasswordPage,
});

// const schema = z.object({
//   email: z.string().email("Enter a valid email"),
// });

const schema = z
  .object({
    email: z
      .string().
      trim()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

function ForgotPasswordPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const clearError = (field: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

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
      // await api.post("/user/forgot-password", result.data);

      await api.post("/user/forgot-password", {
        email: result.data.email,
        password: result.data.password,
      });

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
        description="Enter your registered email address and create a new password."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-md glass p-8"
        >
          {sent ? (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold">
                Password Reset Successfully
              </h2>

              <p className="text-muted-foreground">
                Your password has been updated successfully. Please login with your new password.
              </p>

              <Link
                to="/login"
                className="mt-6 inline-block rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-primary"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary "
                    onChange={() => clearError("email")}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
              <div >
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    placeholder="Enter new password"
                    className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none transition focus:border-primary"
                    onChange={() => clearError("password")}
                  />

                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-primary" />
                    ) : (
                      <Eye className="h-4 w-4 text-primary" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="new-password"
                    placeholder="Confirm new password"
                    className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none transition focus:border-primary"
                    onChange={() => clearError("confirmPassword")}
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2">
                    {showConfirm ? (
                      <EyeOff className="h-4 w-4 text-primary" />
                    ) : (
                      <Eye className="h-4 w-4 text-primary" />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5"
              >
                {/* <Send className="h-4 w-4" /> */}

                {loading ? "Updating..." : "Reset Password"}
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