import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mb-14 flex flex-col items-start gap-3"
  >
    <div className="flex items-center gap-3 font-mono text-sm text-primary">
      <span>{number}</span>
      <span className="h-px w-16 bg-primary/40" />
      <span className="uppercase tracking-widest text-muted-foreground">{subtitle}</span>
    </div>
    <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
      <span className="text-gradient">{title}</span>
    </h2>
  </motion.div>
);

export default SectionHeader;
