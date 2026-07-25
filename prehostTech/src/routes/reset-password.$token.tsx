import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/reset-password/$token")({
  component: ResetPasswordPage,
});

const schema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

function ResetPasswordPage() {
  const navigate = useNavigate();
  const { token } = Route.useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const result = schema.safeParse(data);

    if (!result.success) {
      const err: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        err[String(issue.path[0])] = issue.message;
      });

      setErrors(err);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await api.post(
        `/user/reset-password/${token}`,
        {
          password: result.data.password,
        }
      );

      if (response.data.success) {
        setSuccess(true);

        setTimeout(() => {
          navigate({ to: "/login" });
        }, 2500);
      }

    } catch (error: any) {
      alert(error.response?.data?.message || "Reset Password Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Security"
        title={
          <>
            Reset <span className="text-gradient">Password</span>
          </>
        }
        description="Choose a strong password for your account."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-md glass-strong p-8"
        >
          {success ? (
            <div className="py-10 text-center">

              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />

              <h2 className="mt-4 text-2xl font-bold">
                Password Updated
              </h2>

              <p className="mt-2 text-muted-foreground">
                Your password has been changed successfully.
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                Redirecting to Login...
              </p>

            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5"
            >

              {/* Password */}

              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  New Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="********"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none focus:border-primary/60"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* Confirm Password */}

              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="********"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none focus:border-primary/60"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showConfirm ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
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
                className="flex w-full items-center justify-center rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                {loading
                  ? "Updating..."
                  : "Reset Password"}
              </button>

              <p className="text-center text-sm text-muted-foreground">

                Back to{" "}

                <Link
                  to="/login"
                  className="font-semibold text-primary hover:underline"
                >
                  Login
                </Link>

              </p>

            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}