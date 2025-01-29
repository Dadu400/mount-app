import Image from "next/image";

import { useTranslations } from "next-intl";

import Apple from "../../icons/appstore.svg";
import Google from "../../icons/playstore.svg";
import BannerImage from "../../icons/screen.png";

export function Banner() {
    const t = useTranslations("banner");

    const title = t("title", {
        highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
    });

    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto my-20">
            <div className="flex items-center">
                <div className="w-2/3 flex flex-col items-start gap-y-10">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white"
                        dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p className="text-xl text-gray-300">{t("description")}</p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://apps.apple.com/ge/app/mountapp/id6466344143"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40 hover:opacity-90"
                        >
                            <Image
                                src={Apple}
                                alt="Apple Store"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40 hover:opacity-90"
                        >
                            <Image
                                src={Google}
                                alt="Google Play"
                            />
                        </a>
                    </div>
                </div>
                <div className="w-1/3">
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
            </div>
        </section>
    );
}
