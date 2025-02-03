import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import BakurianiIcon from "../../icons/bakuriani.png";
import GudauriIcon from "../../icons/gudauri.png";
import MestiaIcon from "../../icons/mestia.png";
import GoderdziIcon from "../../icons/goderdzi.png";
import BannerRent from "../../icons/bannerRent.png";

function LocationBanner() {
  const t = useTranslations("banner");
  const locale = useLocale();

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
    <section className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] sm:mx-auto my-12 sm:my-24">
      <div className="flex flex-col items-center text-center gap-y-10 lg:flex-row lg:text-start sm:gap-10 lg:gap-y-14">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src={BannerRent}
            alt="Mountapp Banner"
            quality={100}
            width={500}
            height={350}
            className="rounded-xl max-w-[80%] sm:max-w-[90%] lg:max-w-[98%] xl:max-w-none mx-auto lg:mx-0"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-y-6 sm:gap-y-8">
          <h2
            className={`text-white leading-tight ${locale === "ka" ? "font-tbcBold text-3xl sm:text-4xl xl:text-5xl w-[90%] mx-auto lg:mx-0" : "font-avenirHeavy text-4xl sm:text-5xl xl:text-6xl font-extrabold w-[90%] mx-auto lg:mx-0"}`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>

          <p className={`text-lg text-gray-300 ${locale === "ka" ? "font-tbcRegular" : "font-avenirHeavy"} w-[90%] mx-auto lg:mx-0`}>
            {t("description")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 lg:gap-y-8 gap-x-4 justify-center items-center lg:justify-self-start">
            {skiDestinations.map((destination, index) => (
              <div key={index} className="relative w-full flex items-center lg:self-start">
                <Image
                  src={destination.src}
                  alt={destination.alt}
                  quality={100}
                  className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[80px] xl:w-[90px] h-auto object-contain"
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
