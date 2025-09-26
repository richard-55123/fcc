import { useEffect, useRef, useState } from 'react';
import type { galleryTemoignage } from '../../data/galeryData';
import { FaExternalLinkAlt, FaFacebook, FaQuoteRight } from 'react-icons/fa';

interface VideoGalleryProps {
    videos: typeof galleryTemoignage;
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
    const [selectedVideo, setSelectedVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                await containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            }
        }
    };

    const nextVideo = () => {
        setSelectedVideo((prev) => (prev + 1) % videos.length);
        setIsPlaying(true);
    };

    const prevVideo = () => {
        setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setIsPlaying(true);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isFullscreen) return;

            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'ArrowRight':
                    nextVideo();
                    break;
                case 'ArrowLeft':
                    prevVideo();
                    break;
                case 'Escape':
                    setIsFullscreen(false);
                    break;
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isFullscreen]);

    useEffect(() => {
        if (videoRef.current && isPlaying) {
            videoRef.current.play().catch(console.error);
        }
    }, [selectedVideo]);

    return (
        <div className="relative min-h-screen py-12 px-[10%] overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img
                    src="/fcc.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="mb-12 relative z-10 ">
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/70  leading-[1.2] mb-4 flex  gap-2">
                    <FaQuoteRight className="text-fcc-red" />
                    Ils parlent de nous
                    <FaQuoteRight className="text-fcc-red rotate-180" />
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                    Découvrez les avis authentiques de nos clients et partenaires.
                    Leur expérience est notre plus grande fierté
                </p>
            </div>

            <div
                ref={containerRef}
                className={`relative bg-black rounded-3xl overflow-hidden shadow-card mb-8 transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-video'
                    }`}
            >
                <video
                    ref={videoRef}
                    src={videos[selectedVideo].src}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={nextVideo}
                    onClick={togglePlay}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center space-x-8">
                        <button
                            onClick={prevVideo}
                            className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all transform hover:scale-110"
                        >
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={togglePlay}
                            className="p-6 rounded-full bg-white/20 hover:bg-white/30 transition-all transform hover:scale-110"
                        >
                            {isPlaying ? (
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                                </svg>
                            ) : (
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={nextVideo}
                            className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all transform hover:scale-110"
                        >
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                            <span className="text-white font-medium">
                                {selectedVideo + 1} / {videos.length}
                            </span>

                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-4">
                    Tous les témoignages
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {videos.map((video, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedVideo(index);
                                setIsPlaying(true);
                            }}
                            className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 group ${index === selectedVideo
                                ? 'ring-4 ring-fcc-blue scale-105'
                                : 'hover:scale-105 hover:ring-2 hover:ring-gray-300'
                                }`}
                        >
                            <video
                                src={video.src}
                                className="w-full h-full object-cover"
                                muted
                                preload="metadata"
                            />

                            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${index === selectedVideo ? 'opacity-0' : 'group-hover:opacity-100'
                                }`}>
                                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                </svg>
                            </div>

                            {index === selectedVideo && isPlaying && (
                                <div className="absolute top-2 right-2">
                                    <div className="flex space-x-1">
                                        <div className="w-1 h-3 bg-fcc-red animate-pulse"></div>
                                        <div className="w-1 h-3 bg-fcc-red animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-1 h-3 bg-fcc-red animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center space-x-3 mt-8 md:hidden">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setSelectedVideo(index);
                            setIsPlaying(true);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${index === selectedVideo ? 'bg-fcc-blue scale-125' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            <div className="mt-16 border border rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <div className="p-3  rounded-2xl">
                                <FaFacebook className="text-3xl text-blue-600" />
                            </div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">
                                Restez connecté avec nous
                            </h3>
                        </div>

                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                            Ne manquez pas nos dernières actualités, témoignages exclusifs et conseils pratiques.
                            Rejoignez notre communauté sur Facebook pour être informé en temps réel de nos publications.
                        </p>

                        <div className="mt-6 flex items-center gap-4 text-blue-100">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className='leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl'>Témoignages exclusifs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className='leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl'>Actualités en direct</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <span className='leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl'>Conseils pratiques</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://web.facebook.com/FranchiseConseilsPlus/videos?_rdc=1&_rdr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white text-fcc-blue px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                        >
                            <FaFacebook className="text-xl" />
                            Visiter notre page
                            <FaExternalLinkAlt className="text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a href='https://web.facebook.com/FranchiseConseilsPlus/videos?_rdc=1&_rdr' className="group border-2 border-black text-black/70 px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            S'abonner à la page
                        </a>

                        <div className="flex items-center gap-2 text-fcc-red text-sm">
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1 15h-2v-6h2v6zm-1-7.5c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm7 7.5h-4v-2h2v-2h-2v-2h2v2h2v2h-2v2h2v2z" />
                                </svg>
                                <span>+1,6K abonnés</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
