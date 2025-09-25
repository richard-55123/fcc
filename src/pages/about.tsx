import React from 'react';
import { useBreadcrumbs } from '../data/useBreadcrumbs';
import Banner from '../components/Ux/banner';
import LogoCarousel from '../components/Sections/LogoCarousel';
import PresentationSection from '../components/Sections/PresentationSection';
import SkillsSection from '../components/Sections/SkillsSection';
import AboutUs from '../components/Sections/AboutUs';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import SectionEquipe from '../components/Sections/SectionEquipe';

const AboutPage: React.FC = () => {
    const breadcrumbs = useBreadcrumbs('About Us');

    return (
        <div>
            <Banner
                title="Qui sommes-nous"
                backgroundImage="/images/about.jpeg"
                breadcrumbs={breadcrumbs}
                height="medium"
            />
            <AboutUs />
            <PresentationSection />
            <SkillsSection />
            <SectionEquipe/>
            <TestimonialsSection />
            <LogoCarousel />
        </div>
    );
};

export default AboutPage;