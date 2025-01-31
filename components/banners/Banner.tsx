import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import Apple from "../../icons/appstore.svg";
import BannerImage from "../../icons/screen.png";

export function Banner() {
    const t = useTranslations("banner");
    const locale = useLocale();


    const title = t("title", {
        highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
    });

    return (
        <section className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto my-12 sm:my-24">
            <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-y-0 sm:gap-10 items-center">
                <div className="w-2/3 flex flex-col items-start gap-y-8 sm:gap-y-10">
                    <h1
                        className={`leading-tight text-white ${locale === "ka" ? "font-tbcMedium text-3xl sm:text-4xl" : "font-avenirHeavy text-4xl md:text-6xl font-extrabold"}`}
                        dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p className={`text-lg text-gray-300 ${locale === "ka" ? "font-tbcRegular" : "font-avenirHeavy"} `} >{t("description")}</p>
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
                <div className="w-1/3">
                    <div className="relative">
                        <Image
                            src={BannerImage}
                            alt="Mountapp Banner"
                            quality={100}
                            width={500}
                            height={100}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
