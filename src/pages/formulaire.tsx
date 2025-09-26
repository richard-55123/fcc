import React, { useState } from 'react';

const FormulairePage: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleRedirect = () => {
        if (isChecked) {
            window.open('http://form-submit.franchiseconseilplus.com/', '_blank');
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50/95 to-gray-100/95 py-12 px-[10%] relative"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230066b3' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-4">
                        Formulaire de Demande
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Accédez au formulaire de demande pour soumettre votre projet
                    </p>
                </div>

                {/* Grid avec cartes de même hauteur */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Carte gauche */}
                    <div className="animate-slideUp flex flex-col h-full">
                        <div className="bg-white rounded-3xl shadow-card overflow-hidden transform hover:scale-105 transition-transform duration-300 flex-1 flex flex-col">
                            <div className="p-1 bg-gradient-to-r from-fcc-blue to-fcc-red">
                                <div className="bg-white p-1">
                                    <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/images/fccForm.png"
                                            alt="Aperçu du formulaire de demande Franchise Conseils Cameroun"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-1 bg-gradient-to-r from-fcc-blue to-fcc-red">
                                <div className="bg-white p-1">
                                    <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/images/blanc.jpg"
                                            alt="Aperçu du formulaire de demande Franchise Conseils Cameroun"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-gray-50 to-white flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70 mb-2 text-center">
                                        Interface Professionnelle
                                    </h3>
                                    <p className="text-black/70 text-center text-sm">
                                        Formulaire optimisé pour une expérience utilisateur fluide et intuitive
                                    </p>
                                </div>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-fcc-blue/10 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-fcc-blue" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">Sécurisé</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-fcc-blue/10 rounded-full flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-fcc-blue" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">Rapide</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carte droite */}
                    <div className="animate-slideDown flex flex-col h-full">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-card p-8 lg:p-10 border border-white/20 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-fcc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70 mb-2">
                                        Accès Sécurisé
                                    </h2>
                                    <p className="text-gray-600">
                                        Accédez au formulaire en toute sécurité
                                    </p>
                                </div>

                                <div className='pb-12'>
                                    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 backdrop-blur-sm bg-yellow-50/80">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-lg font-heading font-semibold text-yellow-800 mb-2">
                                                    Conditions d'accès
                                                </h4>
                                                <p className="text-yellow-700 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">
                                                    Ce formulaire est exclusivement réservé aux personnes ayant reçu des permissions
                                                    de remplissage de la part de <strong>Franchise Conseils Cameroun</strong>.
                                                    Si vous n'avez pas reçu d'autorisation préalable, veuillez contacter notre équipe.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center mb-6">
                                    <input
                                        id="consent"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                        className="w-5 h-5 text-fcc-blue border-gray-300 rounded focus:ring-fcc-red"
                                    />
                                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                                        J’ai lu et j’accepte les conditions d’accès
                                    </label>
                                </div>

                                <button
                                    onClick={handleRedirect}
                                    disabled={!isChecked}
                                    className={`w-full font-heading font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform shadow-lg flex items-center justify-center
                                        ${isChecked
                                            ? "bg-fcc-blue text-white hover:scale-105 hover:shadow-xl"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    <span>Accéder au Formulaire</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </button>

                                <div className="mt-6 text-center">
                                    <p className="text-xs text-gray-500">
                                        En cliquant sur le bouton, vous serez redirigé vers la plateforme sécurisée de formulaire
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <p className="text-gray-600 mb-2">
                                    Besoin d'aide ou de permissions ?
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                                    <a href="mailto:contact@franchiseconseilplus.com" className="text-fcc-blue hover:text-fcc-red font-semibold transition-colors duration-300">
                                        info@franchiseconseils.com
                                    </a>
                                    <span className="hidden sm:inline text-gray-300">•</span>
                                    <a href="tel:+237698616852" className="text-fcc-blue hover:text-fcc-red font-semibold transition-colors duration-300">
                                        +237 698616852
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormulairePage;
