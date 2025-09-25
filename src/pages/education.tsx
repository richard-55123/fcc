import LogoCarousel from "../components/Sections/LogoCarousel"
import TestimonialsSection from "../components/Sections/TestimonialsSection"
import Banner from "../components/Ux/banner"
import { Globe, Users, BookOpen, Target, Star, MapPin, FileText, Home } from "lucide-react"

const EducationInternationnal: React.FC = () => {
    return (
        <>

            <Banner
                title="ÉDUCATION INTERNATIONALE"
                backgroundImage="/images/education.jpg"
                overlay={true}
                height="medium"
                breadcrumbs={[
                    { label: "HOME", path: "/" },
                    { label: "ÉDUCATION INTERNATIONALE", path: "" },
                ]}
            />

            <section className="py-12 bg-white">
                <div className="px-[10%]">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slideUp">
                            <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-6">
                                Excellence en Éducation Internationale
                            </h2>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70 mb-6">
                                Chez Franchise Conseils Cameroun, nous sommes spécialisés dans l'accompagnement et le soutien complets des étudiants camerounais et étrangers souhaitant poursuivre leurs études au Canada. Grâce à notre expertise et à notre approche personnalisée, nous nous efforçons de rendre le processus d'études au Canada fluide, réussi et véritablement transformateur.

                                Embarquez pour un parcours éducatif passionnant au Canada avec le soutien de Franchise Conseils Cameroun. Notre équipe dévouée est prête à vous accompagner à chaque étape pour que vos études au Canada soient enrichissantes et réussies.
                            </p>
                            <div className="bg-fcc-red text-white p-6 rounded-xl shadow-bold">
                                <p className="text-xl font-serif italic">
                                    "Le Canada est largement reconnu comme une destination de choix pour les étudiants internationaux grâce à son système d'éducation exceptionnel, sa société multiculturelle et son environnement accueillant. Voici quelques arguments convaincants pour choisir le Canada pour vos études internationales."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/etudes.jpg"
                                alt="Étudiants internationaux"
                                className="w-full h-96 object-cover rounded-2xl shadow-card animate-fadeIn"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-fcc-blue text-white p-4 rounded-xl shadow-bold">
                                <div className="flex items-center space-x-2">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="font-semibold">30+ Étudiants Placés</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-fcc-blue to-fcc-red text-white">
                <div className="px-[10%]">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "200+", label: "Universités" },
                            { number: "98%", label: "Taux de Réussite" },
                            { number: "15+", label: "Ans d'Expérience" }
                        ].map((stat, index) => (
                            <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="text-4xl font-heading font-bold mb-2">{stat.number}</div>
                                <div className="text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="px-[5%] lg:px-[10%]">
                    <div className="text-center mb-16">
                        <h2 className="text-[2rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-4">
                            Nos Services Complets
                        </h2>
                        <p className="leading-relaxed text-[1rem] md:text-[1.1rem] max-w-3xl mx-auto text-black/70">
                            Un accompagnement sur mesure de A à Z pour votre réussite éducative à l'international
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Sélection du programme et de l'établissement",
                                description: "Analyse approfondie de votre profil académique et recommandations personnalisées des meilleures universités et programmes adaptés à vos objectifs.",
                                image: "/images/orientation.jpg",
                                bgColor: "bg-fcc-blue"
                            },
                            {
                                icon: <BookOpen className="w-8 h-8" />,
                                title: "Prparation académique et linguistique",
                                description: "Programmes de mise à niveau, cours de langue intensifs et préparation aux tests (TOEFL, IELTS, etc.) pour maximiser vos chances d'admission.",
                                image: "/images/preparation.jpg",
                                bgColor: "bg-fcc-blue"
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Assistance aux démarches d'admission",
                                description: "Gestion complète de votre dossier : rédaction de lettres de motivation, préparation CV, suivi des deadlines et coordination avec les établissements.",
                                image: "/images/admission.jpg",
                                bgColor: "bg-fcc-red"
                            },
                            {
                                icon: <MapPin className="w-8 h-8" />,
                                title: "Assistance visa et immigration",
                                description: "Accompagnement personnalisé dans toutes les démarches administratives : dossier de visa, rendez-vous consulaires et préparation aux entretiens.",
                                image: "/images/visa.jpg",
                                bgColor: "bg-fcc-red"
                            },
                            {
                                icon: <Home className="w-8 h-8" />,
                                title: "Hébergement et logistique",
                                description: "Recherche et réservation de logement, organisation du transport, assurance santé et préparation à votre installation à l'étranger.",
                                image: "/images/logement.jpg",
                                bgColor: "bg-fcc-green"
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Intégration et suivi continu",
                                description: "Support à l'arrivée, aide à l'intégration culturelle et suivi académique régulier tout au long de votre parcours à l'étranger.",
                                image: "/images/suivi.jpg",
                                bgColor: "bg-fcc-green"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden group h-full flex flex-col">
                                <div className="p-6 flex-grow">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2 leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="px-[10%]">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 text-center  mb-16">
                        Votre Parcours vers la Réussite
                    </h2>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-fcc-blue transform -translate-x-1/2 hidden lg:block"></div>

                        <div className="space-y-12 lg:space-y-0">
                            {[
                                {
                                    step: "01",
                                    title: "Excellence académique",
                                    description: "Les établissements canadiens, comme le Collège Niagara et le Collège Centennial, sont réputés pour leurs normes académiques élevées et la qualité de leurs programmes. Grâce à un large éventail de disciplines et de cours, vous trouverez l'établissement idéal pour vos objectifs scolaires et professionnels.",
                                    icon: <Target className="w-6 h-6" />,
                                    image: "/images/excellence.png"
                                },
                                {
                                    step: "02",
                                    title: "Expérience multiculturelle",
                                    description: "Étudier au Canada offre une occasion unique de vous immerger dans un environnement diversifié et inclusif. Vous aurez l'occasion d'interagir avec des étudiants de cultures différentes, favorisant ainsi des liens internationaux et des amitiés durables.",
                                    icon: <BookOpen className="w-6 h-6" />,
                                    image: "/images/experience.png"
                                },
                                {
                                    step: "03",
                                    title: "Opportunités post-diplôme",
                                    description: "Le Canada offre d'excellentes options de permis de travail post-diplôme, vous permettant d'acquérir une précieuse expérience professionnelle dans votre domaine d'études après avoir terminé votre programme. Cela peut vous ouvrir des portes vers des carrières passionnantes et même vers la résidence permanente.",
                                    icon: <Users className="w-6 h-6" />,
                                    image: "/images/diplome.png"
                                },
                                {
                                    step: "04",
                                    title: "Environnement accueillant",
                                    description: "Le Canada est reconnu pour son atmosphère sécuritaire et accueillante. En tant qu'étudiant international, vous vous sentirez soutenu et accueilli par la chaleureuse communauté canadienne tout en profitant d'une excellente qualité de vie.",
                                    icon: <MapPin className="w-6 h-6" />,
                                    image: "/images/environnememt.png"
                                }
                            ].map((step, index) => (
                                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-bold transition-all duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-fcc-blue rounded-full flex items-center justify-center text-white mr-4">
                                                    {step.icon}
                                                </div>
                                                <span className="text-2xl font-heading font-bold text-gray-400">{step.step}</span>
                                            </div>
                                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">{step.description}</p>
                                        </div>
                                    </div>

                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-fcc-red rounded-full border-4 border-white shadow-bold hidden lg:block"></div>

                                    <div className="lg:w-1/2">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-64 object-cover rounded-2xl shadow-soft"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <LogoCarousel />
        </>
    )
}

export default EducationInternationnal