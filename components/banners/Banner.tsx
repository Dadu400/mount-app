import Image from "next/image";
import Apple from "../../icons/appstore.svg";
import Google from "../../icons/playstore.svg";

export function Banner() {
    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto my-28">
            <div className="flex items-center">
                <div className="w-1/2 flex flex-col items-start gap-y-10">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Elevate Your <span className="text-yellow-300">Snow Days</span> to New Heights
                    </h1>
                    <p className="text-xl text-white/80">
                        Discover, book, and conquer the slopes with our all-in-one mountain companion app.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://apps.apple.com/ge/app/mountapp/id6466344143"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40"
                        >
                            <Image src={Apple} alt="Apple Store" />
                        </a>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40"
                        >
                            <Image src={Google} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="relative">
                    </div>
                </div>
            </div>
        </section>
    );
}
