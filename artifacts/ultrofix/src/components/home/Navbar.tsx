import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${scrolled ? "shadow-lg" : ""}`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2" data-testid="navbar-logo">
              <div className="relative">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center blue-glow-sm">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <span className="font-montserrat font-800 text-xl text-white tracking-tight">
                Ultro<span className="text-blue-500">fix</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#estimator")}
                className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 blue-glow-sm hover:blue-glow"
                data-testid="btn-book-diagnostic"
              >
                Book Diagnostic
              </button>
              <button
                className="md:hidden text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                data-testid="btn-menu-toggle"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 z-50 md:hidden"
              style={{ background: "#121214", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
              data-testid="mobile-menu"
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="font-montserrat font-800 text-white text-lg">
                    Ultro<span className="text-blue-500">fix</span>
                  </span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-5 py-4 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left text-base font-medium text-zinc-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  onClick={() => handleNavClick("#estimator")}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors blue-glow-sm"
                  data-testid="mobile-btn-book-diagnostic"
                >
                  Book Diagnostic
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
