import React from "react";
import { siteData } from "../../data/serviceData";

type Link = { name: string; href: string };
type Image = { src: string; alt: string };

const footerData = {
    about: {
        description:
            "Nous accompagnons les candidats dans leurs démarches pour immigrer au Canada, de manière professionnelle et personnalisée.",
        social: siteData.socialLinks,
    },
    immigration: siteData.servicesItems,
    quickLinks: siteData.menuItems.map((item) => ({
        name: item.name,
        href: item.path,
    })),
    gallery: [
        { src: "/images/one.jpg", alt: "Galerie 1" },
        { src: "/images/two.jpg", alt: "Galerie 2" },
        { src: "/images/three.jpg", alt: "Galerie 3" },
        { src: "/images/for.jpg", alt: "Galerie 4" },
        { src: "/images/five.png", alt: "Galerie 5" },
        { src: "/images/six.png", alt: "Galerie 6" },
    ] as Image[],
    bottomLinks: [
        { name: "À propos", href: "/about" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "Services", href: "/services" },
    ] as Link[],
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0b1536] text-white">
            <div className="px-[10%] mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/fccWite.png"
                            alt="Franchise Conseils Cameroun"
                            className="h-20 w-auto"
                        />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        {footerData.about.description}
                    </p>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                        Suivez-nous
                    </h3>
                    <div className="flex gap-4 text-lg">
                        {footerData.about.social.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-fcc-red transition"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        Nos services
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-[.95rem] md:text-[1.07rem]">
                        {footerData.immigration.map((link, idx) => (
                            <li key={idx}>
                                <a
                                    href={link.path}
                                    className="text-gray-300 hover:text-fcc-red transition"
                                >
                                    → {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        Liens rapides
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-[.95rem] md:text-[1.07rem]">
                        {footerData.quickLinks.map((link, idx) => (
                            <li key={idx}>
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-fcc-red transition"
                                >
                                    → {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        Notre galerie
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        {footerData.gallery.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-20 object-cover rounded"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-fcc-blue text-white py-3">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left">
                        © 2025 Franchise Conseils Cameroun. Tous droits réservés. <br className="md:hidden" />
                        <span className="block md:inline text-center">Powered by <a
                            href="franchise-it-tech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                        >
                            Franchise-IT
                        </a></span>
                    </p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        {footerData.bottomLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="hover:underline text-[.95rem] md:text-[1.07rem]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
