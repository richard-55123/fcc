import React from "react";
import Banner from "../components/Ux/banner";
import ContactSection from "../components/Sections/ContactSection";
import MapCard from "../components/Sections/MapCard";

const ContactPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            <Banner
                title="Contactez-nous"
                subtitle="Nous sommes à votre écoute pour toutes vos questions ou demandes."
                backgroundImage="/images/contact.png"
                overlay={true}
                height="medium"
                breadcrumbs={[
                    { label: "HOME", path: "/" },
                    { label: "CONTACT", path: "/contact" },
                ]}
            />

            <ContactSection/>
            <MapCard/>



        </div>
    );
};

export default ContactPage;
