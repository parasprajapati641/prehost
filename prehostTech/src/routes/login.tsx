import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/login")({
     head: () => ({
          meta: [
               // { title: "Login — Prehost Technology" },
               {
                    name: "description",
                    content: "Login to your Prehost Technology account.",
               },
          ],
     }),
     component: LoginPage,
});

const schema = z.object({
     email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
     password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginPage() {
     const navigate = useNavigate();

     const [showPassword, setShowPassword] = useState(false);
     const [errors, setErrors] = useState<Record<string, string>>({});
     const [loading, setLoading] = useState(false);

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
               const response = await api.post("/user/login", result.data);

               console.log(response.data);

               localStorage.setItem("token", response.data.token);
               localStorage.setItem("user", JSON.stringify(response.data.user));

               // navigate({ to: "/" });
               window.location.href = "/";
          } catch (err: any) {
               alert(err.response?.data?.message || "Login failed");
          } finally {
               setLoading(false);
          }
     }

     return (
          <>
               <PageHero
                    eyebrow="Welcome Back"
                    title={
                         <>
                              Login to <span className="text-gradient">Prehost</span>
                         </>
                    }
                    description="Sign in to continue using your account."
               />

               <section className="mx-auto max-w-7xl px-4 pb-24 pt-20">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4 }}
                         className="mx-auto max-w-md glass p-8"
                    >
                         <form onSubmit={onSubmit} noValidate className="space-y-5">

                              {/* Email */}

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Email
                                   </label>

                                   <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             type="email"
                                             name="email"
                                             placeholder="john@example.com"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary"
                                             onChange={() => clearError("email")}
                                        />
                                   </div>

                                   {errors.email && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.email}
                                        </p>
                                   )}
                              </div>

                              {/* Password */}

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Password
                                   </label>

                                   <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             type={showPassword ? "text" : "password"}
                                             name="password"
                                             placeholder="********"
                                             className="w-full rounded-2xl border border-primary bg-white/5 py-3 pl-11 pr-11 text-sm outline-none transition focus:border-primary"
                                             onChange={() => clearError("password")}
                                        />

                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute right-4 top-1/2 -translate-y-1/2"
                                        >
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

                              {/* Remember + Forgot */}

                              <div className="flex items-center justify-between text-sm">

                                   <label className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        Remember me
                                   </label>

                                   <Link
                                        to="/forgot-password"
                                        className="text-primary hover:underline"
                                   >
                                        Forgot Password?
                                   </Link>

                              </div>

                              {/* Button */}

                              <button
                                   disabled={loading}
                                   className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5"
                              >
                                   <LogIn className="h-4 w-4" />

                                   {loading ? "Signing In..." : "Sign In"}
                              </button>

                              <p className="text-center text-sm text-muted-foreground">
                                   Don't have an account?{" "}
                                   <Link
                                        to="/signup"
                                        className="font-semibold text-primary hover:underline"
                                   >
                                        Create Account
                                   </Link>
                              </p>

                         </form>
                    </motion.div>
               </section>
          </>
     );
}