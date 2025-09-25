import { useEffect, useState } from "react";
import VisaCard from "./VisaCard";
import { visaData } from "../../data/visa";
import { FaPlane } from "react-icons/fa";



const VisaSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 3) % visaData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const visibleCards =
        visaData.slice(activeIndex, activeIndex + 3).length === 3
            ? visaData.slice(activeIndex, activeIndex + 3)
            : [
                ...visaData.slice(activeIndex),
                ...visaData.slice(0, 3 - (visaData.length - activeIndex)),
            ];

    return (
        <>
            <div className="relative flex flex-col items-center text-center pt-12">
                <FaPlane className="absolute text-gray-200 text-[200px]  -z-10" />
                <span className="text-fcc-blue font-medium">Catégories de Visa</span>
                <span className="w-12 h-[2px] bg-fcc-blue mt-2 mb-4"></span>

                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
                    Tous types de visa
                </h2>
            </div>

            <div className="px-[10%] mx-auto py-12 overflow-hidden">
                <div
                    key={activeIndex}
                    className="grid md:grid-cols-3 gap-6 animate-fadeSlide"
                >
                    {visibleCards.map((visa, index) => (
                        <VisaCard
                            key={index}
                            number={visa.number}
                            title={visa.title}
                            description={visa.description}
                            icon={visa.icon}
                            isActive
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: Math.ceil(visaData.length / 3) }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 3) ? "bg-fcc-blue" : "bg-gray-300"
                            }`}
                        onClick={() => setActiveIndex(index * 3)}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default VisaSection;
