import { FaGraduationCap, FaBriefcase, FaChartLine } from "react-icons/fa";

export const servicesData = [
    {
        titre: "Éducation Internationale",
        description:
            "Nous sommes spécialisés dans l'accompagnement des étudiants et des professionnels qui souhaitent poursuivre leurs études au Canada. Nous offrons une gamme de services pour assurer une transition harmonieuse et réussie.",
        image:
            "/images/etudiant.jpg",
        Icon: FaGraduationCap,
        link: 'services/education-internationale'
    },
    {
        titre: "Mobilité Économique",
        description:
            "Nous comprenons l'importance de la mobilité économique et de l'avancement professionnel. Nous proposons une gamme de services pour aider les individus à améliorer leurs perspectives et à réussir économiquement.",
        image:
            "/images/career-counseling.jpg",
        Icon: FaBriefcase,
        link: 'services/mobilite-economique'
    },
    {
        titre: "Développement des Affaires",
        description:
            "Pour les entrepreneurs et les organisations souhaitant développer leurs activités, nous proposons des conseils d'experts et un accompagnement complet pour identifier les opportunités commerciales.",
        image:
            "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        Icon: FaChartLine,
        link: 'services/developpement-affaires'
    },
];
