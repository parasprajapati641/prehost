import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import {
     User,
     Mail,
     Lock,
     Eye,
     EyeOff,
     UserPlus,
} from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/signup")({
     head: () => ({
          meta: [
               { title: "Sign Up — Prehost Technology" },
               {
                    name: "description",
                    content: "Create your Prehost Technology account.",
               },
          ],
     }),
     component: SignupPage,
});

const schema = z
     .object({
          firstName: z.string().min(2, "First name is required"),
          lastName: z.string().min(2, "Last name is required"),
          email: z.string().email("Enter a valid email"),
          phone: z.string().min(10, "Enter a valid phone number"),
          gender: z.enum(["Male", "Female", "Other"]),
          address: z.string().min(5, "Address is required"),
          password: z.string().min(5, "Password must be at least 5 characters"),
          confirmPassword: z.string(),
     })
     .refine((data) => data.password === data.confirmPassword, {
          path: ["confirmPassword"],
          message: "Passwords do not match",
     });

function SignupPage() {
     const navigate = useNavigate();

     const [showPassword, setShowPassword] = useState(false);
     const [showConfirm, setShowConfirm] = useState(false);
     const [errors, setErrors] = useState<Record<string, string>>({});
     const [loading, setLoading] = useState(false);

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
               const response = await api.post("/user/register", {
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                    email: result.data.email,
                    password: result.data.password,
                    gender: result.data.gender,
                    phone: result.data.phone,
                    address: result.data.address,
               });

               localStorage.setItem("token", response.data.token);
               localStorage.setItem("user", JSON.stringify(response.data.user));

               // navigate({ to: "/" });
               window.location.href = "/";

          } catch (err: any) {
               alert(err.response?.data?.message || "Signup failed");
          } finally {
               setLoading(false);
          }
     }

     return (
          <>
               <PageHero
                    eyebrow="Get Started"
                    title={
                         <>
                              Create Your <span className="text-gradient">Account</span>
                         </>
                    }
                    description="Join Prehost Technology and start building with us."
               />

               <section className="mx-auto max-w-7xl px-4 pb-24 pt-20">
                    <motion.div
                         initial={{ opacity: 0, y: 25 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4 }}
                         className="mx-auto max-w-md glass-strong p-8"
                    >
                         <form onSubmit={onSubmit} className="space-y-5">

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        First Name
                                   </label>

                                   <div className="relative">
                                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                        <input
                                             name="firstName"
                                             placeholder="First Name"
                                             className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/60"
                                        />
                                   </div>

                                   {errors.firstName && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.firstName}
                                        </p>
                                   )}
                              </div>

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Last Name
                                   </label>

                                   <div className="relative">
                                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                        <input
                                             name="lastName"
                                             placeholder="Last Name"
                                             className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/60"
                                        />
                                   </div>

                                   {errors.lastName && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.lastName}
                                        </p>
                                   )}
                              </div>

                              {/* Email */}

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Email
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

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Phone
                                   </label>

                                   <input
                                        name="phone"
                                        placeholder="9876543210"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/60"
                                   />

                                   {errors.phone && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.phone}
                                        </p>
                                   )}
                              </div>

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Gender
                                   </label>

                                   <div className="flex gap-6">

                                        <label className="flex items-center gap-2">
                                             <input type="radio" name="gender" value="Male" />
                                             Male
                                        </label>

                                        <label className="flex items-center gap-2">
                                             <input type="radio" name="gender" value="Female" />
                                             Female
                                        </label>

                                        <label className="flex items-center gap-2">
                                             <input type="radio" name="gender" value="Other" />
                                             Other
                                        </label>

                                   </div>

                                   {errors.gender && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.gender}
                                        </p>
                                   )}
                              </div>

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Address
                                   </label>

                                   <textarea
                                        name="address"
                                        rows={4}
                                        placeholder="Enter your address"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/60"
                                   />

                                   {errors.address && (
                                        <p className="mt-1 text-xs text-destructive">
                                             {errors.address}
                                        </p>
                                   )}
                              </div>

                              {/* Password */}

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Password
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
                                   className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                              >
                                   <UserPlus className="h-4 w-4" />
                                   {loading ? "Creating Account..." : "Create Account"}
                              </button>

                              <p className="text-center text-sm text-muted-foreground">
                                   Already have an account?{" "}
                                   <Link
                                        to="/login"
                                        className="font-semibold text-primary hover:underline"
                                   >
                                        Sign In
                                   </Link>
                              </p>

                         </form>
                    </motion.div>
               </section>
          </>
     );
}