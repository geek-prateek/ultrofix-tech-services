import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Gota", "Chandlodia", "Jagatpur", "New Ranip", "Gota Chowkdi Flyover"];

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 21, suffix: "+", label: "Services Provided" },
  { value: 100, suffix: "%", label: "Quality Guaranteed" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 1500, inView);

  return (
    <div ref={ref} className="text-center" data-testid={`stat-counter-${label.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="font-montserrat font-black text-4xl sm:text-5xl text-blue-400 mb-1">
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0F0F11" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              About Ultrofix
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Your Reliable Tech Partner
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              We focus on quick diagnostics, transparent pricing, and customer satisfaction. Our skilled
              technicians use professional tools and genuine parts to ensure your device performs like new.
              Whether it's a simple software fix or a complex chip-level repair, we handle every device
              with the same level of care and precision.
            </p>

            {/* Service Area Badges */}
            <div className="mb-8">
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Service Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full"
                    data-testid={`area-badge-${area.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <MapPin className="w-3 h-3" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/917878433566?text=Hi%2C+I'd+like+to+know+more+about+Ultrofix+Tech+Services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 blue-glow-sm text-sm"
              data-testid="btn-about-contact"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl border border-zinc-800/60 p-8 sm:p-12"
              style={{ background: "#1A1A1E" }}
            >
              <div className="grid grid-cols-3 gap-8 mb-8">
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>

              <div className="border-t border-zinc-800/60 pt-8">
                {/* Visual quality indicators */}
                {[
                  { label: "Chip-Level Repair Success Rate", pct: 94 },
                  { label: "Data Recovery Success Rate", pct: 89 },
                  { label: "Same-Day Service Completion", pct: 78 },
                ].map(({ label, pct }) => (
                  <div key={label} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-zinc-400 text-xs">{label}</span>
                      <span className="text-blue-400 text-xs font-bold">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="h-full rounded-full bg-blue-600"
                        data-testid={`progress-${label.toLowerCase().replace(/\s/g, "-")}`}
                      />
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
}
