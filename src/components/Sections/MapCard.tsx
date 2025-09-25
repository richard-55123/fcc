import React from "react";

const MapCard: React.FC = () => {
    return (
        <div className="w-full  mx-auto">
            <div className="relative w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.682137520985!2d9.7412188!3d4.0849832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d83a9fbaa9b%3A0xb5183d3fe9cd95a6!2sFranchise%20Conseils%20Cameroun!5e0!3m2!1sfr!2scm!4v1758625614255!5m2!1sfr!2scm"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0 rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute top-4 left-4 bg-white shadow-lg rounded-md p-3 w-72">
                    <h2 className="text-base font-semibold">
                        Franchise Conseils Cameroun
                    </h2>
                    <p className="text-xs text-gray-600 leading-snug">
                        Douala, Cameroun <br />
                        Quartier Bonapriso
                    </p>
                    <div className="flex items-center mt-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="ml-1 text-xs font-medium">4,5</span>
                        <span className="ml-1 text-gray-500 text-xs">(192 avis)</span>
                    </div>
                    <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                        Itinéraires
                    </button>
                    <a
                        href="https://www.google.com/maps/place/Franchise+Conseils+Cameroun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 text-xs text-blue-500 hover:underline"
                    >
                        Agrandir le plan
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MapCard;