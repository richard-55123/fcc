import { FaGlobe, FaAward, FaUsers, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="relative">
            <section
                className="relative bg-[#0B0B0B] py-20 px-[10%] overflow-hidden"
                style={{
                    backgroundImage: "url('/images/familiVoyage.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0B0B0B] z-0"></div>

                <h1
                    className="absolute top-10 left-0 text-[8rem] md:text-[12rem] font-extrabold text-white/5 uppercase tracking-widest select-none pointer-events-none z-0"
                    style={{ lineHeight: "0.8" }}
                >
                    CONSEILs
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <span className="uppercase text-fcc-blue font-semibold tracking-wide">
                            À propos de nous
                        </span>
                        <h2 className="mt-3 text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-white leading-tight">
                            Experts en immigration
                        </h2>

                        <div className="flex items-center gap-3 mt-6">
                            <FaGlobe className="text-fcc-blue text-2xl" />
                            <div>
                                <span className="block text-fcc-blue font-bold uppercase">
                                    Basé au Cameroun
                                </span>
                                <span className="block text-white font-medium text-lg">
                                    Conseils en immigration et développement d’entreprises
                                </span>
                            </div>
                        </div>

                        <p className="mt-6 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-white">
                            Franchise Conseils Cameroun est une société spécialisée dans le conseil en
                            immigration et le développement de réseaux de franchises. Nous aidons les
                            entreprises et les particuliers à naviguer les démarches administratives et à
                            réussir leur implantation ou expansion, avec des solutions personnalisées et
                            un accompagnement complet. Notre mission est de fournir des solutions complètes et des conseils d’experts dans les domaines de l’éducation internationale, de la mobilité économique et du développement des affaires.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3">
                                <FaAward className="text-fcc-blue text-xl" />
                                <span className="text-white">Expertise certifiée</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaUsers className="text-fcc-blue text-xl" />
                                <span className="text-white">Réseau étendu</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaChartLine className="text-fcc-blue text-xl" />
                                <span className="text-white">Croissance garantie</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaGlobe className="text-fcc-blue text-xl" />
                                <span className="text-white">Présence internationale</span>
                            </div>
                        </div>

                        <Link to={'/about'}>
                            <button className="mt-8 px-6 py-3 bg-fcc-blue text-white font-medium rounded-md shadow-md hover:scale-105 hover:bg-fcc-red transition-all duration-300">
                                En savoir plus →
                            </button>
                        </Link>
                    </div>

                    <div className="relative flex items-center justify-center group">
                        <div className="relative w-full max-w-lg">
                            <div className="absolute -inset-3 bg-gradient-to-r from-fcc-blue to-blue-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-tilt"></div>
                            <img
                                src="/images/familiVoyage.png"
                                alt="Réunion d'affaires Franchise Conseil Cameroun"
                                className="relative rounded-lg shadow-xl object-cover w-full h-auto"
                                style={{ minHeight: "400px" }}
                            />
                        </div>

                        <div className="absolute -top-8 right-0 bg-white shadow-lg p-6 rounded-md border-t-4 border-fcc-blue animate-pulse">
                            <div className="text-fcc-blue text-4xl font-bold">15+</div>
                            <div className="text-black font-semibold text-lg">
                                Ans d'expérience
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
