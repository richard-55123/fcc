import type { FC } from "react";

interface CarteEquipeProps {
    nom: string;
    image: string;
    photo: string;
    isActive?: boolean;
}

const CarteEquipe: FC<CarteEquipeProps> = ({ nom, image, photo, isActive }) => {
    return (
        <div
            className={`relative flex flex-col items-start bg-gray-50 shadow-sm rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isActive ? "border-b-4 border-fcc-blue" : "border-b-4 border-transparent"}`}
        >
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                <img
                    src={image}
                    alt={nom}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            <div className="p-6 relative w-full">
                <div className="absolute -top-6 right-4 w-10 h-10 rounded-full border-2 border-white shadow-md bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                        src={photo}
                        alt={`Photo ${nom}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2 pr-12">{nom}</h3>
            </div>
        </div>
    );
};

export default CarteEquipe;