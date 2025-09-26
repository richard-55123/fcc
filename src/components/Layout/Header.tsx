"use client";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookF,
    FaBars,
    FaTimes,
    FaChevronDown,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa";

interface MenuItem {
    name: string;
    path: string;
    hasDropdown?: boolean;
}

interface ServiceItem {
    name: string;
    path: string;
}

function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const menuItems: MenuItem[] = [
        { name: "Home", path: "/" },
        { name: "Qui sommes-nous", path: "/about" },
        { name: "Services", path: "#", hasDropdown: true },
        // { name: "Témoignages", path: "/temoignage" },
        { name: "Formulaire", path: "/Formulaire" },
    ];

    const servicesItems: ServiceItem[] = [
        { name: "ÉDUCATION INTERNATIONALE", path: "/services/education-internationale" },
        { name: "MOBILITÉ ÉCONOMIQUE", path: "/services/mobilite-economique" },
        { name: "DÉVELOPPEMENT DES AFFAIRES", path: "/services/developpement-affaires" },
    ];

    const handleMouseEnter = (): void => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setServicesDropdownOpen(true);
    };

    const handleMouseLeave = (): void => {
        timeoutRef.current = setTimeout(() => {
            setServicesDropdownOpen(false);
        }, 300);
    };

    const toggleServicesDropdown = (): void => {
        setServicesDropdownOpen(!servicesDropdownOpen);
    };

    const closeMobileMenu = (): void => {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
    };

    const handleServicesClick = (): void => {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    return (
        <header className="w-full sticky top-0 z-50">
            <div
                className={`bg-[#0b1536] text-white text-sm transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-20 opacity-100 py-2"
                    }`}
            >
                <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0">
                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 w-full lg:w-auto">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FaEnvelope className="text-fcc-red min-w-[16px]" />
                            <span className="text-xs lg:text-sm">info@franchiseconseils.com</span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2">
                            <FaMapMarkerAlt className="text-fcc-red min-w-[16px]" />
                            <span className="text-xs lg:text-sm">Douala agency - Carrefour maçon - Bonamoussadi.</span>
                        </div>
                        <div className="hidden xl:flex items-center gap-2">
                            <FaMapMarkerAlt className="text-fcc-red min-w-[16px]" />
                            <span className="text-xs lg:text-sm">Yaoundé Agency - Elig Essono</span>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FaPhoneAlt className="text-fcc-red min-w-[16px]" />
                            <span className="text-xs lg:text-sm">+237 698616852</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://web.facebook.com/FranchiseConseilsPlus/videos?_rdc=1&_rdr#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="cursor-pointer hover:text-fcc-red transition-colors text-sm lg:text-base" />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok className="cursor-pointer hover:text-fcc-red transition-colors text-sm lg:text-base" />
                        </a>

                        <a
                            href="https://wa.me/237698616852"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="cursor-pointer hover:text-fcc-red transition-colors text-sm lg:text-base" />
                        </a>
                    </div>
                </div>
            </div>

            <div
                className={`transition-all duration-300 ${isScrolled ? "bg-fcc-blue shadow-lg" : "bg-white shadow-sm"
                    }`}
            >
                <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center py-3 lg:py-4">

                    <div className="flex items-center">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                            <img
                                src={isScrolled ? "/fccWite.png" : "/fcc.png"}
                                alt="Logo"
                                className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-medium">
                        {menuItems.map((item) =>
                            item.hasDropdown ? (
                                <div
                                    key={item.name}
                                    className="relative"
                                    ref={dropdownRef}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }: { isActive: boolean }) =>
                                            `flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base ${isScrolled
                                                ? "text-white hover:bg-white/10"
                                                : "text-gray-800 hover:bg-gray-100"
                                            } ${isActive ? "font-bold text-fcc-red" : ""}`
                                        }
                                    >
                                        {item.name}
                                        <FaChevronDown
                                            className={`text-xs transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </NavLink>

                                    {servicesDropdownOpen && (
                                        <div
                                            className="absolute top-full left-0 mt-1 w-64 xl:w-72 bg-white shadow-xl rounded-lg py-3 z-50 border border-gray-200"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {servicesItems.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    to={service.path}
                                                    className="block px-4 xl:px-6 py-2 xl:py-3 text-xs xl:text-sm text-gray-700 hover:bg-fcc-blue hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-fcc-red"
                                                    onClick={() => setServicesDropdownOpen(false)}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }: { isActive: boolean }) =>
                                        `px-2 xl:px-3 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base ${isScrolled
                                            ? "text-white hover:bg-white/10"
                                            : "text-gray-800 hover:bg-gray-100"
                                        } ${isActive ? "font-bold text-fcc-red" : ""}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )
                        )}
                    </nav>

                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className={`font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm xl:text-base ${isScrolled
                                ? "bg-white text-fcc-blue hover:bg-gray-100 shadow-lg"
                                : "bg-fcc-blue text-white hover:bg-fcc-red shadow-md"
                                }`}
                        >
                            Contactez-Nous
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                                ? "text-white hover:bg-white/10"
                                : "text-gray-800 hover:bg-gray-100"
                                }`}
                        >
                            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-fcc-blue text-white px-4 py-4 transition-all duration-300 shadow-lg">
                        <nav className="flex flex-col gap-1 font-medium">
                            {menuItems.map((item) =>
                                item.hasDropdown ? (
                                    <div key={item.name} className="flex flex-col">
                                        <button
                                            onClick={toggleServicesDropdown}
                                            className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                                        >
                                            <span className="font-medium">{item.name}</span>
                                            <FaChevronDown
                                                className={`text-xs transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {servicesDropdownOpen && (
                                            <div className="ml-3 mt-1 bg-blue-800 rounded-lg py-2 space-y-1">
                                                {servicesItems.map((service) => (
                                                    <Link
                                                        key={service.name}
                                                        to={service.path}
                                                        className="block px-4 py-2 text-xs hover:bg-blue-700 hover:text-orange-300 transition-colors duration-200 rounded-lg"
                                                        onClick={handleServicesClick}
                                                    >
                                                        {service.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        className={({ isActive }: { isActive: boolean }) =>
                                            `px-3 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm ${isActive ? "bg-blue-700 font-bold text-orange-300" : ""
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )
                            )}

                            <Link
                                to="/contact"
                                className="mt-3 inline-block bg-white text-fcc-blue font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center text-sm"
                                onClick={closeMobileMenu}
                            >
                                 Contactez-Nous
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;