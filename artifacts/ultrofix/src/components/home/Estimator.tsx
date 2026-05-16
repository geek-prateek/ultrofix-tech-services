import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Clock, IndianRupee } from "lucide-react";

const services = [
  {
    id: "formatting",
    label: "Laptop System Formatting",
    price: "₹500 – ₹800",
    time: "2–4 Hours",
  },
  {
    id: "motherboard",
    label: "Chip-Level Motherboard Repair",
    price: "₹2,000+",
    time: "3–7 Business Days",
  },
  {
    id: "screen",
    label: "Laptop Screen Replacement",
    price: "₹2,500+",
    time: "1–2 Business Days",
  },
  {
    id: "data-recovery",
    label: "Data Recovery Service",
    price: "₹1,500+",
    time: "1–3 Business Days",
  },
  {
    id: "gaming-pc",
    label: "Custom Gaming PC Build",
    price: "Budget Based",
    time: "5–10 Business Days",
  },
  {
    id: "apple",
    label: "iPhone & MacBook Expert Repair",
    price: "₹800+",
    time: "1–3 Business Days",
  },
];

export default function Estimator() {
  const [selected, setSelected] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedService = services.find((s) => s.id === selected);

  const waLink = selectedService
    ? `https://wa.me/917878433566?text=${encodeURIComponent(`Hi, I need help with: ${selectedService.label}`)}`
    : "#";

  return (
    <section id="estimator" className="py-24 relative" style={{ background: "#0F0F11" }}>
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <IndianRupee className="w-3 h-3" />
            Instant Estimate
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
            Instant Repair Estimate
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Select your service to get an instant price range and time estimate — no surprises.
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
                <span className={selected ? "text-white" : "text-zinc-500"}>
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
                        {service.label}
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
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Price */}
                    <div
                      className="rounded-xl p-5 border border-blue-500/20"
                      style={{ background: "rgba(37,99,235,0.08)" }}
                      data-testid="estimate-price"
                    >
                      <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-2">
                        <IndianRupee className="w-3 h-3" />
                        Estimated Price
                      </div>
                      <div className="font-montserrat font-black text-2xl text-blue-400">
                        {selectedService.price}
                      </div>
                    </div>

                    {/* Time */}
                    <div
                      className="rounded-xl p-5 border border-zinc-700/50"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      data-testid="estimate-time"
                    >
                      <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-2">
                        <Clock className="w-3 h-3" />
                        Repair Time
                      </div>
                      <div className="font-montserrat font-bold text-xl text-white">
                        {selectedService.time}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.01]"
                    style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37, 211, 102, 0.3)" }}
                    data-testid="btn-whatsapp-book"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book This Repair via WhatsApp
                  </a>

                  <p className="text-center text-zinc-600 text-xs mt-3">
                    Prices are estimates. Final pricing after free diagnostic.
                  </p>
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
                    Select a service above to see the estimated price and repair time.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
