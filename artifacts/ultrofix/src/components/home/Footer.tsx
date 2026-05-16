import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, ExternalLink, Instagram } from "lucide-react";
import { Link } from "wouter";
import logoImg from "@assets/Logo-hd.png";

const MAPS_URL = "https://www.google.com/maps/place/Ultrofix+Tech+Services/@23.1024312,72.5329652,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8304b4e69697:0x3eee29f5539bd4d!8m2!3d23.1024263!4d72.5355401!16s%2Fg%2F11n55g3qkb?entry=ttu";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/8 pb-20 md:pb-0"
      style={{ background: "#0A0A0C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                <img src={logoImg} alt="Ultrofix" className="w-full h-full object-contain scale-125" />
              </div>
              <div className="flex flex-col leading-none mt-1">
                <span className="font-montserrat font-black text-xl text-white">
                  Ultro<span className="text-blue-400">fix</span>
                </span>
                <span className="text-zinc-500 text-[9px] font-medium tracking-widest uppercase">Tech Services</span>
              </div>
            </div>
            <p className="text-blue-400 text-xs font-semibold mb-3 tracking-wide">Your Tech Repair Expert</p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-xs">
              Ahmedabad's most trusted chip-level repair specialists. Professional tools,
              genuine parts, and transparent pricing — every time.
            </p>

            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 9:30 PM</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://www.instagram.com/ultrofixtechservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                data-testid="link-instagram-footer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917878433566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-green-400 hover:border-green-500/40 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://wa.me/917878433566?text=Hi%2C+I+need+device+support+from+Ultrofix+Tech+Services"
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

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:Ultrofixtechservices@gmail.com"
                className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors"
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

            <div className="mt-7">
              <p className="text-zinc-600 text-xs font-semibold uppercase tracking-widest mb-3">Quick Links</p>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Home</Link>
                <Link href="/services" className="block text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Services</Link>
                <Link href="/about" className="block text-zinc-500 hover:text-zinc-300 text-sm transition-colors">About Us</Link>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-widest mb-4">
              Location
            </h4>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors mb-4"
              data-testid="link-address"
            >
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">
                Shop FF 110, Shaligram Square, behind Olive Greens, near Gota Chokdi Flyover,
                Gota, Ahmedabad, Gujarat 382481
              </span>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors"
              data-testid="link-google-maps"
            >
              <ExternalLink className="w-3 h-3" />
              Open in Google Maps
            </a>

            <a
              href="https://www.instagram.com/ultrofixtechservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-zinc-500 hover:text-pink-400 text-sm transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @ultrofixtechservices
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5" style={{ background: "#070709" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-600 text-xs">
            &copy; 2025 Ultrofix Tech Services. All rights reserved. | Gota, Ahmedabad, Gujarat
          </p>
          <p className="text-zinc-700 text-xs">
            Developed by{" "}
            <a
              href="https://aws-portfolio-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors font-medium underline underline-offset-2"
              data-testid="link-developer-credit"
            >
              Prateek Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
