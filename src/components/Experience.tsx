import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    period: "June 2024 — Jan 2025",
    title: "Full Stack Developer Intern | MERN Stack",
    company: "Hanvitec Solutions",
    description:
      "Worked as a Full Stack Developer Intern at Hanvitec Solutions, contributing to real-world projects alongside senior developers. Gained practical experience in building and managing web applications using the MERN stack.",
    href: "https://drive.google.com/file/d/1GVnCc2MAw0INd1GzdIvWAKDOT9moo4Cy/view?usp=drive_link",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    period: "May — July 2023",
    title: "Full Stack Java Intern | SkillDzire",
    company: "SkillDzire",
    description:
      "Worked on real-world Java-based projects, collaborating with senior developers to build and optimize web applications. Gained hands-on experience in backend development and application management.",
    href: "https://drive.google.com/file/d/1m8avnDRpVxe6qu8IcG6apdXmv50ZSNrJ/view?usp=drive_link",
    tags: ["Java", "Spring", "Backend"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader number="02" subtitle="My journey" title="Experience" />

        <div className="relative mx-auto max-w-4xl">
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-0"
              >
                {/* dot */}
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow md:left-1/2" />

                <a
                  href={exp.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group block ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"}`}
                >
                  <div className="relative rounded-3xl glass p-7 transition-all duration-500 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1">
                    <div className="font-mono text-xs uppercase tracking-widest text-primary">
                      {exp.period}
                    </div>
                    <h3 className="mt-3 flex items-start gap-2 font-display text-xl font-semibold">
                      <span className="transition-colors group-hover:text-primary">{exp.title}</span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </h3>
                    <div className="mt-1 text-sm text-muted-foreground">{exp.company}</div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="https://drive.google.com/file/d/113lUtLT1VpAeeIS85zxZYWIvVtb4lItG/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
            >
              <FileText className="h-4 w-4" />
              View Full Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
