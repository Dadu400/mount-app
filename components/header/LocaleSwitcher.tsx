"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

import GEO from "../../icons/geoflag.svg";
import USA from "../../icons/usaflag.svg";

const LocaleSwitcher = () => {
    const router = useRouter();
    const currentLocale = useLocale();
    const [isHovered, setIsHovered] = useState(false);

    const toggleLocale = () => {
        const newLocale = currentLocale === "en" ? "ka" : "en";
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
        router.refresh();
    };

    return (
        <div className="flex items-center px-2">
            <motion.button
                onClick={toggleLocale}
                className="relative w-20 h-10 rounded-full bg-white/30 backdrop-blur-md transition-colors duration-300 flex items-center px-1"
                aria-label="Toggle Language"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.div
                    className="absolute w-9 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                        x: currentLocale === "en" ? "0%" : "100%",
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    <Image
                        src={currentLocale === "en" ? GEO : USA}
                        alt="Flag"
                        width={24}
                        height={24}
                    />
                </motion.div>
            </motion.button>
        </div>
    );
};

export default LocaleSwitcher;
