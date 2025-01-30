import Image from "next/image";

import { useTranslations } from "next-intl";

import BakurianiIcon from "../../icons/bakuriani.png";
import GudauriIcon from "../../icons/gudauri.png";
import MestiaIcon from "../../icons/mestia.png";
import GoderdziIcon from "../../icons/goderdzi.png";
import BannerImage from "../../icons/screen.png";

function LocationBanner() {
  const t = useTranslations("banner");

  const title = t("title", {
    highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
  });

  const skiDestinations = [
    { src: BakurianiIcon, alt: "Bakuriani Ski Resort" },
    { src: GudauriIcon, alt: "Gudauri Ski Resort" },
    { src: MestiaIcon, alt: "Mestia Ski Resort" },
    { src: GoderdziIcon, alt: "Goderdzi Ski Resort" },
  ];

  return (
    <section className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto my-12 sm:my-24">
      <div className="flex flex-col items-center sm:flex-row justify-between gap-20">
      <div className="w-1/2 sm:w-1/3">
          <div className="relative">
            <Image
              src={BannerImage}
              alt="Mountapp Banner"
              layout="responsive"
              width={500}
              height={100}
            />
          </div>
        </div>
        <div className="w-1/2 sm:w-2/3 space-y-6 order-1 md:order-2 flex flex-col">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}>
          </h2>
          <p className="text-xl text-white/80">
           {t("description")}
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
