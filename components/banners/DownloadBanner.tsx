import Image from 'next/image';
import { useTranslations, useLocale } from "next-intl";

import Apple from '../../icons/appstore.svg';
import QR from '../../icons/qr.png';
import AppBanner from "../../icons/appbaner.png";

function DownloadBanner() {
    const t = useTranslations("download");
    const locale = useLocale();

    const title = t("title", {
        highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
    });

    return (
        <section className="w-[85%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[65%] mx-auto py-10 sm:py-16">
            <div className="bg-white/10 rounded-3xl p-10 text-pretty text-center backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 flex flex-col gap-y-4">
                <h2
                    className={`leading-tight text-white ${locale === "ka" ? "font-tbcBold text-4xl" : "font-avenirHeavy font-extrabold text-4xl"}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
                <div className="flex justify-center">
                    <Image
                        src={AppBanner}
                        alt="Mountapp Banner"
                        quality={100}
                        width={500}
                        height={350}
                        layout="intrinsic"
                        className="rounded-xl max-w-full"
                        priority
                    />
                </div>
                <p className={`text-white/80 my-4 ${locale === "ka" ? "font-tbcRegular text-lg" : "font-avenir text-xl"}`}>
                    {t("description")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://apps.apple.com/ge/app/mountapp/id6466344143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-28 sm:w-40 hover:opacity-90"
                    >
                        <Image src={Apple} alt="Apple Store" quality={100} width={160} height={50} />
                    </a>
                    <Image
                        src={QR}
                        alt="QR Code"
                        quality={100}
                        width={112}
                        height={112}
                        className="rounded-xl border-black border-2"
                    />
                </div>
            </div>
        </section>
    );
}

export default DownloadBanner;
