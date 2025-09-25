import type { FC, ReactNode } from "react";

interface VisaCardProps {
    number: string;
    title: string;
    description: string;
    icon: ReactNode;
    isActive?: boolean;
}

const VisaCard: FC<VisaCardProps> = ({ number, title, description, icon, isActive }) => {
    return (
        <div
            className={`relative flex flex-col items-start p-8 bg-gray-50 shadow-sm rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isActive ? "border-b-4 border-fcc-blue" : ""
                }`}
        >
            <div className="text-5xl text-fcc-blue mb-4">{icon}</div>

            <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-10 bg-red-600"></span>
                <span className="text-red-600 font-medium">{number}</span>
            </div>

            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2">
                {title}
            </h3>

            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-6">
                {description}
            </p>

            {/* <button
                className={`flex items-center gap-2 px-6 py-3 font-medium border border-gray-200 transition-all rounded-md ${isActive
                        ? "bg-fcc-blue text-white hover:bg-fcc-red"
                        : "bg-white text-black hover:bg-fcc-red hover:text-white"
                    }`}
            >
                Plus de détails →
            </button> */}
        </div>
    );
};

export default VisaCard;
