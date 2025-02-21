import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import skipassIcon from "../../icons/skipass.png";
import toursIcon from "../../icons/tours.png";
import GuideIcon from "../../icons/guides.png";
import Snow from "../../icons/snow.png";

function FeaturesBanner() {
  const t = useTranslations("features");
  const locale = useLocale();

  const title = t("title", {
    highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
  });

  const features = [
    {
      title: t("skiPassTitle"),
      description: t("skiPassDescription"),
      images: [skipassIcon, Snow],
    },
    {
      title: t("toursTitle"),
      description: t("toursDescription"),
      images: [toursIcon, GuideIcon],
    },
  ];

  return (
    <section className="w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto py-16 lg:py-24">
      <h2
        className={`mb-14 text-center ${locale === "ka" ? "font-HelveticaBold text-3xl sm:text-3xl md:text-4xl" : "font-avenir text-3xl sm:text-4xl md:text-5xl font-extrabold"}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[90%] sm:w-[80%] md:w-full px-4 py-6 mx-auto justify-between items-center text-center bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex gap-8">
              {feature.images.map((src, imgIndex) => (
                <div key={imgIndex}>
                  <Image
                    src={src}
                    alt={`${feature.title} icon ${imgIndex + 1}`}
                    quality={100}
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-y-4 flex-grow mt-6">
              <h3 className={`font-bold ${locale === "ka" ? "font-HelveticaBold text-lg" : "font-avenirHeavy text-xl"}`}>
                {feature.title}
              </h3>
              <p className={`text-white/80 ${locale === "ka" ? "font-Helvetica md:text-sm lg:text-lg" : "font-avenir text-xl"}`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesBanner;
