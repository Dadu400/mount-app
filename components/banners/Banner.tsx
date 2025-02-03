import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import Apple from "../../icons/appstore.svg";
import SkiPassBanner from "../../icons/skipassbanner.png";

export function Banner() {
    const t = useTranslations("banner");
    const locale = useLocale();

    const title = t("title", {
        highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
    });

    return (
        <section className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] sm:mx-auto my-12 sm:my-24">
            <div className="flex flex-col items-center text-center gap-y-10 lg:flex-row lg:text-start sm:gap-10 lg:gap-14">
                
                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-6 sm:gap-y-8">
                    <h1
                        className={`text-white leading-tight ${locale === "ka" ? "font-tbcBold text-3xl sm:text-4xl xl:text-5xl w-[90%] mx-auto lg:mx-0" : "font-avenirHeavy text-4xl sm:text-5xl xl:text-6xl font-extrabold w-[90%] mx-auto lg:mx-0"}`}
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></h1>
                    
                    <p className={`text-lg text-gray-300 ${locale === "ka" ? "font-tbcRegular" : "font-avenirHeavy"} w-[90%] mx-auto lg:mx-0`}>
                        {t("description")}
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://apps.apple.com/ge/app/mountapp/id6466344143"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-32 sm:w-40 hover:opacity-90"
                        >
                            <Image src={Apple} alt="Apple Store" />
                        </a>
                    </div>
                </div>

                {/* Right Side Image (Centered on small screens) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <Image
                        src={SkiPassBanner}
                        alt="Mountapp Banner"
                        quality={100}
                        width={500}
                        height={350}
                        className="rounded-xl max-w-[80%] sm:max-w-[90%] lg:max-w-none mx-auto lg:mx-0"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
