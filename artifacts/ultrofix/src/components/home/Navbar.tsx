import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/Logo-removebg-preview_1778909529329.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDiagnosticClick = () => {
    setMenuOpen(false);
    if (location === "/") {
      document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#estimator";
    }
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
            <Link href="/" className="flex items-center gap-2.5" data-testid="navbar-logo">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={logoImg} alt="Ultrofix Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-montserrat font-black text-lg text-white tracking-tight">
                  Ultro<span className="text-blue-400">fix</span>
                </span>
                <span className="text-zinc-500 text-[9px] font-medium tracking-widest uppercase leading-tight">
                  Tech Services
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ultrofixtechservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex text-zinc-500 hover:text-pink-400 transition-colors"
                data-testid="link-instagram-nav"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={handleDiagnosticClick}
                className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 blue-glow-sm"
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
              <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <img src={logoImg} alt="Ultrofix" className="w-8 h-8 object-contain" />
                  <div className="flex flex-col leading-none">
                    <span className="font-montserrat font-black text-white text-base">
                      Ultro<span className="text-blue-400">fix</span>
                    </span>
                    <span className="text-zinc-500 text-[8px] font-medium tracking-widest uppercase">Tech Services</span>
                  </div>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                        (link.href === "/" ? location === "/" : location.startsWith(link.href))
                          ? "text-white bg-blue-600/10"
                          : "text-zinc-300 hover:text-white hover:bg-white/5"
                      }`}
                      data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="flex flex-col gap-3 mt-4 pt-4 border-t border-zinc-800"
                >
                  <button
                    onClick={handleDiagnosticClick}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors blue-glow-sm"
                    data-testid="mobile-btn-book-diagnostic"
                  >
                    Book Diagnostic
                  </button>
                  <a
                    href="https://www.instagram.com/ultrofixtechservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-zinc-500 hover:text-pink-400 text-sm transition-colors py-2"
                    data-testid="mobile-link-instagram"
                  >
                    <Instagram className="w-4 h-4" />
                    @ultrofixtechservices
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
