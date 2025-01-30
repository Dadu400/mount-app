import Image from "next/image";

import Logo from "../../icons/logo.png";

function Footer() {
  return (
    <footer className="flex flex-col border-t border-white/20 mt-10 sm:mt-20 py-10">
      <div className="text-white/60 flex flex-col md:flex-row justify-center gap-10 relative mx-8">
        <div className="flex">
          <p className="text-sm">© {new Date().getFullYear()} MOUNT. All rights reserved.</p>
        </div>
        <div className="flex flex-col justify-end absolute bottom-0 right-0 md:px-10">
          <Image src={Logo} alt="Mount Logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;