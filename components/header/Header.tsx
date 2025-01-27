import Image from "next/image";

import Logo from "../../icons/logo.png";
import SnowAnimation from "../animation/SnowAnimation";

export function Header() {
  return (
    <header className="relative w-full px-8 py-6">
      <SnowAnimation />
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={160} height={10} />
        </div>
        <div>
          ENG
        </div>
      </div>
    </header>
  )
}
