import type { FC } from "react";
import {
    FaHome,
    FaUniversity,
    FaPlane,
    FaPassport,
    FaMoneyCheckAlt,
    FaUserGraduate,
} from "react-icons/fa";

const WhyChooseUs: FC = () => {
    const services = [
        {
            icon: <FaUserGraduate size={40} className="text-blue-500" />,
            title: "Orientation en éducation et en carrière",
            text: "Nous vous aidons à choisir le parcours académique et professionnel le plus adapté à vos objectifs.",
        },
        {
            icon: <FaMoneyCheckAlt size={40} className="text-blue-500" />,
            title: "Aide à la preuve de soutien financier",
            text: "Accompagnement dans la préparation et la présentation des documents financiers requis.",
        },
        {
            icon: <FaPassport size={40} className="text-blue-500" />,
            title: "Assistance visa",
            text: "Un suivi personnalisé pour constituer et déposer vos demandes de visa en toute sérénité.",
        },
        {
            icon: <FaPlane size={40} className="text-blue-500" />,
            title: "Assistance voyage",
            text: "Organisation et conseils pratiques pour un voyage sans tracas, de la réservation aux formalités.",
        },
        {
            icon: <FaUniversity size={40} className="text-blue-500" />,
            title: "Admissions universitaires et permis d'études",
            text: "Guidance complète dans vos démarches d’admission et d’obtention du permis d’études.",
        },
        {
            icon: <FaHome size={40} className="text-blue-500" />,
            title: "Dispositions d'hébergement",
            text: "Aide à trouver un logement adapté et sécurisé pour faciliter votre installation.",
        },
    ];

    return (
        <section className="relative bg-[#1b1b23] text-white py-12 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/images/blanc.jpg"
                    alt="background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="relative px-[10%] mx-auto px-6 text-center">
                <h3 className="text-gray-400 text-lg uppercase tracking-wide mb-3">
                    Pourquoi nous choisir ?
                </h3>

                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] mb-14 leading-snug">
                    Des services sur mesure <br />
                    <span className="text-blue-400">adaptés à vos besoins</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl border border-gray-700 bg-[#222232]/80 
                         shadow-md hover:shadow-fcc-red transition-all duration-300 
                         hover:-translate-y-2 hover:bg-[#2a2a3a]/90 cursor-pointer relative z-10"
                        >
                            <div className="flex justify-center mb-5">{item.icon}</div>
                            <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold  mb-3">{item.title}</h4>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-14 text-gray-300 text-base md:text-lg relative z-10">
                    Obtenez votre visa en ligne rapidement et bénéficiez d’une{" "}
                    <span className="font-bold italic text-fcc-red">
                        réduction de 30%
                    </span>{" "}
                    sur votre premier traitement de dossier.
                </p>
            </div>
        </section>
    );
};

export default WhyChooseUs;
