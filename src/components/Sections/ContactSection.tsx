import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import backgroundImage from "/images/flag.png";

const ContactSection: React.FC = () => {
    return (
        <section className="relative w-full py-12 px-[10%] bg-gray-50 overflow-hidden">
            <div
                className="absolute top-0 right-0 h-full w-[40%] opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="mx-auto grid md:grid-cols-2 gap-10 relative z-10">
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] mb-6 text-black/70">
                        Contactez-nous
                    </h2>
                    <p className="mb-6 leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                        Vous avez une question, une suggestion ou vous voulez simplement dire bonjour ? Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Votre nom"
                                required
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fcc-blue"
                            />
                            <input
                                type="email"
                                placeholder="Adresse e-mail"
                                required
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fcc-blue"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Numéro de téléphone"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fcc-blue"
                            />
                            <input
                                type="text"
                                placeholder="Votre site web (facultatif)"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fcc-blue"
                            />
                        </div>
                        <textarea
                            placeholder="Votre message"
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fcc-blue"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-fcc-blue hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>

                <div className="text-black/70 p-8 flex flex-col justify-center space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaMapMarkerAlt className="text-2xl text-fcc-blue" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">Notre Adresse</h3>
                            <p className="text-gray-600">
                                Douala agency - Carrefour maçon - Bonamoussadi., <br />
                                Yaoundé Agency - Elig Essono
                            </p>
                        </div>
                    </div>   

                    <hr className="border-gray-300" />

                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaPhoneAlt className="text-2xl text-fcc-blue" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">Téléphone</h3>
                            <p className="text-gray-600">+237 698616852</p>
                            <p className="text-gray-600"></p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaEnvelope className="text-2xl text-fcc-blue" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">Email</h3>
                            <p className="text-gray-600">info@franchiseconseils.com</p>
                            <p className="text-gray-600"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
