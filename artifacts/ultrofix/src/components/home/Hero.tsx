import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden circuit-bg">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              data-testid="badge-trust"
            >
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              5.0 Rated on Google | 100% Verified Support
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
              data-testid="hero-headline"
            >
              Unlock the Full{" "}
              <span className="text-blue-500 relative">
                Potential
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px opacity-60"
                  style={{ background: "linear-gradient(90deg, #2563EB, transparent)" }}
                />
              </span>{" "}
              of Your Laptop & PC
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl"
              data-testid="hero-subheadline"
            >
              7+ Years of Professional Experience. Specialized Chip-Level Motherboard Repair
              & Advanced Device Solutions in Ahmedabad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("estimator")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 blue-glow hover:scale-105"
                data-testid="btn-hero-diagnostic"
              >
                Free Problem Diagnostic
              </button>
              <a
                href="https://maps.google.com/?q=Shaligram+Square+Gota+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-blue-500/10"
                data-testid="btn-hero-directions"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "7+", label: "Years Exp." },
                { value: "21+", label: "Services" },
                { value: "5.0", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-montserrat font-black text-2xl text-blue-400" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>{stat.value}</div>
                  <div className="text-zinc-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
            data-testid="hero-illustration"
          >
            <div className="relative w-full max-w-md">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
                style={{ background: "radial-gradient(ellipse, #2563EB, transparent 70%)" }}
              />
              {/* Circuit / Laptop SVG */}
              <svg viewBox="0 0 400 340" className="w-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop body */}
                <rect x="60" y="60" width="280" height="180" rx="12" fill="#1A1A1E" stroke="#2563EB" strokeWidth="1.5" />
                <rect x="72" y="72" width="256" height="156" rx="6" fill="#0D0D0F" />

                {/* Screen content — circuit traces */}
                <line x1="100" y1="110" x2="160" y2="110" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                <line x1="160" y1="110" x2="160" y2="150" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                <line x1="160" y1="150" x2="220" y2="150" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                <line x1="220" y1="150" x2="220" y2="110" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                <line x1="220" y1="110" x2="280" y2="110" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                <line x1="130" y1="170" x2="270" y2="170" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
                <line x1="130" y1="185" x2="200" y2="185" stroke="#2563EB" strokeWidth="1" opacity="0.3" />

                {/* Chip squares */}
                <rect x="140" y="95" width="20" height="20" rx="2" fill="#2563EB" opacity="0.8" />
                <rect x="200" y="130" width="24" height="24" rx="2" fill="#2563EB" opacity="0.6" />
                <rect x="250" y="95" width="16" height="16" rx="2" fill="#2563EB" opacity="0.4" />

                {/* Dots */}
                <circle cx="100" cy="110" r="3" fill="#2563EB" opacity="0.8" />
                <circle cx="160" cy="110" r="3" fill="#2563EB" opacity="0.8" />
                <circle cx="220" cy="110" r="3" fill="#2563EB" opacity="0.8" />
                <circle cx="280" cy="110" r="3" fill="#2563EB" opacity="0.6" />
                <circle cx="160" cy="150" r="3" fill="#2563EB" opacity="0.8" />
                <circle cx="220" cy="150" r="3" fill="#2563EB" opacity="0.8" />

                {/* Pulse circles */}
                <circle cx="140" cy="200" r="8" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.4" />
                <circle cx="140" cy="200" r="4" fill="#2563EB" opacity="0.7" />
                <circle cx="260" cy="200" r="6" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
                <circle cx="260" cy="200" r="3" fill="#2563EB" opacity="0.5" />

                {/* Laptop base */}
                <rect x="40" y="240" width="320" height="18" rx="6" fill="#1A1A1E" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="150" y="236" width="100" height="8" rx="4" fill="#2563EB" opacity="0.15" />

                {/* Keyboard hint */}
                <rect x="80" y="248" width="240" height="4" rx="2" fill="#2563EB" opacity="0.08" />

                {/* Floating badge */}
                <rect x="280" y="45" width="100" height="32" rx="8" fill="#2563EB" opacity="0.15" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4" />
                <text x="330" y="66" textAnchor="middle" fill="#60A5FA" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Chip Level</text>

                <rect x="20" y="160" width="88" height="32" rx="8" fill="#2563EB" opacity="0.1" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" />
                <text x="64" y="181" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">7+ Years</text>
              </svg>

              {/* Animated ping dots */}
              <span className="absolute top-8 right-12 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
              </span>
              <span className="absolute bottom-16 left-8 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" style={{ animationDelay: "0.5s" }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
