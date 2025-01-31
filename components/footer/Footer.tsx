import Image from "next/image";

import { useTranslations, useLocale } from "next-intl";

import Logo from "../../icons/logo.png";

function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/20 mt-10 sm:mt-20 py-10">
      <div className="text-white/60 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:relative mx-8">
        <div className="flex items-center text-center">
          <p className={`text-sm ${locale === "ka" ? "font-tbcMedium" : "font-avenir"}`} >
            © {new Date().getFullYear()}
            {t("rights")}
          </p>
        </div>
        <div className="flex sm:justify-end sm:absolute sm:bottom-0 sm:right-0 md:px-10">
          <Image src={Logo} alt="Mount Logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;