import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const services = [
  {
    id: "motherboard",
    title: "Chip-Level Motherboard Repair",
    description:
      "Advanced diagnostic and micro-soldering repair for motherboard-level failures. We fix what others can't.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="18" y="18" width="12" height="12" rx="2" fill="#2563EB" opacity="0.7" />
        <line x1="8" y1="20" x2="2" y2="20" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="8" y1="28" x2="2" y2="28" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="46" y2="20" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="40" y1="28" x2="46" y2="28" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="20" y1="8" x2="20" y2="2" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="28" y1="8" x2="28" y2="2" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="20" y1="40" x2="20" y2="46" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="28" y1="40" x2="28" y2="46" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "refurbished",
    title: "Refurbished Laptops & Second-Hand Sales",
    description:
      "Quality-checked pre-owned laptops with warranty. Great deals, trusted condition, fully tested.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="40" height="26" rx="4" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="8" y="14" width="32" height="18" rx="2" fill="#2563EB" opacity="0.15" />
        <rect x="12" y="18" width="12" height="2" rx="1" fill="#2563EB" opacity="0.6" />
        <rect x="12" y="22" width="20" height="2" rx="1" fill="#2563EB" opacity="0.4" />
        <rect x="12" y="26" width="16" height="2" rx="1" fill="#2563EB" opacity="0.3" />
        <rect x="2" y="36" width="44" height="4" rx="2" fill="#2563EB" opacity="0.2" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="18" y="33" width="12" height="6" rx="2" fill="#2563EB" opacity="0.15" />
      </svg>
    ),
  },
  {
    id: "gaming-pc",
    title: "Custom & Gaming PC Building",
    description:
      "Hand-picked components, expert assembly. Built for performance, optimized for your exact needs and budget.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="22" height="32" rx="4" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="10" y="14" width="14" height="10" rx="2" fill="#2563EB" opacity="0.5" />
        <circle cx="17" cy="32" r="3" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="10" y="26" width="6" height="2" rx="1" fill="#2563EB" opacity="0.4" />
        <rect x="32" y="20" width="12" height="8" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" opacity="0.15" />
        <rect x="34" y="30" width="8" height="2" rx="1" fill="#2563EB" opacity="0.4" />
        <rect x="34" y="34" width="6" height="2" rx="1" fill="#2563EB" opacity="0.3" />
        <line x1="28" y1="24" x2="32" y2="24" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "amc",
    title: "AMC for Bulk Systems",
    description:
      "Annual Maintenance Contracts for businesses. Scheduled servicing, priority support, and guaranteed uptime.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L38 10V24C38 32 31 39 24 42C17 39 10 32 10 24V10L24 4Z" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.1" />
        <path d="M18 24L22 28L30 20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "apple",
    title: "iPhone & MacBook Expert Repair",
    description:
      "Screen replacements, battery service, water damage repair for all Apple devices. Trusted Apple expertise.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="6" width="20" height="36" rx="5" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="18" y="10" width="12" height="20" rx="2" fill="#2563EB" opacity="0.15" />
        <circle cx="24" cy="36" r="2" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="21" y="8" width="6" height="2" rx="1" fill="#2563EB" opacity="0.5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16" style={{ background: "#121214" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Expert Services
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
            Our Expert Services
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            From micro-soldering to custom PC builds — we handle it all with precision and transparency.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-2xl border border-zinc-800/60 p-6 card-hover cursor-default"
              style={{ background: "#1A1A1E" }}
              data-testid={`service-card-${service.id}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:blue-glow-sm transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-lg text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href={`https://wa.me/917878433566?text=${encodeURIComponent(`Hi, I'd like to inquire about: ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                data-testid={`btn-inquire-${service.id}`}
              >
                <MessageCircle className="w-4 h-4" />
                Inquire Now
              </a>

              {/* Blue corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-tr-2xl overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-full h-full"
                  style={{ background: "radial-gradient(circle at top right, rgba(37,99,235,0.15), transparent 70%)" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
