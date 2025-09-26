import React from "react";
import { FaStar } from "react-icons/fa";
import type { Testimonial } from "../../data/testimonials";

interface Props {
    testimonial: Testimonial;
    dark?: boolean;
}

const TestimonialCard: React.FC<Props> = ({ testimonial, dark = false }) => {
    return (
        <div
            className={`relative p-8 rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${dark
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border border-gray-700"
                : "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 border border-gray-200"
                }`}
        >
            {/* Avatar */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
            </div>

            <span
                className={`absolute text-5xl font-serif ${dark ? "text-primary/30" : "text-secondary/20"
                    } top-6 left-6`}
            >
                “
            </span>

            <h3 className="text-xl font-bold text-center mt-12">{testimonial.name}</h3>

            <div className="flex justify-center mt-2 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar
                        key={i}
                        className="text-secondary mx-0.5 drop-shadow-sm"
                    />
                ))}
            </div>

            <p
                className={`text-center leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"
                    }`}
            >
                {testimonial.text}
            </p>

            <div className="mt-6 w-16 h-1 mx-auto rounded-full bg-primary/80"></div>
        </div>

    );
};

export default TestimonialCard;
