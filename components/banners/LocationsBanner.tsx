import Image from "next/image";

import BakurianiIcon from "../../icons/bakuriani.png";
import GudauriIcon from "../../icons/gudauri.png";
import MestiaIcon from "../../icons/mestia.png";
import GoderdziIcon from "../../icons/goderdzi.png";

function LocationBanner() {
  const skiDestinations = [
    { src: BakurianiIcon, alt: "Bakuriani Ski Resort" },
    { src: GudauriIcon, alt: "Gudauri Ski Resort" },
    { src: MestiaIcon, alt: "Mestia Ski Resort" },
    { src: GoderdziIcon, alt: "Goderdzi Ski Resort" },
  ];

  return (
    <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto">
      <div className="flex items-center justify-between">
        <div className="relative h-[600px] w-full order-2 md:order-1">
          {/* Placeholder for potential image or additional content */}
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Choose Your Perfect <span className="text-yellow-300">Ski Destination</span>
          </h2>
          <p className="text-xl text-white/80">
            Explore top ski resorts across Georgia, from Gudauri to Bakuriani, and find the ideal slopes for your skill level.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skiDestinations.map((destination, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={destination.src}
                  alt={destination.alt}
                  layout="responsive" 
                  width={20} 
                  height={10}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationBanner;
