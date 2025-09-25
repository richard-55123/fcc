import { useEffect, useState } from "react";
import CarteService from "./CarteService";
import { FaHandshake } from "react-icons/fa";
import { servicesData } from "../../data/services";

const SectionServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 3) % servicesData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const visibleCards =
        servicesData.slice(activeIndex, activeIndex + 3).length === 3
            ? servicesData.slice(activeIndex, activeIndex + 3)
            : [
                ...servicesData.slice(activeIndex),
                ...servicesData.slice(0, 3 - (servicesData.length - activeIndex)),
            ];

    return (
        <>
            <div className="relative flex flex-col items-center text-center pt-12">
                <FaHandshake className="absolute text-gray-200 text-[200px] -z-10" />
                <span className="text-fcc-blue font-medium">Nos Services</span>
                <span className="w-12 h-[2px] bg-fcc-blue mt-2 mb-4"></span>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
                    Découvrez nos offres
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl pt-4">Nous nous engageons à fournir des services complets adaptés à vos besoins spécifiques et à vous aider à atteindre vos objectifs. </p>

            </div>
            <section className="py-12">
                <div className="px-[10%] mx-auto py-4 overflow-hidden">
                    <div
                        key={activeIndex}
                        className="grid md:grid-cols-3 gap-8 animate-fadeSlide"
                    >
                        {visibleCards.map((service, index) => (
                            <CarteService
                                key={index}
                                titre={service.titre}
                                description={service.description}
                                image={service.image}
                                Icon={service.Icon}
                                isActive
                                link={service.link} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: Math.ceil(servicesData.length / 3) }).map(
                        (_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 3)
                                    ? "bg-fcc-blue"
                                    : "bg-gray-300"
                                    }`}
                                onClick={() => setActiveIndex(index * 3)}
                            ></button>
                        )
                    )}
                </div>
            </section>
        </>
    );
};

export default SectionServices;
