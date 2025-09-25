import { useEffect, useRef } from "react";
import { logos } from "../../data/partenaire";



export default function LogoCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollAmount += scrollSpeed;

            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }

            container.scrollLeft = scrollAmount;
            animationRef.current = requestAnimationFrame(scroll);
        };

        animationRef.current = requestAnimationFrame(scroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full overflow-hidden py-6">
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-scroll scrollbar-hide"
                style={{ scrollBehavior: "auto" }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-48 h-32 flex items-center justify-center rounded-2xl "
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-h-16 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
