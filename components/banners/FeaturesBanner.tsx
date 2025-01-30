import Image from "next/image";

import { useTranslations } from "next-intl";

import skipassIcon from "../../icons/skipass.png";
import toursIcon from "../../icons/tours.png";
import cafesIcon from "../../icons/cafes.png";

function FeaturesBanner() {
  const t = useTranslations("banner");

  const title = t("title", {
    highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
  });

  return (
    <section className="w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto py-10 lg:py-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16" dangerouslySetInnerHTML={{ __html: title }}></h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Ski Passes & Equipment",
            description: "Book passes and rent gear effortlessly.",
            images: [skipassIcon, skipassIcon],
          },
          {
            title: "Hotels & Accommodation",
            description: "Find the perfect slope-side stay.",
            images: [skipassIcon, cafesIcon],
          },
          {
            title: "Tours & Guides",
            description: "Discover expert-led mountain experiences.",
            images: [toursIcon, skipassIcon],
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[90%] sm:w-[80%] md:w-full px-4 py-6 mx-auto justify-between items-center text-center bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex gap-8">
              {feature.images.map((src, imgIndex) => (
                <div key={imgIndex} >
                  <Image
                    src={src}
                    alt={`${feature.title} icon ${imgIndex + 1}`}
                    layout="responsive"
                    className="md:w-8"
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center mt-4 h-20">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-white/80 text-wrap font-AvenirRegular">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesBanner;
