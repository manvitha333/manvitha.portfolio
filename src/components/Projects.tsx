import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const projects = [
  {
    name: "MedMate",
    description:
      "A web application that provides a platform for users to search and find information about various medicines, including their uses, side effects, and precautions.",
    href: "https://elaborate-gumdrop-a0dbf7.netlify.app/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2FMedMate.png&w=640&q=75",
    tags: ["React", "Node.js", "MongoDB"],
    badge: "In progress",
  },
  {
    name: "Conscion Estates",
    description:
      "We help you find your perfect property with ease, offering expert guidance and a seamless real estate experience.",
    href: "https://www.conscionestates.com/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2Fconscionestates.png&w=640&q=75",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    name: "Portfolio",
    description: "My personal portfolio showcasing projects, experience and skills.",
    href: "https://manvitha-portfolio.vercel.app/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2Fportfolio.png&w=640&q=75",
    tags: ["Next.js", "Tailwind"],
  },
  {
    name: "5Mags",
    description:
      "5Mags is an online platform specializing in mobile accessories, offering a wide range of high-quality products.",
    href: "https://5mags.com/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2F5mags.png&w=640&q=75",
    tags: ["E-commerce", "React"],
  },
  {
    name: "Binge Pro",
    description:
      "Binge Pro is the ultimate private theater and party venue, where your special moments turn into unforgettable celebrations.",
    href: "https://www.bingepro.in/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2Fbingepro.png&w=640&q=75",
    tags: ["Booking", "UI/UX"],
  },
  {
    name: "Civilden",
    description: "Discover the innovative infrastructure solutions provided by CIVILDEN.",
    href: "https://www.civilden.com/",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2Fcivilden.png&w=640&q=75",
    tags: ["Corporate", "Web"],
  },
  {
    name: "Carpooling",
    description: "A carpooling platform — still in progress.",
    href: "#",
    image: "https://manvitha-portfolio.vercel.app/_next/image?url=%2Fimages%2FCarpooling.png&w=640&q=75",
    tags: ["WIP"],
    badge: "WIP",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader number="03" subtitle="Selected work" title="Projects" />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass-strong shadow-card transition-all duration-500 hover:shadow-glow"
                  data-cursor="hover"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="relative h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    {p.badge && (
                      <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                        {p.badge}
                      </span>
                    )}
                    <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glow ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
