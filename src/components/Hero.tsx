import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 2.4 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="container relative mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient animate-gradient bg-gradient-text">Manvitha Reddy</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <p className="font-mono text-sm tracking-widest text-primary uppercase">MERN STACK DEVELOPER</p>
          </motion.div>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I strive to build accessible, pixel-perfect digital experiences for the web while continuously
            learning and growing as a developer.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4" />
              View my work
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/manvithareddyarimanda/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group grid h-11 w-11 place-items-center rounded-full glass transition-all hover:border-primary/60 hover:shadow-glow"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar / decorative */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl animate-blob" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong p-2 shadow-elegant">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <img src={avatar} alt="Manvitha Reddy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3 font-mono text-xs">
                <span className="text-primary">{"// status"}</span>
                <span className="text-foreground">building cool stuff ✨</span>
              </div>
            </div>
          </div>
          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-12 rounded-2xl glass-strong px-4 py-3 font-mono text-xs shadow-card"
          >
            <div className="text-primary">React</div>
            <div className="text-muted-foreground">+ Next.js</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground"
        >
          <span>SCROLL</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
