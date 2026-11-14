

import Link from "@/muftlo/next/link";
import { useState, useEffect } from "react";
import { getSiteMedia } from "@/muftlo/site-media";

const ChooseUs = () => {
  const slides = [
    {
      title: "Transform Your Brand Presence",
      desc: "Digital strategies crafted to boost your visibility and engagement. Experience real growth with marketing built for impact.",
      img: getSiteMedia("marketing-promotional-campaign.jpg"),
      btn: "Explore More",
    },
    {
      title: "Boost Visibility with Powerful SEO",
      desc: "Rank higher, get discovered, and attract the right audience. Smart optimization that drives consistent, organic growth.",
      img: getSiteMedia("shutterstock_2502022545.jpg"),
      btn: "Explore More",
    },
    {
      title: "Tell Your Story with Stunning Photo & Video",
      desc: "High-quality visuals that elevate your brand identity. Create lasting impressions through cinematic content.",
      img: getSiteMedia("video-production-crew.jpg"),
      btn: "Explore More",
    },
    {
      title: "Convert Viewers into Leads with Powerful Visuals",
      desc: "Engaging photo & video content that builds trust. Showcase your brand and inspire action instantly.",
      img: getSiteMedia("photography-in-digital-marketing.jpg"),
      btn: "Explore More",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[100vh] md:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      ))}

      <div className="relative z-10 flex items-center h-full">
        <div
          className="px-6 md:px-16 lg:px-20 max-w-2xl md:max-w-7xl
                        text-left md:text-left mx-auto md:mx-0"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-snug">
            {slides[index].title}
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
            {slides[index].desc}
          </p>

          <Link href="/contact">
            <button
              className="px-6 sm:px-8 py-3 bg-blue-900 text-white 
                               hover:bg-blue-800 rounded-full cursor-pointer font-medium
                               transition-all duration-500 text-sm sm:text-base"
            >
              {slides[index].btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
