import Image from "next/image";

import Logo from "../../icons/logo.png";

function Footer() {
  return (
    <footer className="flex flex-col border-t border-white/20 mt-20 py-10">
      <div className="text-white/60 flex items-end justify-center gap-10 relative">
        <div className="flex">
          <p>© {new Date().getFullYear()} MOUNT. All rights reserved.</p>
        </div>
        <div className="flex flex-col justify-end absolute bottom-0 right-0 px-10">
          <Image src={Logo} alt="Mount Logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;