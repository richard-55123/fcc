import type { FC } from "react";
import { Link } from "react-router-dom";

interface CarteServiceProps {
  titre: string;
  description: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  link: string
}

const CarteService: FC<CarteServiceProps> = ({
  titre,
  description,
  image,
  Icon,
  isActive,
  link
}) => {
  return (
    <div
      className={`relative flex flex-col items-start bg-gray-50 shadow-sm rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isActive ? "border-b-4 border-fcc-blue" : "border-b-4 border-transparent"
        }`}
    >
      <img src={image} alt={titre} className="w-full h-52 object-cover" />

      <div className="p-6 relative w-full">
        <div className="absolute -top-6 right-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border-2 border-fcc-blue">
          <Icon className="text-fcc-blue text-xl" />
        </div>

        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2">
          {titre}
        </h3>
        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-4">
          {description}
        </p>

        <Link
          to={link}
          className={`flex items-center justify-center px-6 py-2 font-medium rounded-md transition-all ${isActive
              ? "bg-fcc-blue text-white hover:bg-fcc-red"
              : "bg-white text-black border border-gray-200 hover:bg-fcc-red hover:text-white"
            }`}
        >
          Plus de détails →
        </Link>
      </div>
    </div>
  );
};

export default CarteService;
