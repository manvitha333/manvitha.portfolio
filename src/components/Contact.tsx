import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] glass-strong p-10 text-center sm:p-16 shadow-elegant glow-border"
        >
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-primary opacity-30 blur-3xl" />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">04 — Get in touch</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">
              Let's build something{" "}
              <span className="text-gradient animate-gradient bg-gradient-text">amazing</span> together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              I am actively seeking new opportunities. Please feel free to reach out!
            </p>

            <motion.a
              href="mailto:a.manvitha333@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-shadow hover:shadow-glow-secondary"
            >
              <Mail className="h-5 w-5" />
              Say Hello
            </motion.a>

            <div className="mt-10 flex items-center justify-center gap-4">
              {[
              { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/manvithareddyarimanda/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid h-12 w-12 place-items-center rounded-full glass transition-all hover:border-primary/60 hover:shadow-glow"
                >
                  <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p className="font-mono">© 2025 Manvitha Reddy</p>
          <p className="font-mono">Standing out is hard. let your ideas be seen, I’ll make it happen. — Manvitha Reddy</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
