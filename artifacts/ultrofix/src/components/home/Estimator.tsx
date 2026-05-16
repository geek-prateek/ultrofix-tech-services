import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Clock, IndianRupee, Info, AlertCircle } from "lucide-react";

const services = [
  {
    id: "formatting",
    label: "Laptop System Formatting & OS Install",
    price: "₹499 – ₹799",
    time: "1 – 4 Hours",
    note: "Price varies based on OS version, driver installation complexity, and whether data backup is required before formatting.",
    isQuote: false,
  },
  {
    id: "motherboard",
    label: "Chip-Level Motherboard Repair",
    price: "₹1,999 – ₹4,500+",
    time: "24 – 72 Hours",
    note: "Cost depends on the specific faulty IC, availability of donor board components, brand-specific parts, and depth of damage detected during diagnostic.",
    isQuote: false,
  },
  {
    id: "screen",
    label: "Laptop Screen Replacement",
    price: "₹1,999 – ₹5,999+",
    time: "12 – 48 Hours",
    note: "Screen replacement costs depend on panel type (TN/IPS/OLED), screen resolution, refresh rate, brand, and whether it's a touch-enabled display.",
    isQuote: false,
  },
  {
    id: "data-recovery",
    label: "Data Recovery Service",
    price: "Quote Post Free Diagnostic",
    time: "3 – 5 Days (Diagnostic Dependent)",
    note: "Data recovery pricing cannot be pre-estimated — it depends on type of failure (logical vs. physical), storage medium condition, and data volume. A free physical diagnostic is mandatory before any quotation.",
    isQuote: true,
  },
  {
    id: "gaming-pc",
    label: "Custom & Gaming PC Build",
    price: "Budget Based on Configuration",
    time: "5 – 10 Business Days",
    note: "Total cost is entirely dependent on your selected components (CPU, GPU, RAM, storage, cabinet, cooling). We provide expert guidance to build within your budget.",
    isQuote: true,
  },
  {
    id: "apple",
    label: "iPhone & MacBook Expert Repair",
    price: "₹799 – ₹8,999+",
    time: "12 – 72 Hours",
    note: "Apple device repairs vary significantly by model, issue type (screen, battery, logic board, charging port), and genuine part availability. MacBook chip-level repairs fall at the higher end.",
    isQuote: false,
  },
  {
    id: "battery",
    label: "Battery Replacement (Laptop/Mobile)",
    price: "₹799 – ₹2,999+",
    time: "1 – 6 Hours",
    note: "Battery costs differ based on cell type, device model, brand compatibility, and whether a genuine OEM cell or a high-quality compatible cell is used.",
    isQuote: false,
  },
  {
    id: "amc",
    label: "AMC – Annual Maintenance Contract (Bulk)",
    price: "Quote Based on System Count",
    time: "Custom Schedule",
    note: "AMC pricing is calculated based on number of systems, device types, service frequency, response time SLA, and your business location proximity.",
    isQuote: true,
  },
];

export default function Estimator() {
  const [selected, setSelected] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedService = services.find((s) => s.id === selected);

  const waMessage = selectedService
    ? `Hi Ultrofix, I checked your estimate tool for "${selectedService.label}". I would like to bring my system in for a free diagnostic check to get an exact quotation.`
    : "";

  const waLink = selectedService
    ? `https://wa.me/917878433566?text=${encodeURIComponent(waMessage)}`
    : "#";

  return (
    <section id="estimator" className="py-16 relative" style={{ background: "#0F0F11" }}>
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <IndianRupee className="w-3 h-3" />
            Repair Cost Estimator
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
            Instant Repair Estimate
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Get a transparent price range and turnaround estimate for your service — no hidden surprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-zinc-800/60 overflow-hidden"
          style={{ background: "#1A1A1E" }}
        >
          <div className="p-6 sm:p-8">
            {/* Custom Dropdown */}
            <label className="block text-sm font-semibold text-zinc-300 mb-3">
              Select a Service
            </label>
            <div className="relative mb-6" data-testid="service-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-zinc-700 text-left transition-all duration-200 hover:border-blue-500/50 focus:outline-none focus:border-blue-500"
                style={{ background: "#121214" }}
                data-testid="btn-dropdown-toggle"
              >
                <span className={selected ? "text-white text-sm" : "text-zinc-500 text-sm"}>
                  {selectedService ? selectedService.label : "Select a service to get an estimate..."}
                </span>
                <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-zinc-700 overflow-hidden z-20 shadow-2xl"
                    style={{ background: "#1A1A1E" }}
                  >
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setSelected(service.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-600/10 hover:text-white border-b border-zinc-800/60 last:border-0 ${
                          selected === service.id ? "text-blue-400 bg-blue-600/10" : "text-zinc-300"
                        }`}
                        data-testid={`option-${service.id}`}
                      >
                        <span>{service.label}</span>
                        {service.isQuote && (
                          <span className="ml-2 text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-full">Quote Based</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Result Display */}
            <AnimatePresence mode="wait">
              {selectedService ? (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Price + Time Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div
                      className="rounded-xl p-5 border border-blue-500/20"
                      style={{ background: "rgba(37,99,235,0.08)" }}
                      data-testid="estimate-price"
                    >
                      <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-2">
                        <IndianRupee className="w-3 h-3" />
                        Estimated Price Range
                      </div>
                      <div className={`font-montserrat font-black text-blue-400 ${selectedService.isQuote ? "text-base leading-snug" : "text-2xl"}`}>
                        {selectedService.price}
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-5 border border-zinc-700/50"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      data-testid="estimate-time"
                    >
                      <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-2">
                        <Clock className="w-3 h-3" />
                        Estimated Turnaround
                      </div>
                      <div className={`font-montserrat font-bold text-white ${selectedService.isQuote ? "text-sm leading-snug" : "text-xl"}`}>
                        {selectedService.time}
                      </div>
                    </div>
                  </div>

                  {/* Contextual Note */}
                  <div
                    className="flex items-start gap-3 rounded-xl p-4 mb-5 border border-amber-500/20"
                    style={{ background: "rgba(245, 158, 11, 0.06)" }}
                    data-testid="estimate-note"
                  >
                    <Info className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <p className="text-amber-300/80 text-xs leading-relaxed">
                      {selectedService.note}
                    </p>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.01] mb-5"
                    style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37, 211, 102, 0.3)" }}
                    data-testid="btn-whatsapp-book"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book This Repair via WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <IndianRupee className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Select a service above to see the estimated price range and turnaround time.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Permanent Disclaimer Footer */}
            <div
              className="flex items-start gap-3 rounded-xl p-4 border border-zinc-700/40 mt-2"
              style={{ background: "rgba(255,255,255,0.02)" }}
              data-testid="disclaimer-footer"
            >
              <AlertCircle className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
              <p className="text-zinc-500 text-xs leading-relaxed">
                <span className="text-zinc-300 font-semibold">Note:</span> All price ranges and timelines are tentative.
                Final exact calculations are provided only after a complimentary, zero-obligation physical system
                diagnostic check at our Gota center.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
