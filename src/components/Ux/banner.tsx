import type { BannerProps } from "../../data/banner";
import Breadcrumb from "./Breadcrumb";

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage = '/default-banner.jpg',
  overlay = true,
  height = 'medium',
  breadcrumbs
}) => {

  const heightClasses = {
    small: 'h-72 md:h-80',          // Augmenté
    medium: 'h-96 md:h-[30rem]',    // Augmenté
    large: 'h-[30rem] md:h-[45rem]', // Augmenté significativement
    full: 'min-h-screen'
  };

  const defaultBreadcrumbs = [
    { label: 'HOME', path: '/' },
    { label: title.toUpperCase(), path: undefined }
  ];

  const displayBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <section
      className={`relative ${heightClasses[height]} w-full flex items-center justify-center overflow-hidden animate-zoomIn`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
      )}

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6 flex justify-center animate-fadeIn">
          <Breadcrumb items={displayBreadcrumbs} />
        </div>

        <h1 className="text-[2.2rem] md:text-[3.5rem] font-heading font-bold leading-[1.2] mb-6 tracking-tight drop-shadow-lg animate-slideUp">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </section>
  );
};

export default Banner;