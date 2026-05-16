import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Users, Award, Cpu } from "lucide-react";
import shopExteriorImg from "@assets/home-showcase-shop-exterior_1778906676927.jpg";
import shopInteriorImg from "@assets/home-showcase-shop-interior_1778906676929.jpg";
import chipRepairImg from "@assets/chip-repair_1778906676921.jpg";
import mobileRepairImg from "@assets/mobile-repair_1778906676931.jpg";
import brandsImg from "@assets/supported-brands_1778906676932.jpg";

const areas = ["Gota", "Chandlodia", "Jagatpur", "New Ranip", "Gota Chowkdi Flyover"];

const stats = [
  { value: 7, suffix: "+", label: "Years Experience", icon: Award },
  { value: 21, suffix: "+", label: "Services Provided", icon: Cpu },
  { value: 100, suffix: "%", label: "Quality Guaranteed", icon: CheckCircle },
];

const capabilities = [
  "Laptop Repair (All Brands)",
  "Chip-Level Motherboard Repair",
  "MacBook & iPhone Expert Repair",
  "Data Recovery & Restoration",
  "Laptop Screen Replacement",
  "Battery Replacement Service",
  "Custom & Gaming PC Builds",
  "Virus Removal & System Cleanup",
  "Hardware Upgrades (RAM, SSD)",
  "Software Troubleshooting",
  "AMC for Business / Bulk Systems",
  "Refurbished Laptop Sales",
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

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(value, 1500, inView);
  return (
    <div ref={ref} className="text-center rounded-2xl border border-zinc-800/60 p-8" style={{ background: "#1A1A1E" }}>
      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div className="font-montserrat font-black text-4xl text-blue-400 mb-1">{count}{suffix}</div>
      <div className="text-zinc-400 text-sm">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-16" style={{ background: "#121214" }}>
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden circuit-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              About Ultrofix
            </div>
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Your Reliable Tech Partner
            </h1>
            <p className="text-blue-400 font-semibold tracking-wide mb-6">Your Tech Repair Expert</p>
            <p className="text-zinc-400 text-base leading-relaxed">
              We provide fast and reliable laptop repair and PC repair services in Gota, Ahmedabad,
              specializing in computer troubleshooting, hardware upgrades, virus removal, and complete
              system maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20" style={{ background: "#0F0F11" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-6">
                What We Do
              </h2>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p>
                  At our Laptop & PC Repair Center in Gota, Ahmedabad, we are dedicated to providing fast,
                  reliable, and affordable computer repair services for individuals and businesses. With years
                  of experience in the industry, our goal is to deliver high-quality solutions for all types
                  of laptop and desktop problems.
                </p>
                <p>
                  We specialize in laptop repair in Gota Ahmedabad, PC repair services, desktop computer repair,
                  hardware upgrades, software troubleshooting, virus removal, laptop screen replacement,
                  motherboard repair, and system optimization. Our skilled technicians use professional tools
                  and genuine parts to ensure your device performs like new.
                </p>
                <p>
                  As a trusted computer service center in Gota Ahmedabad, we focus on quick diagnostics,
                  transparent pricing, and customer satisfaction. Whether you need urgent laptop repair,
                  PC maintenance, or complete computer servicing, our team is here to help.
                </p>
                <p>
                  We proudly serve customers across Gota, Chandlodia, Jagatpur, New Ranip, and nearby areas
                  in Ahmedabad. Our mission is to become the most trusted destination for laptop repair and
                  computer repair services in Gota by delivering dependable support and excellent service every time.
                </p>
              </div>

              {/* Service Areas */}
              <div className="mt-8">
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-3">
                  Areas We Serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="inline-flex items-center gap-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      <MapPin className="w-3 h-3" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities grid */}
              <div className="mt-10">
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  Our Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-800/60" style={{ aspectRatio: "3/4" }}>
                  <img src={shopInteriorImg} alt="Ultrofix shop interior" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-zinc-800/60" style={{ aspectRatio: "1/1" }}>
                    <img src={chipRepairImg} alt="Chip level repair work" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-zinc-800/60" style={{ aspectRatio: "1/1" }}>
                    <img src={mobileRepairImg} alt="Mobile repair service" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-zinc-800/60">
                <img src={shopExteriorImg} alt="Ultrofix shop exterior" className="w-full object-cover" style={{ maxHeight: "180px" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "#121214" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16" style={{ background: "#0F0F11" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3">
              Famous Brands We Work With
            </h2>
            <p className="text-zinc-500 text-sm">All major laptop and PC brands serviced by our expert technicians</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-800/60 max-w-xl w-full">
              <img src={brandsImg} alt="Supported brands: Dell, Apple, Lenovo, ASUS, HP, Acer" className="w-full object-contain" style={{ background: "#fff" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16" style={{ background: "#121214" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3">
              Ready to Get Your Device Fixed?
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Reach out via WhatsApp, call us, or visit the shop — we're here Mon–Sat, 10 AM to 8 PM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917878433566?text=Hi+Ultrofix%2C+I+would+like+to+get+my+device+repaired."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                style={{ background: "#25D366", boxShadow: "0 0 16px rgba(37,211,102,0.25)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+917878433566"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                +91 78784 33566
              </a>
              <a
                href="mailto:Ultrofixtechservices@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs">
              <Users className="w-3.5 h-3.5" />
              Serving Gota, Chandlodia, Jagatpur, New Ranip & Ahmedabad
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
