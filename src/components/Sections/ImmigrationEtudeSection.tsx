import React from "react";
import { Link } from "react-router-dom";

interface ServiceItem {
    id: number;
    text: string;
}

const ImmigrationSection: React.FC = () => {
    const services: ServiceItem[] = [
        {
            id: 1,
            text: "Orientation et accompagnement pour études au Canada"
        },
        {
            id: 2,
            text: "Conseil en mobilité économique et développement des affaires"
        },
        {
            id: 3,
            text: "Assistance pour les démarches administratives et visas"
        },
        {
            id: 4,
            text: "Conseil stratégique aux établissements d'enseignement"
        }
    ];

    return (
        <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 xl:px-[10%] overflow-hidden">
            <div
                className="absolute -top-20 -right-20 w-64 h-64 bg-fcc-blue/5 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-fcc-red/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">

                <div className="relative flex-1 w-full">
                    <div
                        className="absolute -left-10 lg:-left-20 top-5 lg:top-10 h-[110%] w-[85%] lg:w-[80%] bg-gradient-to-br from-fcc-blue/20 to-fcc-blue/5 -z-0 hidden lg:block border-2 border-fcc-blue/30"
                        style={{
                            borderRadius: "180px 35px 180px 25px",
                            transform: "rotate(-2deg)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative w-full h-full flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">

                            <img
                                src="/images/canada-transformed.jpeg"
                                alt="Étudier au Canada - paysage urbain moderne avec des opportunités d'éducation"
                                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                                width={600}
                                height={400}
                            />

                            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-2/3 lg:w-3/5">
                                <div className="relative">
                                    <img
                                        src="/images/Immigration-Assistance-to-canada.jpg"
                                        alt="Accompagnement étudiant - consultation et support éducatif"
                                        className="w-full h-auto rounded-xl shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105"
                                        loading="lazy"
                                        width={400}
                                        height={300}
                                    />

                                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-fcc-blue to-fcc-blue/90 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-xl text-center shadow-2xl min-w-[100px] lg:min-w-[120px]">
                                        <p className="text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-sm">30+</p>
                                        <p className="leading-tight text-xs lg:text-sm font-medium text-white/95 mt-1">
                                            Étudiants accompagnés
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full flex flex-col justify-center space-y-6 lg:space-y-8">

                    <div>
                        <p className="uppercase text-gray-500 tracking-widest text-sm lg:text-base text-center lg:text-left font-semibold">
                            Éducation internationale & mobilité économique
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 text-center lg:text-left">
                            Étudier, travailler et développer vos projets{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcc-blue to-fcc-red">
                                au Canada et à l'international
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 text-center lg:text-left">
                            Vous envisagez d'étudier à l'étranger mais vous ne savez pas par où commencer ?
                            Nous comprenons l'importance d'une éducation de qualité et les immenses opportunités qu'elle offre.
                        </p>

                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 text-center lg:text-left">
                            Notre équipe vous accompagne dans chaque étape : choix de l'établissement, admission,
                            démarches administratives et visa.
                        </p>

                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 text-center lg:text-left">
                            Nous conseillons également les institutions et entreprises dans leurs stratégies
                            de développement, d'internationalisation et de recrutement.
                        </p>
                    </div>

                    <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-2xl mx-auto lg:mx-0">
                            {services.map((service) => (
                                <li key={service.id} className="flex items-start group">
                                    <span className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border-2 border-fcc-blue text-fcc-blue mr-3 mt-1 flex-shrink-0 group-hover:bg-fcc-blue group-hover:text-white transition-colors duration-200">
                                        ✓
                                    </span>
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                                        {service.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-center lg:justify-start pt-4">
                        <Link to={'services/education-internationale'}>
                            <button
                                className="relative bg-gradient-to-r from-fcc-blue to-fcc-blue/90 hover:from-fcc-red hover:to-fcc-red/90 text-white font-semibold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                            >
                                <span className="relative z-10 flex items-center">
                                    En savoir plus
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-fcc-red to-fcc-red/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImmigrationSection;