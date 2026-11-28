import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 pb-20 pt-32 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(127,29,29,0.18),transparent_42%)]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute left-[8%] top-[27%] h-28 w-28 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute right-[10%] top-[19%] h-3 w-3 rounded-full bg-red-500/30" />
      <div className="pointer-events-none absolute bottom-[23%] right-[10%] h-36 w-36 rounded-full border border-red-500/[0.12]" />
      <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-2 w-2 rounded-full bg-white/20" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Availability */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 sm:text-xs">
            Available for opportunities
          </span>
        </div>

        {/* Eyebrow */}
        <p className="mb-5 font-body text-sm uppercase tracking-[0.3em] text-white/55 sm:text-lg">
          <span className="mr-3">—</span>
          Portfolio · 2026
        </p>

        {/* Main heading */}
        <h1 className="flex flex-wrap items-center justify-center gap-x-3 font-heading text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[7.2rem]">
          <span>Hi, I'm</span>

          <span className="relative inline-block">
            <span className="relative z-10">Harsh</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-red-500 sm:-bottom-3" />
          </span>

          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.22)]">
            Gupta
          </span>
        </h1>

        {/* Current role */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            Currently
          </span>

          <div className="flex min-w-[230px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-2.5">
            <Sparkles size={15} className="text-red-400" />
            <span className="font-body text-base text-white/90">
              Product Builder
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-9 max-w-2xl font-body text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          I design and engineer products at the intersection of clean systems,
          delightful interfaces and intelligent automation — turning ideas into
          software that ships.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-red-400"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 font-body text-sm text-white transition-colors hover:bg-white/[0.08]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 font-body text-sm text-white/70 transition-colors hover:text-white"
          >
            Contact Me
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#journey"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;