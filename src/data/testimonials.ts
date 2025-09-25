export interface Testimonial {
    id: number;
    name: string;
    photo: string;
    text: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Pauline Nguema",
        photo: "/images/two.jpg",
        text: "Grâce à Franchise Conseils Cameroun, j’ai pu préparer mon dossier d’immigration pour le Canada en toute confiance. Leur équipe m’a guidée étape par étape et aujourd’hui je poursuis mes études à Montréal.",
        rating: 5,
    },
    {
        id: 2,
        name: "Arnaud Mbarga",
        photo: "/images/one.jpg",
        text: "Une agence sérieuse et professionnelle ! J’ai apprécié leur disponibilité et leur transparence. Mon projet de regroupement familial a abouti grâce à leur accompagnement personnalisé.",
        rating: 5,
    },
    {
        id: 3,
        name: "Chantal Tchoumi",
        photo: "/images/three.jpg",
        text: "Je recommande vivement Franchise Conseils Cameroun. Ils connaissent parfaitement les démarches d’immigration et m’ont aidée à obtenir mon visa étudiant sans stress.",
        rating: 5,
    },
    {
        id: 4,
        name: "Mireille Fotso",
        photo: "/images/for.jpg",
        text: "Franchise Conseils Cameroun m’a aidée à concrétiser mon rêve d’émigrer au Canada. Tout a été clair, honnête et bien organisé. Je les recommande à tous ceux qui veulent tenter l’aventure canadienne.",
        rating: 5,
    },
];
