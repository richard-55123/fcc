import { FiSearch, FiShield, FiTarget } from "react-icons/fi"
import Banner from "../components/Ux/banner"
import { FaChartLine, FaUsers, FaLightbulb, FaRocket, FaHandshake, FaCog, FaSync, FaExpand, FaPiggyBank, FaAward, FaHeadset } from "react-icons/fa"
import TestimonialsSection from "../components/Sections/TestimonialsSection"
import LogoCarousel from "../components/Sections/LogoCarousel"

const DeveloppementAffaires: React.FC = () => {
    const services = [
        {
            icon: FiTarget,
            title: "Études et analyses de marché",
            description: "Nous proposons des études et analyses de marché approfondies pour vous aider à mieux comprendre votre marché cible, à identifier les tendances émergentes et à évaluer l'environnement concurrentiel. Nos analystes experts collectent et interprètent les données de marché pour vous fournir des informations précieuses qui éclaireront vos stratégies et vos décisions commerciales.",
            features: ["Analyse de marché", "Positionnement concurrentiel", "Feuille de route stratégique"],
            image: "/images/Market-Research-and-Analysis.jpg"
        },
        {
            icon: FaExpand,
            title: "Planification et stratégie d'entreprise",
            description: "Nos consultants expérimentés travaillent en étroite collaboration avec vous pour élaborer des plans d'affaires et des stratégies complets, adaptés à vos objectifs et défis spécifiques. Nous vous aidons à définir votre vision, votre mission et vos valeurs fondamentales, ainsi qu'à fixer des objectifs réalistes et à établir des plans d'action concrets pour les atteindre.",
            features: ["Étude de faisabilité", "Plan d'expansion", "Implémentation terrain"],
            image: "/images/renam.png"
        },
        {
            icon: FaCog,
            title: "Gestion financière",
            description: "Une gestion financière efficace est essentielle à la réussite d'une entreprise. Nous proposons notre expertise en planification financière, budgétisation, prévisions et gestion de trésorerie. Nos consultants vous accompagnent pour optimiser vos performances financières, améliorer votre rentabilité et prendre des décisions d'investissement éclairées, alignées sur vos objectifs commerciaux.",
            features: ["Processus optimisés", "Réduction des coûts", "Amélioration continue"],
            image: "/images/Financial-Management.jpg"
        },
        {
            icon: FaUsers,
            title: "Marketing et image de marque",
            description: "Construire une marque forte et mettre en œuvre des stratégies marketing efficaces sont essentiels à la croissance de votre entreprise. Notre équipe d'experts en marketing vous aide à développer des identités de marque percutantes, à créer des campagnes marketing percutantes et à exploiter les plateformes numériques pour atteindre et engager votre public cible. Nous vous accompagnons dans la création de messages qui résonnent auprès de vos clients et vous démarquent de la concurrence.",
            features: ["Stratégie commerciale", "Formation équipe", "Suivi performance"],
            image: "/images/Marketing-and-Branding.jpeg"
        },
        {
            icon: FaUsers,
            title: "Ventes et développement des affaires",
            description: "Nous vous accompagnons dans l'élaboration de stratégies commerciales, l'amélioration des processus de gestion de la relation client et la mise en œuvre de techniques de vente efficaces. Nos consultants vous aident à identifier de nouvelles opportunités commerciales, à nouer des partenariats stratégiques et à élargir votre clientèle. Nous formons et accompagnons votre équipe commerciale pour optimiser ses performances et stimuler la croissance de son chiffre d'affaires.",
            features: ["Stratégie commerciale", "Formation équipe", "Suivi performance"],
            image: "/images/Sales-and-Business-Development.jpg"
        },
        {
            icon: FaUsers,
            title: "Efficacité opérationnelle",
            description: "Rationaliser vos opérations et améliorer votre efficacité sont essentiels à une croissance durable. Nos consultants évaluent vos processus actuels, identifient les goulots d'étranglement et recommandent des solutions pour optimiser la productivité et réduire les coûts. Nous vous accompagnons dans la mise en œuvre des meilleures pratiques, l'exploitation optimale des technologies et le développement d'une culture d'amélioration continue.",
            features: ["Stratégie commerciale", "Formation équipe", "Suivi performance"],
            image: "/images/Operational-Efficiency.jpg"
        }
    ]

    const methodologies = [
        {
            step: "01",
            title: "Diagnostic Complet",
            description: "Analyse approfondie de votre entreprise et de son environnement",
            details: ["Audit organisationnel", "Analy SWOT", "Benchmark concurrentiel"],
            icon: FiSearch
        },
        {
            step: "02",
            title: "Stratégie Sur Mesure",
            description: "Élaboration d'un plan d'action personnalisé et réalisable",
            details: ["Objectifs SMART", "Planification tactique", "Indicateurs de performance"],
            icon: FiTarget
        },
        {
            step: "03",
            title: "Implémentation Accompagnée",
            description: "Mise en œuvre concrète avec un soutien permanent",
            details: ["Gestion de projet", "Formation équipes", "Ajustements en temps réel"],
            icon: FaRocket
        },
        {
            step: "04",
            title: "Suivi et Optimisation",
            description: "Mesure des résultats et amélioration continue",
            details: ["Reporting régulier", "Analyse performance", "Optimisations stratégiques"],
            icon: FaChartLine
        }
    ]

    const benefits = [
        {
            icon: FaRocket,
            title: "Croissance Accélérée",
            description: "Multipliez votre croissance avec des stratégies éprouvées"
        },
        {
            icon: FiShield,
            title: "Risques Maîtrisés",
            description: "Minimisez les risques grâce à notre expertise terrain"
        },
        {
            icon: FaPiggyBank,
            title: "Rentabilité Améliorée",
            description: "Optimisez votre marge bénéficiaire rapidement"
        },
        {
            icon: FaAward,
            title: "Avantage Concurrentiel",
            description: "Développez un avantage durable sur vos concurrents"
        }
    ]
    const expertFeatures = [
        {
            icon: FaHeadset,
            title: "Accompagnement Personnalisé",
            description: "Un expert dédié à vos côtés tout au long du processus"
        },
        {
            icon: FaSync,
            title: "Approche Agile",
            description: "Méthodologie flexible adaptée à vos besoins spécifiques"
        },
        {
            icon: FaLightbulb,
            title: "Solutions Innovantes",
            description: "Approches créatives pour des défis complexes"
        },
        {
            icon: FaHandshake,
            title: "Réseau Partenaires",
            description: "Accès à notre écosystème d'experts et partenaires"
        }
    ]

    return (
        <>
            <Banner
                title="DÉVELOPPEMENT DES AFFAIRES"
                backgroundImage="/images/applicationVisa.png"
                overlay={true}
                height="medium"
                breadcrumbs={[
                    { label: "HOME", path: "/" },
                    { label: "DÉVELOPPEMENT DES AFFAIRES", path: "" },
                ]}
            />



            {/* Section Services */}
            <section className="py-12 bg-white px-[10%]">
                <div className="text-center mb-16">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-4">
                        Nos Domaines d'Expertise
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                        Des solutions complètes pour chaque aspect de votre développement d'affaires
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl shadow-card hover:shadow-bold transition-all duration-500 overflow-hidden">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                    <service.icon className="w-7 h-7 text-fcc-blue" />
                                </div>
                                <h3 className="absolute bottom-6 left-6 text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="p-8">
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Méthodologie */}
            <section className="py-12 bg-gray-50 px-[10%]">
                <div className="text-center mb-16">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-4">
                        Notre Méthodologie Éprouvée
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                        Une approche structurée pour garantir votre réussite
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-fcc-blue to-fcc-red hidden lg:block" />

                    {methodologies.map((method, index) => (
                        <div key={index} className="relative bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-fcc-blue to-fcc-red text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                {method.step}
                            </div>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <method.icon className="w-8 h-8 text-fcc-blue" />
                            </div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-4 text-center">
                                {method.title}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70 mb-6 text-center">
                                {method.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Bénéfices */}
            <section className="py-12 bg-white px-[10%]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-6">
                            Les Avantages de Notre Expertise
                        </h2>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70 mb-8">
                            Notre approche combine l'expérience terrain et les meilleures pratiques
                            pour vous offrir des résultats exceptionnels.
                        </p>

                        <div className="grid gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-fcc-blue to-fcc-red rounded-lg flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-3xl">
                            <img
                                src="/images/dev.png"
                                alt="Expertise en développement d'affaires"
                                className="rounded-2xl shadow-soft w-full h-auto"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-card">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-fcc-blue mb-2">15+</div>
                                <div className="text-gray-600 font-sans">Années d'Expertise</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Expertise */}
            <section className="py-12 bg-white px-[10%]">
                <div className="text-center mb-16">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70 mb-4">
                        Pourquoi Choisir Notre Expertise ?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertFeatures.map((feature, index) => (
                        <div key={index} className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-fcc-blue to-fcc-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70 mb-4">
                                {feature.title}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto text-black/70">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <TestimonialsSection />
            <LogoCarousel />
        </>
    )
}

export default DeveloppementAffaires