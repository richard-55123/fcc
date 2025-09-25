import { useEffect, useState } from "react";
import CarteEquipe from "./CarteEquipe";
import { FaUsers } from "react-icons/fa";
import { equipeData } from "../../data/equipeData";

const SectionEquipe = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 3) % equipeData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const visibleCards =
        equipeData.slice(activeIndex, activeIndex + 3).length === 3
            ? equipeData.slice(activeIndex, activeIndex + 3)
            : [
                ...equipeData.slice(activeIndex),
                ...equipeData.slice(0, 3 - (equipeData.length - activeIndex)),
            ];

    return (
        <>
            <div className="relative flex flex-col items-center text-center pt-12">
                <div
                    className="absolute inset-0 -z-10 opacity-10"
                    style={{
                        backgroundImage: "url('/fcc.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed"
                    }}
                ></div>

                <FaUsers className="absolute text-gray-200 text-[200px] -z-10" />
                <span className="text-fcc-blue font-medium">Notre équipe</span>
                <span className="w-12 h-[2px] bg-fcc-blue mt-2 mb-4"></span>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
                    Découvrez notre équipe
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl">
                    Des professionnels expérimentés dédiés à votre réussite
                </p>
            </div>
            <section className="py-12 relative">
                <div
                    className="absolute inset-0 -z-20 opacity-5"
                    style={{
                        backgroundImage: "url('/fcc.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>

                <div className="px-[10%] mx-auto py-12 overflow-hidden relative z-10">
                    <div key={activeIndex} className="grid md:grid-cols-3 gap-8 animate-fadeSlide">
                        {visibleCards.map((membre, index) => (
                            <CarteEquipe
                                key={index}
                                nom={membre.nom}
                                image={membre.image}
                                photo={membre.photo}
                                isActive
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-4 relative z-10">
                    {Array.from({ length: Math.ceil(equipeData.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 3) ? "bg-fcc-blue" : "bg-gray-300"
                                }`}
                            onClick={() => setActiveIndex(index * 3)}
                        ></button>
                    ))}
                </div>
            </section>
        </>

    );
};

export default SectionEquipe;