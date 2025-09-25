import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
    const teamImage = "/images/teams.png";
    const successImage = "/images/travelTwo.png";

    const CheckCircleIcon = ({ className = "" }) => (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
            <div className="mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start px-[10%]">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="transition-all duration-500 animate-slideUp">
                            <span className="text-fcc-blue font-bold uppercase text-sm">
                                Qui sommes-nous ?
                            </span>
                            <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-6">
                                Expertise en <span className="text-fcc-blue">Éducation Internationale</span>, <span className="">Mobilité Économique</span> et <span className="text-fcc-green">Développement des Affaires</span>
                            </h2>

                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-8">
                                Franchise Conseils Cameroun fournit des solutions complètes et un accompagnement expert dans les domaines de l'éducation internationale, de la mobilité économique et du développement des affaires.
                                Nous aidons les étudiants et professionnels à atteindre leurs objectifs académiques et professionnels, notamment pour étudier au Canada.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-fcc-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 pt-2">Conseils personnalisés pour l'éducation internationale</span>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-fcc-red  rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 pt-2">Assistance pour visas et preuves financières</span>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-fcc-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 pt-2">Accompagnement pour l'admission universitaire et permis d'études</span>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-fcc-red rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 pt-2">Support pour logement et voyage</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <Link to={'/services/education-internationale'}>
                                <button className="group relative bg-fcc-blue hover:bg-fcc-red text-white font-heading font-semibold py-4 px-10 rounded transition-all duration-500 transform hover:scale-105 shadow-lg">
                                    <span className="relative z-10">DÉCOUVRIR NOS SERVICES</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-fcc-red to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative flex items-start">
                        <div className="w-full h-full min-h-[600px] relative group">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-white/70">
                                <img
                                    src={teamImage}
                                    alt="Notre équipe"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Image secondaire en bas à gauche */}
                            <div className="absolute bottom-6 left-6 w-40 h-40 rounded-2xl bg-white/70 overflow-hidden shadow-2xl border-4 border-white transform rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10">
                                <img
                                    src={successImage}
                                    alt="Réussites"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -inset-4 border-2 border-fcc-blue/20 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;