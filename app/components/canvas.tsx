"use client";
import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CanvasSection: React.FC = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleFullScreen = useCallback(() => {
        if (imageRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            } else if ((imageRef.current as any).webkitRequestFullscreen) {
                (imageRef.current as any).webkitRequestFullscreen();
            } else if ((imageRef.current as any).msRequestFullscreen) {
                (imageRef.current as any).msRequestFullscreen();
            }
        }
    }, [imageRef]);

    return (
        <section
            id="canvas"
            ref={sectionRef}
            className="relative bg-gradient-to-r from-gray-50 to-gray-200 py-20 px-4 lg:px-0"
            aria-label="Canvas Section"
        >
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Нашата Канава
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : undefined}
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
                        animate={sectionInView ? { opacity: 1, scale: 1 } : undefined}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        onClick={handleFullScreen}
                        aria-label="Click to fullscreen"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleFullScreen()}
                    >
                        <div className="relative shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="/canvas-1.png"
                                alt="Канава изображение на клубна организация"
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