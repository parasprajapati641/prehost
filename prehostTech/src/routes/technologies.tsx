import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Prehost Technology" },
      { name: "description", content: "The modern engineering stack we use every day: React, Next.js, Node, Python, AWS, GCP, OpenAI, LangChain and more." },
      { property: "og:title", content: "Technologies — Prehost Technology" },
      { property: "og:description", content: "Frontend, backend, cloud, databases and AI — the stack behind our work." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechnologiesPage,
});

// const TECH = [
//   { cat: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"] },
//   { cat: "Backend", items: ["Node.js", "Python", "Django", "FastAPI", "Express", "NestJS", "PHP", "Laravel", "Java", "Spring Boot", ".NET"] },
//   { cat: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"] },
//   { cat: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vercel", "Cloudflare"] },
//   { cat: "AI & Machine Learning", items: ["OpenAI", "Gemini", "Claude", "LangChain", "Python AI", "Machine Learning", "PyTorch", "TensorFlow"] },
// ];


const TECH = [
  {
    cat: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "Vue",
      "Nuxt.js",
      "Svelte",
      "Remix",
      "Astro",
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn UI",
      "Redux",
      "Zustand",
      "React Query",
      "TanStack Router",
      "Framer Motion",
      "Ant Design"
    ]
  },
  {
    cat: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Fastify",
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Java",
      "Spring Boot",
      "C#",
      ".NET",
      "Go",
      "Gin",
      "Rust",
      "Ruby on Rails"
    ]
  },
  {
    cat: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "SQLite",
      "Firebase",
      "Supabase",
      "Redis",
      "Elasticsearch",
      "Oracle Database"
    ]
  },
  {
    cat: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "NGINX",
      "Cloudflare",
      "Vercel",
      "Netlify",
      "Render"
    ]
  },
  {
    cat: "Mobile",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Ionic",
      "Expo"
    ]
  },
  {
    cat: "AI & Machine Learning",
    items: [
      "OpenAI",
      "Gemini",
      "Claude",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "Python AI",
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "RAG",
      "Vector Databases"
    ]
  },
  {
    cat: "CMS & E-commerce",
    items: [
      "WordPress",
      "Strapi",
      "Sanity",
      "Contentful",
      "Shopify",
      "WooCommerce",
      "Magento"
    ]
  },
  {
    cat: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Postman",
      "Figma",
      "VS Code",
      "Jira",
      "Slack",
      "npm",
      "Yarn",
      "pnpm"
    ]
  }
];
function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our stack"
        title={<>The <span className="text-gradient">modern engineering stack</span>, mastered</>}
        description="We use battle tested tools by default and evaluate new ones carefully. Every choice has a reason your team can inspect."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32 pt-5">
        <div className="space-y-8">
          {TECH.map((group, i) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass p-8 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.2)] border-primary hover:border-0 transition hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{group.cat}</h2>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{group.items.length} tools</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <span key={t} className="rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground/90 transition hover:border-primary/40 hover:bg-primary/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
