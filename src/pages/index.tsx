import Hero from "../components/Layout/Hero"
import AboutSection from "../components/Sections/AboutSection"
import ContactSection from "../components/Sections/ContactSection"
import GallerySection from "../components/Sections/GallerySection"
import ImmigrationSection from "../components/Sections/ImmigrationEtudeSection"
import LogoCarousel from "../components/Sections/LogoCarousel"
import MapCard from "../components/Sections/MapCard"
import PresentationSection from "../components/Sections/PresentationSection"
import SectionServices from "../components/Sections/SectionServices"
import TestimonialsSection from "../components/Sections/TestimonialsSection"
import VisaSection from "../components/Sections/VisaSection"
import WhyChooseUs from "../components/Sections/WhyChooseUs"

export const Home = () => {
    return (
        <>
            <Hero />
            <VisaSection />
            <AboutSection />
            <SectionServices />
            <WhyChooseUs />
            <ImmigrationSection />
            <PresentationSection />
            <TestimonialsSection />
            <GallerySection />
            <LogoCarousel />
            <ContactSection />
            <MapCard />
        </>
    )
}