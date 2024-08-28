"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const CanvasSection: React.FC = () => {
    const imageRef = useRef<HTMLDivElement>(null);

    const handleFullScreen = () => {
        if (imageRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section id="canvas" className="relative bg-gradient-to-r from-gray-50 to-gray-200 py-20 px-4 lg:px-0">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Нашата Канава
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    >
                        Разгледай нашата канава и виж как работим, планираме и организираме всичко, свързано с клуба. Добре дошли в света на Аверите Девин FC!
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        ref={imageRef}
                        className="w-full lg:w-4/5 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        onClick={handleFullScreen}
                    >
                        <div className="relative shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="/canvas.png"
                                alt="Канава"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CanvasSection;