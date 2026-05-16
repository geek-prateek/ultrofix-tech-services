import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-white/10"
      style={{ background: "#121214" }}
      data-testid="mobile-action-bar"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href="tel:+917878433566"
          className="flex flex-col items-center justify-center gap-1 py-3 text-zinc-400 hover:text-blue-400 hover:bg-blue-600/10 transition-all active:bg-blue-600/20"
          data-testid="btn-mobile-call"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Call</span>
        </a>

        <a
          href="https://wa.me/917878433566"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-zinc-400 hover:text-green-400 hover:bg-green-500/10 transition-all active:bg-green-500/20"
          data-testid="btn-mobile-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        <a
          href="https://maps.google.com/?q=Shaligram+Square+Gota+Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-zinc-400 hover:text-blue-400 hover:bg-blue-600/10 transition-all active:bg-blue-600/20"
          data-testid="btn-mobile-find-shop"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wide">Find Shop</span>
        </a>
      </div>
    </div>
  );
}
