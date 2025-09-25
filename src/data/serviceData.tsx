import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export const siteData = {
    socialLinks: [
        { icon: <FaFacebookF />, href: "https://web.facebook.com/FranchiseConseilsPlus/videos?_rdc=1&_rdr" },
        { icon: <FaTiktok />, href: "https://www.tiktok.com/@franchiseconseils" },
        { icon: <FaWhatsapp />, href: "https://wa.me/237698616852" },
    ],
    menuItems: [
        { name: "Home", path: "/" },
        { name: "Qui sommes-nous", path: "/about" },
        { name: "Témoignages", path: "/temoignage" },
        { name: "Contact", path: "/contact" },
    ],
    servicesItems: [
        { name: "ÉDUCATION INTERNATIONALE", path: "/services/education-internationale" },
        { name: "MOBILITÉ ÉCONOMIQUE", path: "/services/mobilite-economique" },
        { name: "DÉVELOPPEMENT DES AFFAIRES", path: "/services/developpement-affaires" },
    ],
};
