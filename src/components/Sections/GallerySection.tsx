import { useEffect, useState } from "react";
import { galleryCards, galleryVideos, } from "../../data/galeryData";

const GalleryCarouselCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 3) % galleryCards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleCards =
        galleryCards.slice(activeIndex, activeIndex + 3).length === 3
            ? galleryCards.slice(activeIndex, activeIndex + 3)
            : [
                ...galleryCards.slice(activeIndex),
                ...galleryCards.slice(0, 3 - (galleryCards.length - activeIndex)),
            ];

    return (
        <section className="relative px-[10%] py-12 overflow-hidden">
            <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{
                    backgroundImage: "url('/fcc.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="relative flex flex-col items-center text-center mb-12">
                <span className="text-primary font-medium">Galerie</span>
                <span className="w-12 h-[2px] bg-primary mt-2 mb-4"></span>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70">
                    Nos moments en images
                </h2>
            </div>

            <div className="overflow-hidden relative z-10">
                <div
                    key={activeIndex}
                    className="grid md:grid-cols-3 gap-6 animate-fadeSlide"
                >
                    {visibleCards.map((card, index) => (
                        <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-card group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1"
                        >
                            <img
                                src={card.src}
                                alt={card.title}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-center px-4">
                                <h3 className="text-xl font-bold">{card.title}</h3>
                                <p className="text-sm mt-1">{card.subtitle}</p>
                            </div>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-primary/80 mb-4"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-6 relative z-10">
                {Array.from({ length: Math.ceil(galleryCards.length / 3) }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 3)
                            ? "bg-primary"
                            : "bg-gray-300"
                            }`}
                        onClick={() => setActiveIndex(index * 3)}
                    />
                ))}
            </div>

            {galleryVideos && galleryVideos.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6  mx-auto mt-12 relative z-10">
                    {galleryVideos.map((video, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                            <div className="relative w-full h-[250px] md:h-[350px]">
                                <video
                                    src={video.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                                    {/* <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {video.title}
                                    </h3>
                                    <p className="text-white/80 mt-2 text-sm md:text-base">
                                        {video.subtitle}
                                    </p> */}
                                    <button
                                        onClick={() => window.location.href = "/temoignage"}
                                        className="mt-4 px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
                                    >
                                        Voir plus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default GalleryCarouselCards;
