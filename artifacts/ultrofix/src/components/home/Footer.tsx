import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Zap, MessageCircle, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="border-t border-white/8 pb-20 md:pb-0"
      style={{ background: "#0A0A0C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center blue-glow-sm">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-montserrat font-black text-xl text-white">
                Ultro<span className="text-blue-500">fix</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Ahmedabad's most trusted chip-level repair specialists. Professional tools,
              genuine parts, and transparent pricing — every time.
            </p>

            {/* Hours */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
            </div>

            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/917878433566?text=Hi%2C+I+need+device+support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:brightness-110"
              style={{ background: "#25D366", boxShadow: "0 0 16px rgba(37, 211, 102, 0.25)" }}
              data-testid="btn-footer-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:Ultrofixtechservices@gmail.com"
                className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors group"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm break-all">Ultrofixtechservices@gmail.com</span>
              </a>

              <a
                href="tel:+917878433566"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                data-testid="link-phone-1"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-sm">+91 78784 33566</span>
              </a>

              <a
                href="tel:+918400025112"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                data-testid="link-phone-2"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-sm">+91 84000 25112</span>
              </a>
            </div>
          </div>

          {/* Address + Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-5">
              Location
            </h4>
            <a
              href="https://maps.google.com/?q=Shaligram+Square+Gota+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors mb-5 group"
              data-testid="link-address"
            >
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">
                Shop FF 110, Shaligram Square, behind Olive Greens, near Gota Chokdi Flyover,
                Gota, Ahmedabad, Gujarat 382481
              </span>
            </a>

            <a
              href="https://maps.google.com/?q=Shaligram+Square+Gota+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors"
              data-testid="link-google-maps"
            >
              <ExternalLink className="w-3 h-3" />
              Open in Google Maps
            </a>

            {/* Nav quick links */}
            <div className="mt-6 space-y-2">
              {["Services", "About", "Reviews"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  data-testid={`footer-nav-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/5"
        style={{ background: "#070709" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-600 text-xs">
            &copy; 2025 Ultrofix Tech Services. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            Gota, Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
