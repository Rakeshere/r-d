
import { ThreeDMarquee } from "@/muftlo/ui/3d-marquee";
import { getSiteMedia } from "@/muftlo/site-media";

export function ThreeDMarqueeDemoSecond() {
  const images = [
    getSiteMedia("Dots.jpg"),
    getSiteMedia("Pastelli.jpg"),
    getSiteMedia("Sondaryam.jpg"),
    getSiteMedia("ForceLifts.jpg"),
    getSiteMedia("Reliant.jpg"),
    getSiteMedia("GKB.jpg"),
  ];
  return (
    <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-lg font-bold text-balance text-white md:text-2xl lg:text-4xl">
        Transforming{" "}
        <span className="relative z-20 inline-block rounded-xlpx-4 py-1 text-white decoration-[6px] underline-offset-[16px]">
          ideas
        </span>{" "}
        into brands that connect and convert.
      </h2>

      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        From strategy to storytelling — we craft digital experiences that make
        your brand unforgettable. Whether it’s scaling your reach, building
        trust, or driving sales, our team blends creativity and data to help you
        grow faster, smarter, and stronger.
      </p>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />

      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
