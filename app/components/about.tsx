"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUsSection: React.FC = () => {
    return (
        <section id="whoweare" className="relative bg-gray-50 py-20 px-4 lg:px-0">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        За нас
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    >
                        Присъедини се към нашия свят! Запознай се с историята на отбора и футболистите, сближи се с феновете и открий магията на Аверите Девин FC.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <div className="flex flex-col justify-center items-start space-y-8">
                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <img src="/illustrations/team_spirit.svg" alt="Team Spirit" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    История на отбора
                                </h3>
                                <p className="text-gray-600">
                                    Нашият клуб има дълга и вълнуваща история, изпълнена с победи и незабравими моменти. Виж как се развихме през годините и как изградихме сплотен отбор от таланти.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                            <img src="/illustrations/athlete.svg" alt="Athlete" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Животът на футболистите
                                </h3>
                                <p className="text-gray-600">
                                    Приближи се до живота на футболистите! Разбери как тренират, какво ги вдъхновява и как се подготвят за мачовете. Виж отблизо героите на терена.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <img src="/illustrations/brand_identity.svg" alt="Branding" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Спонсори и брандиране
                                </h3>
                                <p className="text-gray-600">
                                    Ние предлагаме отлични възможности за нашите спонсори – брандиране на стадиона, рекламни пространства и събития. Присъедини се към нас като партньор!
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-center items-start space-y-8">
                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <img src="/illustrations/community.svg" alt="Community" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Multiplayer за феновете
                                </h3>
                                <p className="text-gray-600">
                                    С нашата нова игра феновете могат да се сближат, като се състезават и играят заедно. Намери нови приятели и открий хора с общи интереси чрез multiplayer функционалността ни.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                            <img src="/illustrations/soccer_field.svg" alt="Soccer Field" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Организация на мачове
                                </h3>
                                <p className="text-gray-600">
                                    Организираме незабравими мачове с уникална атмосфера, вълнуващи моменти и пълни стадиони. Не пропускай следващия мач – бъди част от нашето събитие!
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <img src="/illustrations/contact_us.svg" alt="Contact Us" className="w-24 h-24" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Свържи се с нас
                                </h3>
                                <p className="text-gray-600">
                                    Искаш да научиш повече или да се включиш в нашите инициативи? Свържи се с нас и ние ще ти помогнем да станеш част от Аверите Девин FC.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
