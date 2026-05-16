import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import chipRepairImg from "@assets/chip-repair_1778906676921.jpg";
import deviceCloseupImg from "@assets/home-showcase-device-closeup-portrait_1778906676926.jpg";
import mobileRepairImg from "@assets/mobile-repair_1778906676931.jpg";

const reviews = [
  {
    id: 1,
    name: "Kaushal Mahto",
    location: "Gota",
    text: "Probably the best computer and laptop repair shop nearby the Gota area, highly recommend. Good work.",
    stars: 5,
    source: "Google Review",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Chandlodia",
    text: "Got my MacBook screen replaced in just one day. Transparent pricing, no hidden charges. Will definitely come back!",
    stars: 5,
    source: "Google Review",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    location: "New Ranip",
    text: "Chip-level repair done on my Dell laptop that 3 other shops said was unrepairable. Ultrofix fixed it in 4 days!",
    stars: 5,
    source: "Google Review",
  },
  {
    id: 4,
    name: "Ankit Mehta",
    location: "Jagatpur",
    text: "Very professional team. Got my custom gaming PC built at a great price. Performance is amazing.",
    stars: 5,
    source: "Justdial Review",
  },
  {
    id: 5,
    name: "Sneha Desai",
    location: "Ahmedabad",
    text: "Lost all my data after a crash. They recovered everything! Incredibly skilled and trustworthy.",
    stars: 5,
    source: "Google Review",
  },
];

const galleryItems = [
  {
    id: "chip-repair",
    title: "Chip-Level Repair",
    subtitle: "Motherboard micro-soldering",
    image: chipRepairImg,
    videoSrc: "@assets/Contact_for_laptop_&_computer_repair_services_in_gota_ahmedaba_1778906689606.mp4",
  },
  {
    id: "device-closeup",
    title: "Component Work",
    subtitle: "Precision hardware servicing",
    image: deviceCloseupImg,
    videoSrc: "@assets/home-showcase-repair-vertical_1778906689608.mp4",
  },
  {
    id: "mobile-repair",
    title: "Mobile Repair",
    subtitle: "iPhone & Android service",
    image: mobileRepairImg,
    videoSrc: "@assets/Contact_for_laptop_repair_services_in_gota_--_+917878433566,+9_1778906689607.mp4",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplayPlugin.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24" style={{ background: "#121214" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            Customer Reviews
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Real feedback from real customers in Ahmedabad. We let the results speak.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          data-testid="reviews-carousel"
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-none w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]"
                  data-testid={`review-card-${review.id}`}
                >
                  <div
                    className="h-full rounded-2xl border border-zinc-800/60 p-6 flex flex-col"
                    style={{ background: "#1A1A1E" }}
                  >
                    <StarRating count={review.stars} />
                    <p className="text-zinc-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold text-sm">{review.name}</div>
                        <div className="text-zinc-500 text-xs">{review.location}</div>
                      </div>
                      <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {review.source}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
              data-testid="btn-carousel-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 bg-blue-500" : "w-1.5 bg-zinc-700"}`}
                data-testid={`carousel-dot-${i}`}
              />
            ))}
            <button
              onClick={scrollNext}
              className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
              data-testid="btn-carousel-next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Gallery — Tech In Action with real images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-2">
              Ultrofix In Action
            </h3>
            <p className="text-zinc-500 text-sm">A glimpse of our actual bench work</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/60 ${i === 1 ? "sm:mt-8" : ""}`}
                style={{ aspectRatio: "9/10" }}
                data-testid={`gallery-card-${item.id}`}
                onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-montserrat font-bold text-white text-base">{item.title}</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">{item.subtitle}</p>
                  <p className="text-zinc-600 text-[10px] mt-2">@ultrofixtechservices</p>
                </div>

                {/* Play button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
