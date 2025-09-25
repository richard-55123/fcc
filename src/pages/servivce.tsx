import React from "react";
import Banner from "../components/Ux/banner";

const ServicePage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            <Banner
                title="Nos Services"
                subtitle="Nous sommes à votre écoute pour toutes vos questions ou demandes."
                backgroundImage="/images/services.png"
                overlay={true}
                height="medium"
                breadcrumbs={[
                    { label: "HOME", path: "/" },
                    { label: "CONTACT", path: "/contact" },
                ]}
            />



        </div>
    );
};

export default ServicePage;
