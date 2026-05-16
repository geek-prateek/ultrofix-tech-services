import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, Clock, IndianRupee, Phone } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/place/Ultrofix+Tech+Services/@23.1024312,72.5329652,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8304b4e69697:0x3eee29f5539bd4d!8m2!3d23.1024263!4d72.5355401!16s%2Fg%2F11n55g3qkb?entry=ttu";
import chipRepairImg from "@assets/chip-repair_1778906676921.jpg";
import deviceCloseupImg from "@assets/home-showcase-device-closeup-portrait_1778906676926.jpg";
import mobileRepairImg from "@assets/mobile-repair_1778906676931.jpg";
import shopInteriorImg from "@assets/home-showcase-shop-interior_1778906676929.jpg";
import brandsImg from "@assets/supported-brands_1778906676932.jpg";

const servicesList = [
  {
    id: "motherboard",
    title: "Chip-Level (Motherboard) Repair",
    description:
      "Advanced micro-soldering and IC-level diagnosis for all laptop and PC motherboards. We fix what other shops call 'unrepairable' — dead boards, power failures, display faults, and component-level damage.",
    price: "₹1,999 – ₹4,500+",
    time: "24 – 72 Hours",
    image: chipRepairImg,
    features: [
      "All laptop & desktop motherboard brands",
      "Power IC, charging IC, BIOS chip repair",
      "Short circuit & water damage recovery",
      "BGA rework & reflowing",
      "Free diagnostic before any charge",
    ],
    waText: "Hi Ultrofix, I need Chip-Level Motherboard Repair. Please guide me on the next steps.",
  },
  {
    id: "screen",
    title: "Laptop Screen Replacement",
    description:
      "Cracked, flickering, or dead screen? We replace laptop displays with quality panels at competitive prices. Supports TN, IPS, OLED, and touch-enabled displays across all brands.",
    price: "₹1,999 – ₹5,999+",
    time: "12 – 48 Hours",
    image: deviceCloseupImg,
    features: [
      "All panel types: TN, IPS, OLED",
      "Touch & non-touch display support",
      "15+ laptop brands supported",
      "Quality-tested replacement panels",
      "1-month post-service warranty",
    ],
    waText: "Hi Ultrofix, I need a laptop screen replacement. Can you help?",
  },
  {
    id: "mobile",
    title: "iPhone & MacBook Expert Repair",
    description:
      "Specialized Apple device repair by certified technicians. Screen replacements, battery service, logic board repairs, charging port fixes, and water damage recovery for all iPhone and MacBook models.",
    price: "₹799 – ₹8,999+",
    time: "12 – 72 Hours",
    image: mobileRepairImg,
    features: [
      "All iPhone models (6 to latest)",
      "MacBook Air & Pro logic board repair",
      "Genuine & OEM quality parts",
      "Battery health restoration",
      "Face ID & Touch ID preservation",
    ],
    waText: "Hi Ultrofix, I need iPhone/MacBook repair service. Please help.",
  },
  {
    id: "data-recovery",
    title: "Data Recovery Service",
    description:
      "Lost your data due to hard drive failure, accidental deletion, or system crash? Our technicians use professional-grade tools to recover documents, photos, and critical files from damaged storage.",
    price: "Quote Post Diagnostic",
    time: "3 – 5 Days",
    image: shopInteriorImg,
    features: [
      "HDD, SSD, and NVME recovery",
      "Accidental deletion recovery",
      "Physical drive failure cases",
      "Formatted partition recovery",
      "Confidential & secure process",
    ],
    waText: "Hi Ultrofix, I need Data Recovery for my device. Please advise.",
  },
];

const additionalServices = [
  { title: "Laptop System Formatting & OS Install", price: "₹499 – ₹799", time: "1–4 Hrs" },
  { title: "Battery Replacement (Laptop / Mobile)", price: "₹799 – ₹2,999+", time: "1–6 Hrs" },
  { title: "Custom & Gaming PC Building", price: "Budget Based", time: "5–10 Days" },
  { title: "Virus Removal & System Cleanup", price: "₹299 – ₹799", time: "2–6 Hrs" },
  { title: "RAM & SSD Hardware Upgrades", price: "₹499 + Parts", time: "1–2 Hrs" },
  { title: "AMC – Annual Maintenance Contract", price: "Custom Quote", time: "Scheduled" },
  { title: "Refurbished Laptop Sales", price: "Market Price", time: "Immediate" },
  { title: "Printer & Peripheral Repair", price: "₹299 – ₹1,499", time: "1–3 Days" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <div className="pt-16" style={{ background: "#121214" }}>
      {/* Hero */}
      <section className="relative py-20 circuit-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              Expert Services
            </div>
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
              All Our Repair Services
            </h1>
            <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8">
              From chip-level motherboard repairs to custom PC builds — transparent pricing, professional tools, genuine parts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917878433566?text=Hi+Ultrofix%2C+I+would+like+a+free+diagnostic+check+and+repair+estimate+for+my+device."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                style={{ background: "#25D366", boxShadow: "0 0 16px rgba(37,211,102,0.2)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Get Free Diagnostic
              </a>
              <a
                href="tel:+917878433566"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-14" style={{ background: "#0F0F11" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800/60" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white">
                        <IndianRupee className="w-3 h-3 text-blue-400" />
                        {service.price}
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white">
                        <Clock className="w-3 h-3 text-blue-400" />
                        {service.time}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-zinc-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/917878433566?text=${encodeURIComponent(service.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110"
                    style={{ background: "#25D366", boxShadow: "0 0 16px rgba(37,211,102,0.2)" }}
                    data-testid={`btn-service-wa-${service.id}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20" style={{ background: "#121214" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3">
              More Services We Offer
            </h2>
            <p className="text-zinc-500 text-sm">Comprehensive tech solutions under one roof</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {additionalServices.map((svc) => (
              <motion.div
                key={svc.title}
                variants={itemVariants}
                className="rounded-2xl border border-zinc-800/60 p-5 card-hover"
                style={{ background: "#1A1A1E" }}
                data-testid={`additional-service-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h3 className="font-montserrat font-bold text-white text-sm mb-3 leading-snug">
                  {svc.title}
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <IndianRupee className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 text-xs font-semibold">{svc.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span className="text-zinc-500 text-xs">{svc.time}</span>
                </div>
                <a
                  href={`https://wa.me/917878433566?text=${encodeURIComponent(`Hi Ultrofix, I need: ${svc.title}. Please guide me.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  Inquire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16" style={{ background: "#0F0F11" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-black text-2xl text-white mb-8">Brands We Service</h2>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-zinc-800/60 max-w-xl w-full">
              <img src={brandsImg} alt="Dell, Apple, Lenovo, ASUS, HP, Acer" className="w-full object-contain" style={{ background: "#fff" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
