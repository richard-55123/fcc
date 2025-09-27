import React, { useState } from "react";
import { Link } from "react-router-dom";

const PresentationSectionTwo: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative h-[85vh] w-full flex items-center justify-center text-center overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/19.mp4"
                autoPlay
                loop
                muted={!isPlaying}
                playsInline
            />

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 max-w-3xl px-4">
                <div className="flex justify-center gap-6 mb-6">
                    <div
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center border-2 border-white cursor-pointer hover:scale-105 transition"
                    >
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="fcc-blue"
                                viewBox="0 0 24 24"
                                className="w-7 h-7 ml-1"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h2 className="text-[1.8rem] md:text-[3.1rem] font-bold  leading-[1.2] text-white">
                    Une expertise en <br />
                    <span className="font-bold">conseil et accompagnement</span>
                </h2>

                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-4 text-white">
                    Franchise Conseil Plus vous accompagne avec une équipe
                    expérimentée pour vos projets.
                </p>

                <div className="mt-6">
                    <Link to={'/contact'}>
                        <button className="bg-fcc-blue hover:bg-fcc-red text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
                            NOUS CONTACTER
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PresentationSectionTwo;
