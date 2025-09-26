import LogoCarousel from "../components/Sections/LogoCarousel";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import VideoGallery from "../components/Sections/VideoGallery";
import Banner from "../components/Ux/banner";
import { galleryTemoignage } from "../data/galeryData";
import { useBreadcrumbs } from "../data/useBreadcrumbs";

const Temoignages = () => {
    const breadcrumbs = useBreadcrumbs('Témoignages');
    return (
        <>
            <Banner
                title="Témoignages"
                backgroundImage="/images/temoignage.png"
                breadcrumbs={breadcrumbs}
                height="medium"
                subtitle=" Découvrez les expériences de nos partenaires et clients à travers ces témoignages vidéo."
            />
            <div className="min-h-screen bg-gray-50">
                <VideoGallery videos={galleryTemoignage} />
            </div>
            <TestimonialsSection />
            <LogoCarousel />
        </>
    );
};

export default Temoignages;