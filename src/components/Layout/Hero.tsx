"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
    id: number;
    title: string;
    text: string;
    img: string;
    bg: string;
    layout: "left" | "right";
    button?: {
        text: string;
        link: string;
    };
}

const slides: Slide[] = [
    {
        id: 1,
        title: "ÉDUCATION INTERNATIONALE",
        text: "Chez Franchise Conseils Cameroun, nous sommes spécialisés dans l'accompagnement et le soutien complets des étudiants camerounais et étrangers souhaitant poursuivre leurs études au Canada.",
        img: "/images/education.jpg",
        bg: "/images/flags.png",
        layout: "left",
        button: {
            text: "Explorer nos programmes",
            link: "services/education-internationale"
        }
    },
    {
        id: 2,
        title: "DÉVELOPPEMENT DES AFFAIRES",
        text: "Nous nous engageons à aider les entreprises de toutes tailles et de tous secteurs à atteindre une croissance durable, à maximiser leur rentabilité et à exploiter pleinement leur potentiel. Grâce à notre gamme complète de services, notre expertise sectorielle et notre approche personnalisée, nous nous engageons à être votre partenaire de confiance sur la voie du succès.",
        img: "/images/develop.png",
        bg: "/images/flags.png",
        layout: "left",
        button: {
            text: "Découvrir nos solutions",
            link: "services/developpement-affaires"
        }
    },
    {
        id: 3,
        title: "MOBILITÉ ÉCONOMIQUE",
        text: "Nous nous engageons à donner à chacun les moyens de réaliser ses rêves de prospérité économique grâce à une éducation de qualité et à des opportunités professionnelles. Grâce à nos vastes connaissances, à notre accompagnement personnalisé et à notre solide réseau, nous sommes votre partenaire de confiance pour vous accompagner sur la voie de la réussite.",
        img: "/images/mobil.png",
        bg: "/images/flags.png",
        layout: "right",
        button: {
            text: "Atteindre la prospérité",
            link: "services/mobilite-economique"
        }
    },
    {
        id: 4,
        title: "ÉDUCATION INTERNATIONALE",
        text: "Chez Franchise Conseils Cameroun, nous sommes spécialisés dans l'accompagnement et le soutien complets des étudiants camerounais et étrangers souhaitant poursuivre leurs études au Canada.",
        img: "/images/education.jpg",
        bg: "/images/flags.png",
        layout: "left",
        button: {
            text: "Explorer nos programmes",
            link: "services/education-internationale"
        }
    },

];

function Hero() {
    const [current, setCurrent] = useState<number>(0);

    const nextSlide = (): void => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = (): void => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="relative h-[90vh] sm:h-[80vh] md:h-[90vh] overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    className="absolute inset-0 bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), url(${slides[current].bg})`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative z-10 mx-auto px-6 sm:px-12 md:px-[10%] w-full">
                        <div className={`flex flex-col-reverse md:flex-row items-center gap-y-10 md:gap-y-0 ${slides[current].layout === "right" ? "md:flex-row-reverse" : ""}`}>

                            <motion.div
                                className="relative flex justify-center md:w-1/2"
                                initial={{ x: slides[current].layout === "left" ? -100 : 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <div className="relative border-4 border-gray-300 transform hover:scale-105 transition-transform duration-700 shadow-card w-full max-w-md sm:max-w-lg md:max-w-full">
                                    <div className="absolute -top-3 -left-3 w-5 h-5 bg-primary"></div>
                                    <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-primary"></div>
                                    <div className="absolute -top-3 -right-3 w-5 h-5 bg-primary"></div>
                                    <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-primary"></div>

                                    <motion.div
                                        className="absolute -inset-4 border-2 border-primary opacity-50"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />

                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute inset-0 bg-white/60 z-0"></div>
                                        <img
                                            src={slides[current].img}
                                            alt="Traveler"
                                            className="max-h-[320px] sm:max-h-[400px] md:max-h-[420px] w-full object-contain relative z-10"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-white space-y-6 md:w-1/2 md:pl-10 text-center md:text-left"
                                initial={{ x: slides[current].layout === "left" ? 100 : -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <motion.span
                                    className="block w-12 h-[2px] bg-primary mb-4 mx-auto md:mx-0"
                                    initial={{ width: 0 }}
                                    animate={{ width: 48 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                />
                                <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-heading font-bold leading-tight md:leading-[1.2]">
                                    {slides[current].title.split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.9 + (i * 0.1) }}
                                            className="inline-block mr-1 sm:mr-2"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </h1>
                                <motion.p
                                    className="leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-gray-200 max-w-3xl mx-auto md:mx-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                    {slides[current].text}
                                </motion.p>
                                {slides[current].button && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.7 }}
                                    >
                                        <Link
                                            to={`/${slides[current].button.link}`}
                                            className="mt-4 bg-primary hover:bg-fcc-red transition text-white font-semibold px-6 py-3 rounded w-full md:w-auto relative overflow-hidden group inline-block"
                                        >
                                            <span className="relative z-10">{slides[current].button.text} →</span>
                                            <motion.span
                                                className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-8" : "bg-white bg-opacity-50"}`}
                    />
                ))}
            </div>

            <motion.button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 sm:p-5 rounded-md text-white hover:bg-primary transition z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.button>

            <motion.button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 sm:p-5 rounded-md text-white hover:bg-primary transition z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.button>

        </section>
    );
}

export default Hero;
