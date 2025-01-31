import Image from 'next/image';

import { useTranslations, useLocale } from "next-intl";

import Apple from '../../icons/appstore.svg';
import QR from '../../icons/qr.png';


function DownloadBanner() {
    const t = useTranslations("download");
    const locale = useLocale();

    const title = t("title", {
        highlight: `<span style="color: #F3CA00;">${t("highlightedTitle")}</span>`,
    });

    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto py-10 sm:py-20">
            <div className="bg-white/10 rounded-3xl p-12 backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300 flex flex-col gap-y-4">
                <h2 className={`text-3xl leading-tight text-white ${locale === "ka" ? "font-tbcMedium" : "font-avenirHeavy font-extrabold"}`}
                        dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p className="text-xl text-white/80 my-4">
                    {t("description")}
                </p>
                <div className="flex flex-col sm:flex-row items-center flex-wrap justify-around sm:items-center gap-4">
                    <a
                        href="https://apps.apple.com/ge/app/mountapp/id6466344143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-28 sm:w-40 hover:opacity-90"
                    >
                        <Image
                            src={Apple}
                            alt="Apple Store"
                            quality={100} />
                    </a>
                    <Image src={QR} alt='qr-code' className='w-28 h-28 rounded-xl border-black border-2' quality={100} />
                </div>
            </div>
        </section>
    );
}

export default DownloadBanner;