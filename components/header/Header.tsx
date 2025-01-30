import Image from "next/image";

import Logo from "../../icons/logo.png";
import SnowAnimation from "../animation/SnowAnimation";
import LocaleSwitcher from "./LocaleSwitcher";

export function Header() {
  return (
    <header className="relative w-full px-8 py-6">
      <SnowAnimation />
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={160} height={10} className="w-28 sm:w-40"/>
        </div>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
