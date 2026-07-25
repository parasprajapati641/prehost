import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Heart, GraduationCap, Landmark, Home, ShoppingBag, ShoppingCart, Factory, Truck, Plane,
  Building2, UtensilsCrossed, HardHat, Scale, UserCog, Rocket, Briefcase, Server, Globe2,
} from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Prehost Technology" },
      { name: "description", content: "Vertical expertise across 18 industries — healthcare, finance, retail, SaaS, government and more." },
      { property: "og:title", content: "Industries — Prehost Technology" },
      { property: "og:description", content: "Deep experience across healthcare, finance, retail, SaaS, government and more." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  { icon: Heart, name: "Healthcare", desc: "HIPAA-aware telemedicine, EHR, patient engagement." },
  { icon: GraduationCap, name: "Education", desc: "Adaptive learning, LMS, assessment and tutoring AI." },
  { icon: Landmark, name: "Finance", desc: "Payments, treasury, KYC/AML and analytics platforms." },
  { icon: Home, name: "Real Estate", desc: "Marketplaces, 3D tours, valuations and CRM." },
  { icon: ShoppingBag, name: "Retail", desc: "Omnichannel commerce, loyalty and inventory." },
  { icon: ShoppingCart, name: "E-commerce", desc: "Headless storefronts, marketplaces, checkout." },
  { icon: Factory, name: "Manufacturing", desc: "MES, IoT telemetry and predictive maintenance." },
  { icon: Truck, name: "Logistics", desc: "TMS, fleet ops and last-mile optimization." },
  { icon: Plane, name: "Travel", desc: "Booking engines, itineraries and dynamic pricing." },
  { icon: Building2, name: "Hospitality", desc: "Reservations, PMS and guest experience apps." },
  { icon: UtensilsCrossed, name: "Food Delivery", desc: "Real-time dispatch, POS and merchant tooling." },
  { icon: HardHat, name: "Construction", desc: "Project ops, safety and field-service software." },
  { icon: Scale, name: "Legal", desc: "Matter management, e-discovery and contract AI." },
  { icon: UserCog, name: "Human Resources", desc: "ATS, onboarding, performance and payroll." },
  { icon: Rocket, name: "Startups", desc: "MVP-to-scale product engineering as a partner." },
  { icon: Briefcase, name: "Enterprise", desc: "Modernization, integration and platform build-outs." },
  { icon: Server, name: "SaaS", desc: "Multi-tenant B2B products with usage billing." },
  { icon: Globe2, name: "Government", desc: "Secure, accessible services for public agencies." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Vertical fluency, <span className="text-gradient">not templates</span></>}
        description="We bring hard-won context from 18 industries — regulations, workflows and success metrics — so we ship the right product, faster."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.02 }}
              className="glass group p-6 transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-primary/20 group-hover:text-primary">
                <ind.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold">{ind.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
