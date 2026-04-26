import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const paragraphs = [
  "I'm a passionate beginner in web development, eager to learn and build engaging digital experiences. I enjoy creating user-friendly and visually appealing websites while continuously improving my problem-solving and technical skills.",
  "I've worked on multiple projects that focus on enhancing user experience and functionality. Beyond coding, I love exploring new technologies and working on innovative ideas, such as AI-powered tools and platforms that promote social impact.",
  "I also have a few product ideas that I'm looking to invest in with a proper partner, aiming to build impactful solutions that solve real-world problems. With a strong passion for business, I aspire to turn my ideas into successful ventures.",
  "In my free time, I enjoy experimenting with web design, learning new development techniques, and bringing creative ideas to life. Additionally, I'm interested in freelancing—if anyone is looking for a dedicated developer, feel free to reach out!",
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Express", "MongoDB", "MERN", "Java", "Tailwind CSS", "HTML5", "CSS3",
];

const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <SectionHeader number="01" subtitle="About me" title="A glimpse into my world" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl glass-strong p-7 shadow-card glow-border">
              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-secondary">stack</span> = [
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="rounded-full glass px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
              <div className="mt-5 font-mono text-xs text-muted-foreground">];</div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: "7+", label: "Projects" },
                  { num: "2", label: "Internships" },
                  { num: "∞", label: "Curiosity" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-muted/30 p-4 text-center">
                    <div className="font-display text-2xl font-bold text-gradient">{s.num}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
