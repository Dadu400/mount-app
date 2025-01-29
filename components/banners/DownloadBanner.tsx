import Image from 'next/image';

import Apple from '../../icons/appstore.svg';
import QR from '../../icons/qr.png';


function DownloadBanner() {
    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto py-20">
            <div className="bg-white/10 rounded-3xl p-12 backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to <span className="text-yellow-300">Conquer the Mountains</span>?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                    Download now and start planning your next exhilarating snow adventure.
                </p>
                <div className="flex flex-wrap justify-between items-baseline gap-4">
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
                    <Image src={QR} alt='qr-code' className='w-28 h-28 rounded-xl border-black border-2' />
                </div>
            </div>
        </section>
    );
}

export default DownloadBanner;