import React from "react";
import { Link } from "react-router-dom";

const SkillsSection: React.FC = () => {
    return (
        <section className="mx-auto flex flex-col md:flex-row items-center gap-8 px-[10%] py-12">
            <div className="w-full md:w-1/2">
                <img
                    src="/images/fc.jpg"
                    alt="Services Franchise Conseils Cameroun"
                    className="rounded-lg shadow-lg w-full object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="text-fcc-blue font-bold uppercase text-sm">
                    Nos Services
                </span>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70">
                    Expertise en <span className="text-fcc-blue">immigration</span>, <span className="">études</span> et <span className="">tourisme</span>
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                    Franchise Conseils Cameroun accompagne les étudiants, professionnels et voyageurs dans toutes leurs démarches :
                    études à l’international (Canada), immigration, visas, permis d’études, ainsi que conseils pour le tourisme.
                    Notre approche est personnalisée et professionnelle pour maximiser vos chances de réussite.
                </p>

                <div className="flex flex-col gap-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70">Conseil étudiant</span>
                            <span className="text-gray-900 font-semibold">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-fcc-red h-3 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70">Conseil immigration</span>
                            <span className="text-gray-900 font-semibold">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-fcc-red h-3 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70">Conseil touristique</span>
                            <span className="text-gray-900 font-semibold">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-fcc-red h-3 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <Link to={'/services/education-internationale'}>
                        <button className="group relative bg-fcc-blue hover:bg-fcc-red  text-white font-heading font-semibold py-4 px-10 rounded transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span className="relative z-10">En savoir plus</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-fcc-red to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
