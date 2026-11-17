import { motion } from "framer-motion";
import { getSiteMedia } from "@/muftlo/site-media";

const work = [
  { name: "Dotsquares", image: "Dots.jpg", alt: "Dotsquares company profile video project" },
  { name: "Search Abode", image: "Best Digital Marketing.jpg", alt: "Search Abode digital marketing project" },
  { name: "Sondaryam", image: "Sondaryam.jpg", alt: "Sondaryam podcast and branding project" },
  { name: "RNT School", image: "RNT.jpg", alt: "RNT School digital presence project" },
  { name: "Pastelli", image: "Pastelli.jpg", alt: "Pastelli fashion brand project" },
];

const cardPositions = [
  "mt-14 -rotate-6 md:mt-20",
  "mt-7 rotate-3 md:mt-10",
  "-mt-1 -rotate-2 md:-mt-4",
  "mt-8 rotate-3 md:mt-8",
  "mt-14 rotate-6 md:mt-20",
];

export default function WorkGallery() {
  return (
    <section aria-labelledby="selected-work-title" className="overflow-hidden bg-brand-navy px-5 pb-16 pt-32 text-brand-cream sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-brand-orange">Selected work</p>
            <h2 id="selected-work-title" className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Good work speaks for itself.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand-cream/65 md:pb-1">
            A few of the brands we’ve helped shape, tell their story, and grow.
          </p>
        </div>

        <div className="-mx-5 mt-8 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto px-8 pb-6 sm:-mx-8 sm:gap-5 sm:px-12 md:mx-0 md:mt-12 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-4">
          {work.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8, rotate: 0 }}
              className={`w-[68vw] max-w-[280px] shrink-0 snap-center bg-brand-cream p-2 pb-3 text-brand-navy shadow-xl transition-shadow hover:shadow-2xl sm:w-[54vw] md:w-full md:max-w-none ${cardPositions[index]}`}
            >
              <img
                src={getSiteMedia(item.image)}
                alt={item.alt}
                loading="lazy"
                className="h-[250px] w-full object-cover sm:h-[280px] md:h-[260px] lg:h-[300px]"
              />
              <figcaption className="px-2 pt-2 text-sm font-semibold">{item.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}