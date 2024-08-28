"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Добре дошли в Аверите Девин FC
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl lg:text-2xl font-medium mb-8 sm:mb-12 max-w-lg sm:max-w-xl lg:max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                >
                    Не губи надежда – аверите са насреща! Присъедини се към нас в нашето невероятно футболно приключение.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                >
                    <a
                        href="#whoweare"
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-red-600 rounded-full text-lg font-bold hover:bg-red-700 transition-colors duration-300"
                    >
                        Научи повече
                    </a>
                    <a
                        href="#canvas"
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-600 rounded-full text-lg font-bold hover:bg-gray-700 transition-colors duration-300"
                    >
                        Виж канава
                    </a>
                </motion.div>

                {/* Animation */}
                <motion.div
                    className="absolute bottom-6 sm:bottom-12 flex justify-center w-full"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <span className="text-white text-2xl sm:text-3xl">&#8595;</span>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
