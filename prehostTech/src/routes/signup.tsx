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
     Phone,
     UserPlus,
} from "lucide-react";
import { PageHero } from "@/components/site/Section";
import api from "@/api/axios";

export const Route = createFileRoute("/signup")({
     head: () => ({
          meta: [
               // { title: "Sign Up — Prehost Technology" },
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
          firstName: z
               .string()
               .trim()
               .min(2, "First name is required")
               .regex(/^[A-Za-z]+$/, "Only letters are allowed"),

          lastName: z
               .string()
               .trim()
               .min(2, "Last name is required")
               .regex(/^[A-Za-z]+$/, "Only letters are allowed"),

          email: z
               .string().
               trim()
               .min(1, "Email is required")
               .email("Please enter a valid email address")
               .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),

          phone: z
               .string()
               .trim()
               .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
               .optional()
               .or(z.literal("")),

          gender: z.enum(["Male", "Female", "Other"]),

          address: z
               .string()
               .trim()
               .min(5, "Address is required"),
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

function SignupPage() {
     const navigate = useNavigate();

     const [showPassword, setShowPassword] = useState(false);
     const [showConfirm, setShowConfirm] = useState(false);
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
                         className="mx-auto max-w-md glass p-8"
                    >
                         <form onSubmit={onSubmit} noValidate className="space-y-5">

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        First Name
                                   </label>

                                   <div className="relative">
                                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             name="firstName"
                                             placeholder="First Name"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                                             onChange={() => clearError("firstName")}
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
                                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             name="lastName"
                                             placeholder="Last Name"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                                             onChange={() => clearError("lastName")}
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
                                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             type="email"
                                             name="email"
                                             placeholder="john@example.com"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                                             onChange={() => clearError("email")}
                                        />
                                   </div>

                                   {errors.email && (
                                        <p className="mt-1 text-xs text-red-500">
                                             {errors.email}
                                        </p>
                                   )}
                              </div>

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Phone
                                   </label>

                                   <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             name="phone"
                                             placeholder="9876543210"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                                             onChange={() => clearError("phone")}
                                        />
                                   </div>

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
                                             <input type="radio" name="gender" value="Male" onChange={() => clearError("gender")} />
                                             Male
                                        </label>

                                        <label className="flex items-center gap-2">
                                             <input type="radio" name="gender" value="Female" onChange={() => clearError("gender")} />
                                             Female
                                        </label>

                                        <label className="flex items-center gap-2">
                                             <input type="radio" name="gender" value="Other" onChange={() => clearError("gender")} />
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
                                        className="w-full rounded-2xl border border-primary/50 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary"
                                        onChange={() => clearError("Address")}
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
                                        <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             type={showPassword ? "text" : "password"}
                                             name="password"
                                             placeholder="********"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none focus:border-primary"
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

                              {/* Confirm Password */}

                              <div>
                                   <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                        Confirm Password
                                   </label>

                                   <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                                        <input
                                             type={showConfirm ? "text" : "password"}
                                             name="confirmPassword"
                                             placeholder="********"
                                             className="w-full rounded-2xl border border-primary/50 bg-white/5 py-3 pl-11 pr-11 text-sm outline-none focus:border-primary"
                                             onChange={() => clearError("confirmPassword")}
                                        />

                                        <button
                                             type="button"
                                             onClick={() => setShowConfirm(!showConfirm)}
                                             className="absolute right-4 top-1/2 -translate-y-1/2"
                                        >
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