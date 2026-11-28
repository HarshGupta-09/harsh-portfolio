import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-5 pt-7">
      <nav className="mx-auto flex max-w-7xl justify-end">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-xl"
        >
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 border-r border-white/10 px-4 py-1.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white">
              H
            </span>
            <span className="text-sm font-medium text-white">Harsh.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 px-1 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  index === 0
                    ? "border border-white/10 bg-white/[0.07] text-white"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="ml-2 hidden items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-400 md:flex"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Animated mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute right-0 top-full mt-3 flex w-52 flex-col rounded-2xl border border-white/10 bg-[#101010] p-2 shadow-xl md:hidden"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 flex items-center justify-between rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white"
                >
                  Let's talk
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </header>
  );
}

export default Navbar;