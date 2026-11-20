import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "@/muftlo/next/link";
import { Button } from "@/muftlo/ui/button";
import { getSiteMedia } from "@/muftlo/site-media";

const services = [
  {
    title: "Web Development",
    location: "Digital experiences",
    description: "Distinctive, high-performing websites designed around your business and built to turn visitors into customers.",
    image: getSiteMedia("Dots.jpg"),
  },
  {
    title: "AI Automation",
    location: "Smarter workflows",
    description: "Practical AI tools and automations that simplify everyday work, connect your systems, and give your team more time.",
    image: getSiteMedia("interactive-card.jpg"),
  },
  {
    title: "App Development",
    location: "Mobile experiences",
    description: "Useful, intuitive mobile applications shaped around the people who use them and the goals your business needs to reach.",
    image: getSiteMedia("Sondaryam.jpg"),
  },
  {
    title: "Digital Marketing",
    location: "Growth & visibility",
    description: "Research-led campaigns that bring your brand to the right audience, grow qualified traffic, and make results measurable.",
    image: getSiteMedia("Best Digital Marketing.jpg"),
  },
  {
    title: "Photo & Video",
    location: "Content & creative",
    description: "Memorable photography and video that tell your story clearly and give every campaign something worth looking at.",
    image: getSiteMedia("The Wood A.jpg"),
  },
  {
    title: "Branding & Design",
    location: "Identity & direction",
    description: "A consistent visual identity and thoughtful creative direction that help your brand feel recognizable everywhere.",
    image: getSiteMedia("Pastelli.jpg"),
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const orderedServices = services.map((_, offset) => services[(activeIndex + offset) % services.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-label="Explore our services" className="relative isolate flex h-[100svh] min-h-[100svh] max-h-[1000px] w-full overflow-hidden bg-brand-navy text-brand-cream">
      {services.map((service, index) => (
        <motion.img
          key={service.title}
          src={service.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 1.045 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      ))}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy/90 via-brand-navy/65 to-brand-navy/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/85 via-transparent to-brand-navy/20" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between px-5 pb-8 pt-12 sm:px-8 sm:pb-10 md:px-12 md:pb-14 md:pt-20 lg:px-16">
        <div className="max-w-2xl md:mt-auto md:mb-10">
          <motion.p
            key={`${activeService.title}-location`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange sm:text-sm"
          >
            {activeService.location}
          </motion.p>
          <motion.h1
            key={activeService.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-[11ch] text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {activeService.title}
          </motion.h1>
          <motion.p
            key={`${activeService.title}-description`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-brand-cream/85 sm:text-base md:mt-5 md:text-lg"
          >
            {activeService.description}
          </motion.p>
          <Button asChild className="mt-5 gap-2 rounded-full bg-brand-orange px-5 text-brand-navy hover:bg-brand-cream sm:mt-6">
            <Link href="/contact">Let’s talk <ArrowUpRight aria-hidden="true" size={17} /></Link>
          </Button>
        </div>

        <div className="-mx-5 mt-8 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:mt-0 md:overflow-visible md:px-0 md:pb-0">
          <div className="flex w-max gap-3 md:w-full md:justify-end md:gap-4">
            {orderedServices.map((service, position) => {
              const serviceIndex = services.findIndex((item) => item.title === service.title);
              const isActive = serviceIndex === activeIndex;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0, scale: isActive ? 1 : 0.96 }}
                  transition={{ duration: 0.45, delay: position * 0.055 }}
                  className={`group relative h-40 w-[112px] shrink-0 overflow-hidden rounded-md border transition-[height,width,border-color] duration-500 sm:h-48 sm:w-[132px] md:h-56 md:w-[148px] ${isActive ? "border-brand-orange md:h-64 md:w-[176px]" : "border-brand-cream/40"}`}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    aria-pressed={isActive}
                    aria-label={`Show ${service.title}`}
                    onClick={() => setActiveIndex(serviceIndex)}
                    className="group absolute inset-0 h-full w-full flex-col items-stretch justify-end whitespace-normal rounded-none p-0 text-left hover:bg-transparent"
                  >
                    <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/15 to-brand-navy/5" />
                    <span className="relative z-10 mb-2 ml-2 text-left sm:mb-3 sm:ml-3">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.08em] text-brand-orange sm:text-[10px]">0{serviceIndex + 1}</span>
                      <span className="mt-1 block text-xs font-semibold leading-tight text-brand-cream sm:text-sm">{service.title}</span>
                    </span>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}