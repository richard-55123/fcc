import LogoCarousel from "../components/Sections/LogoCarousel"
import TestimonialsSection from "../components/Sections/TestimonialsSection"
import Banner from "../components/Ux/banner"
import { FaGlobeAmericas, FaChartLine, FaUsers, FaLightbulb, FaCheckCircle, FaHandHoldingUsd, FaShieldAlt, FaRocket } from "react-icons/fa"

const MobiliteEconomique: React.FC = () => {
    const advantages = [
        {
            icon: FaHandHoldingUsd,
            title: "Conseil en éducation",
            description: "Nous comprenons que l'éducation est la clé de la mobilité économique. Nos consultants expérimentés vous accompagnent dans le choix des programmes et des établissements d'enseignement les plus adaptés à vos objectifs de carrière. Que vous souhaitiez poursuivre des études de premier cycle, obtenir une certification professionnelle ou un diplôme d'études supérieures, nous vous aiderons à prendre des décisions éclairées pour vous mettre sur la voie de la réussite.",
            image: "/images/Education-Advisor.jpg"
        },
        {
            icon: FaShieldAlt,
            title: "Développement de carrière",
            description: "Chez Franchise Conseils Cameroun, nous allons au-delà de la formation. Notre équipe d'experts vous propose des conseils et un accompagnement de carrière pour vous aider à identifier vos points forts, explorer vos opportunités et élaborer une feuille de route pour votre développement professionnel. Nous vous offrons des informations précieuses sur le marché du travail, les tendances du secteur et les stratégies de réseautage, vous permettant ainsi de faire des choix de carrière stratégiques.",
            image: "/images/Career-Development.jpg"
        },
        {
            icon: FaRocket,
            title: "Aide à l'immigration",
            description: "Nous comprenons que les opportunités internationales jouent un rôle essentiel dans la mobilité économique. Nos spécialistes en immigration maîtrisent parfaitement les subtilités du processus d'immigration et peuvent vous accompagner dans vos démarches de demande de visa, de permis de travail et d'installation. Nous assurons une transition en douceur et vous offrons un soutien continu pour vous aider à vous établir dans votre nouvelle destination.",
            image: "/images/Immigration-Assistance-to-canada.jpg"
        },
        {
            icon: FaUsers,
            title: "Soutien à l'entrepreneuriat",
            description: "Nous sommes convaincus que l'entrepreneuriat est un puissant levier de mobilité économique. Notre équipe propose des conseils et un mentorat personnalisés aux entrepreneurs en herbe, en les mettant en relation avec des experts du secteur et en les guidant sur la planification d'entreprise, les opportunités de financement et les stratégies d'entrée sur le marché. Nous nous engageons à vous aider à concrétiser votre vision entrepreneuriale.",
            image: "/images/Entrepreneurship-Support.jpg"
        },
        {
            icon: FaUsers,
            title: "Planification d'entreprise",
            description: "Nos consultants travaillent en étroite collaboration avec vous pour élaborer un plan d'affaires complet, incluant une étude de marché, des projections financières et des stratégies marketing. Nous vous accompagnons sur les exigences légales, les procédures d'enregistrement et l'obtention des licences d'exploitation, vous assurant ainsi une base solide pour votre projet.",
            image: "/images/Mentorship-and-Networking.jpg"
        },
        {
            icon: FaUsers,
            title: "Mentorat et réseautage",
            description: "Notre vaste réseau d'experts du secteur et d'entrepreneurs à succès nous permet de vous mettre en relation avec des mentors capables de vous apporter un soutien précieux. Nous facilitons également le networking, vous permettant ainsi d'entrer en contact avec des personnes partageant les mêmes idées et des partenaires commerciaux potentiels.",
            image: "/images/mobilite.jpg"
        }
    ]

    const steps = [
        {
            number: "01",
            title: "Évaluation du Potentiel",
            description: "Analyse approfondie de votre situation économique actuelle et future",
            icon: FaUsers
        },
        {
            number: "02",
            title: "Stratégie Personnalisée",
            description: "Élaboration d'un plan concret pour atteindre vos objectifs de prospérité",
            icon: FaCheckCircle
        },
        {
            number: "03",
            title: "Mise en Œuvre",
            description: "Accompagnement dans la réalisation de votre projet économique",
            icon: FaChartLine
        },
        {
            number: "04",
            title: "Suivi et Optimisation",
            description: "Ajustement continu pour maximiser vos résultats",
            icon: FaGlobeAmericas
        }
    ]

    const statistics = [
        { number: "95%", label: "Clients Satisfaits", icon: FaCheckCircle },
        { number: "50M+", label: "Richesse Créée", icon: FaHandHoldingUsd },
        { number: "10k+", label: "Vies Transformées", icon: FaUsers },
        { number: "15", label: "Années d'Expertise", icon: FaChartLine }
    ]

    const features = [
        {
            icon: FaCheckCircle,
            text: "Accompagnement personnalisé vers la prospérité économique"
        },
        {
            icon: FaCheckCircle,
            text: "Stratégies éprouvées de création de richesse"
        },
        {
            icon: FaCheckCircle,
            text: "Réseau d'opportunités économiques exclusives"
        },
        {
            icon: FaCheckCircle,
            text: "Formation continue en développement économique"
        },
        {
            icon: FaCheckCircle,
            text: "Accès à des outils innovants de gestion financière"
        },
        {
            icon: FaCheckCircle,
            text: "Mentorat par des experts en réussite économique"
        }
    ]

    return (
        <>
            <Banner
                title="MOBILITÉ ÉCONOMIQUE"
                backgroundImage="/images/mobilite.jpg"
                overlay={true}
                height="medium"
                breadcrumbs={[
                    { label: "HOME", path: "/" },
                    { label: "MOBILITÉ ÉCONOMIQUE", path: "" },
                ]}
                subtitle="Votre passerelle vers la prospérité économique durable"
            />

            {/* Section Introduction */}
            <section className="py-12 bg-white px-[10%]">
                <div className="max-w-4xl mx-auto text-center animate-fadeIn">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-6">
                        Réalisez Vos Rêves de Prospérité Économique
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                        Chez Franchise Conseil Cameroun, nous nous engageons à donner à chacun les moyens de réaliser
                        ses ambitions économiques grâce à un accompagnement personnalisé et des opportunités concrètes.
                        Notre expertise, notre réseau solide et notre méthodologie éprouvée font de nous votre partenaire
                        de confiance pour votre ascension économique.
                    </p>
                </div>
            </section>

            {/* Section Avantages avec images */}
            <section className="py-12 bg-gray-50 px-[10%]">
                <div className="text-center mb-12">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-4">
                        Les Piliers de Notre Approche
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                        Une méthodologie complète pour votre réussite économique
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-bold transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={advantage.image}
                                    alt={advantage.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <advantage.icon className="w-6 h-6 text-fcc-blue" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2">
                                    {advantage.title}
                                </h3>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                    {advantage.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Fonctionnalités */}
            <section className="py-12 bg-white px-[10%]">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slideUp">
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-6">
                            Notre Engagement Concret
                        </h2>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70 mb-8">
                            Nous mettons à votre disposition tous les outils nécessaires pour votre mobilité économique ascendante
                        </p>
                        <div className="grid gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    <feature.icon className="w-5 h-5 text-fcc-blue flex-shrink-0" />
                                    <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl  text-black/70">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="animate-slideDown">
                        <div className="bg-gradient-to-br from-fcc-blue/10 to-fcc-red/10 p-8 rounded-3xl">
                            <div className="bg-white p-8 rounded-2xl shadow-soft">
                                <div className="w-16 h-16 bg-fcc-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <FaLightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-4 text-center">Notre Différence</h3>
                                <p className="mb-6 text-center leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                    Grâce à nos vastes connaissances, notre accompagnement sur mesure et notre réseau solide,
                                    nous vous accompagnons pas à pas vers la réalisation de vos objectifs économiques.
                                </p>
                                <div className="flex items-center justify-center gap-2 bg-fcc-blue/10 p-3 rounded-lg">
                                    <FaCheckCircle className="w-5 h-5 text-fcc-blue" />
                                    <span className="font-semibold text-fcc-blue font-sans">Résultats tangibles garantis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Processus */}
            <section className="py-12 bg-gray-50 px-[10%]">
                <div className="text-center mb-12">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-4">
                        Notre Méthodologie en 4 Étapes
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                        Un parcours structuré pour votre réussite économique
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-fcc-blue/20 hidden lg:block" />
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center z-10 bg-white p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-fcc-blue to-fcc-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-fcc-blue absolute -top-4 left-1/2 transform -translate-x-1/2 border-2 border-fcc-blue/20">
                                {step.number}
                            </div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2">
                                {step.title}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Statistiques */}
            <section className="py-16 bg-gradient-to-r from-fcc-blue to-fcc-red text-white px-[10%]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center animate-fadeIn">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg opacity-90 font-sans">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
           <TestimonialsSection/>
           <LogoCarousel/>
        </>
    )
}

export default MobiliteEconomique