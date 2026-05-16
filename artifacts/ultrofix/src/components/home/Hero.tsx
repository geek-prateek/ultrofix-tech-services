import { motion } from "framer-motion";
import { MapPin, Star, Phone } from "lucide-react";
import heroPortrait from "@assets/home-showcase-shop-interior.png";
import animatedPerson from "@assets/animated_1778906676919.jpg";

const MAPS_URL = "https://www.google.com/maps/place/Ultrofix+Tech+Services/@23.1024312,72.5329652,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8304b4e69697:0x3eee29f5539bd4d!8m2!3d23.1024263!4d72.5355401!16s%2Fg%2F11n55g3qkb?entry=ttu";

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
              className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3"
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

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-blue-400 font-semibold text-base mb-4 tracking-wide"
            >
              Your Tech Repair Expert
            </motion.p>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base leading-relaxed mb-8 max-w-xl"
              data-testid="hero-subheadline"
            >
              7+ Years of Professional Experience. Specialized Chip-Level Motherboard Repair
              & Advanced Device Solutions in Gota, Ahmedabad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("estimator")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 blue-glow hover:scale-105 text-sm"
                data-testid="btn-hero-diagnostic"
              >
                Free Problem Diagnostic
              </button>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-blue-500/10 text-sm"
                data-testid="btn-hero-directions"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>

            {/* Address + Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-2 mb-10"
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-zinc-500 hover:text-zinc-400 text-xs transition-colors"
              >
                <MapPin className="w-3 h-3 mt-0.5 text-blue-500 shrink-0" />
                Shop FF 110, Shaligram Square, near Gota Chokdi Flyover, Gota, Ahmedabad 382481
              </a>
              <div className="flex items-center gap-4">
                <a href="tel:+917878433566" className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs transition-colors">
                  <Phone className="w-3 h-3 text-blue-500" />
                  +91 78784 33566
                </a>
                <a href="tel:+918400025112" className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs transition-colors">
                  <Phone className="w-3 h-3 text-blue-500" />
                  +91 84000 25112
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-8"
            >
              {[
                { value: "7+", label: "Years Exp." },
                { value: "21+", label: "Services" },
                { value: "5.0", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-montserrat font-black text-2xl text-blue-400">{stat.value}</div>
                  <div className="text-zinc-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Real images collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
            data-testid="hero-illustration"
          >
            <div className="relative w-full">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800/60 blue-glow" style={{ aspectRatio: "4/3" }}>
                <img
                  src={heroPortrait}
                  alt="Laptop repair workspace at Ultrofix"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating card — animated person */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 w-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl"
                style={{ background: "#1A1A1E" }}
              >
                <img src={animatedPerson} alt="Tech partner" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "linear-gradient(to top, #121214, transparent)" }}>
                  <p className="text-white text-xs font-bold">Your Tech Partner</p>
                  <p className="text-blue-400 text-[10px]">Expert Support</p>
                </div>
              </motion.div>

              {/* Badge top-right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl blue-glow"
              >
                Chip-Level Experts
              </motion.div>

              {/* Animated ping */}
              <span className="absolute top-4 right-4 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
