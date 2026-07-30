import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Heart, GraduationCap, Landmark, Home, ShoppingBag, ShoppingCart, Factory, Truck, Plane,
  Building2, UtensilsCrossed, HardHat, Scale, UserCog, Rocket, Briefcase, Server, Globe2,
  ShieldCheck, Smartphone, Cpu, Wallet, Zap, Film,
} from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      // { title: "Industries — Prehost Technology" },
      { name: "description", content: "Vertical expertise across 18 industries — healthcare, finance, retail, SaaS, government and more." },
      { property: "og:title", content: "Industries — Prehost Technology" },
      { property: "og:description", content: "Deep experience across healthcare, finance, retail, SaaS, government and more." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});
//   { icon: Heart, name: "Healthcare", desc: "HIPAA aware telemedicine, EHR, patient engagement." },
//   { icon: GraduationCap, name: "Education", desc: "Adaptive learning, LMS, assessment and tutoring AI." },
//   { icon: Landmark, name: "Finance", desc: "Payments, treasury, KYC/AML and analytics platforms." },
//   { icon: Home, name: "Real Estate", desc: "Marketplaces, 3D tours, valuations and CRM." },
//   { icon: ShoppingBag, name: "Retail", desc: "Omnichannel commerce, loyalty and inventory." },
//   { icon: ShoppingCart, name: "E-commerce", desc: "Headless storefronts, marketplaces, checkout." },
//   { icon: Factory, name: "Manufacturing", desc: "MES, IoT telemetry and predictive maintenance." },
//   { icon: Truck, name: "Logistics", desc: "TMS, fleet ops and last-mile optimization." },
//   { icon: Plane, name: "Travel", desc: "Booking engines, itineraries and dynamic pricing." },
//   { icon: Building2, name: "Hospitality", desc: "Reservations, PMS and guest experience apps." },
//   { icon: UtensilsCrossed, name: "Food Delivery", desc: "Real-time dispatch, POS and merchant tooling." },
//   { icon: HardHat, name: "Construction", desc: "Project ops, safety and field-service software." },
//   { icon: Scale, name: "Legal", desc: "Matter management, e-discovery and contract AI." },
//   { icon: UserCog, name: "Human Resources", desc: "ATS, onboarding, performance and payroll." },
//   { icon: Rocket, name: "Startups", desc: "MVP to scale product engineering as a partner." },
//   { icon: Briefcase, name: "Enterprise", desc: "Modernization, integration and platform build-outs." },
//   { icon: Server, name: "SaaS", desc: "Multi tenant B2B products with usage billing." },
//   { icon: Globe2, name: "Government", desc: "Secure, accessible services for public agencies." },
// ];

const INDUSTRIES = [
  { icon: Heart, name: "Healthcare", desc: "Telemedicine, EHR, patient portals and HIPAA-compliant healthcare solutions." },

  { icon: Landmark, name: "Finance & FinTech", desc: "Digital banking, payments, lending, KYC/AML and financial platforms." },

  { icon: GraduationCap, name: "Education", desc: "Learning management systems, e-learning platforms and AI-powered education." },

  { icon: ShoppingCart, name: "E-commerce", desc: "Custom online stores, marketplaces, subscriptions and global commerce solutions." },

  { icon: ShoppingBag, name: "Retail", desc: "Omnichannel retail, POS systems, loyalty programs and inventory management." },

  { icon: Factory, name: "Manufacturing", desc: "ERP, IoT, production monitoring and supply chain optimization." },

  { icon: Truck, name: "Logistics & Transportation", desc: "Fleet management, shipment tracking and warehouse automation." },

  { icon: Home, name: "Real Estate", desc: "Property portals, CRM, virtual tours and real estate management systems." },

  { icon: Plane, name: "Travel & Tourism", desc: "Booking platforms, travel apps, itinerary planning and reservation systems." },

  { icon: Building2, name: "Hospitality", desc: "Hotel management, reservations, guest engagement and hospitality software." },

  { icon: UtensilsCrossed, name: "Food & Restaurant", desc: "Online ordering, delivery platforms, POS and restaurant management." },

  { icon: HardHat, name: "Construction", desc: "Project management, workforce tracking and construction ERP solutions." },

  { icon: Scale, name: "Legal", desc: "Case management, document automation and legal workflow solutions." },

  { icon: UserCog, name: "Human Resources", desc: "Recruitment, payroll, employee portals and HR management systems." },

  { icon: Server, name: "SaaS", desc: "Scalable multi-tenant SaaS platforms with secure cloud infrastructure." },

  { icon: Briefcase, name: "Enterprise", desc: "Enterprise software, workflow automation and digital transformation." },

  { icon: Globe2, name: "Government", desc: "Secure citizen services, digital governance and public sector platforms." },

  { icon: Rocket, name: "Startups", desc: "MVP development, rapid scaling and end-to-end product engineering." },

  { icon: ShieldCheck, name: "Cybersecurity", desc: "Security platforms, compliance tools and identity management solutions." },

  { icon: Smartphone, name: "Telecommunications", desc: "Telecom portals, VoIP solutions and communication platforms." },

  { icon: Cpu, name: "Artificial Intelligence", desc: "Generative AI, automation, chatbots and intelligent business solutions." },

  { icon: Wallet, name: "Insurance", desc: "Policy management, claims processing and InsurTech platforms." },

  { icon: Zap, name: "Energy & Utilities", desc: "Smart energy management, IoT monitoring and utility platforms." },

  { icon: Film, name: "Media & Entertainment", desc: "Streaming platforms, content management and digital media solutions." },
];
function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Vertical fluency, <span className="text-gradient">not templates</span></>}
        description="We bring hard won context from 18 industries regulations, workflows and success metrics so we ship the right product, faster."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-30 pt-5">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.02 }}
              className="glass group p-6 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="grid md:h-11 md:w-11 h-8 w-8 place-items-center rounded-xl bg-accent/15 text-primary transition group-hover:bg-primary group-hover:text-white">
                <ind.icon className="md:h-5 md:w-5 h-4 w-4" />
              </div>
              <div className="md:mt-4 mt-2 md:text-base text-sm font-semibold">{ind.name}</div>
              <p className="mt-1 md:text-sm text-xs text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
