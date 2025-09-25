import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";

const TestimonialsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 2) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials =
        testimonials.slice(activeIndex, activeIndex + 2).length === 2
            ? testimonials.slice(activeIndex, activeIndex + 2)
            : [
                ...testimonials.slice(activeIndex),
                ...testimonials.slice(0, 2 - (testimonials.length - activeIndex)),
            ];

    return (
        <section className="px-[10%] mx-auto py-12">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <p className="text-primary font-medium">Témoignages</p>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-[1.2] text-black/70">Ce que disent nos clients</h2>
                </div>
            </div>

            <div className="">
                <div
                    key={activeIndex}
                    className="grid md:grid-cols-2 gap-8 animate-fadeSlide"
                >
                    {visibleTestimonials.map((t, index) => (
                        <TestimonialCard
                            key={t.id}
                            testimonial={t}
                            dark={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 2)
                                ? "bg-primary"
                                : "bg-gray-300"
                            }`}
                        onClick={() => setActiveIndex(index * 2)}
                    ></button>
                ))}
            </div>
        </section>

    );
};

export default TestimonialsSection;
