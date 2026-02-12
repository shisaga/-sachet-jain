import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '../components/ParticleBackground';

const scenes = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2670&auto=format&fit=crop",
        alt: "Dramatic Sunrise Nature",
        overlayColor: "from-black/40 via-transparent to-black/60"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1614728894747-a83421789f10?q=80&w=2670&auto=format&fit=crop",
        alt: "Digital Void",
        overlayColor: "from-black/60 via-purple-900/10 to-black/80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop",
        alt: "Golden Ripples",
        overlayColor: "from-black/30 via-transparent to-black/90"
    }
];

export const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 30, // Softer response for cinematic weight
        damping: 30,   // High damping for ultra-smooth motion
        restDelta: 0.001
    });

    // --- Cinematic Transforms ---

    // Scene 1: Base layer, stays solid until Scene 2 is 100% opaque
    const opacity1 = useTransform(smoothProgress, [0.4, 0.5], [1, 0]);
    const scale1 = useTransform(smoothProgress, [0, 0.4], [1, 1.1]);
    const blur1 = useTransform(smoothProgress, [0.4, 0.5], ["blur(0px)", "blur(15px)"]);

    // Scene 2: Fades in over Scene 1, then stays solid until Scene 3 is 100% opaque
    const opacity2 = useTransform(
        smoothProgress,
        [0.15, 0.4, 0.55, 0.65],
        [0, 1, 1, 0]
    );

    const scale2 = useTransform(
        smoothProgress,
        [0.15, 0.65],
        [1.15, 1]
    );

    // Scene 3: Fades in over Scene 2
    const opacity3 = useTransform(
        smoothProgress,
        [0.4, 0.65],
        [0, 1]
    );

    const scale3 = useTransform(
        smoothProgress,
        [0.4, 0.75],
        [1.15, 1]
    );
    // --- Text Parallax Effects ---
    // Elements move at different speeds to create depth (foreground moves faster or leaves faster)

    // Title: Moves up, blurs out
    const titleY = useTransform(smoothProgress, [0, 0.25], [0, -100]);
    const titleOpacity = useTransform(smoothProgress, [0.05, 0.2], [1, 0]);
    const titleBlur = useTransform(smoothProgress, [0.05, 0.2], ["blur(0px)", "blur(20px)"]);

    // Subtitle: Moves faster than title, fades out soon after
    const subY = useTransform(smoothProgress, [0, 0.25], [0, -150]);
    const subOpacity = useTransform(smoothProgress, [0.1, 0.22], [1, 0]);

    // Quote: Moves fastest, fades out last
    const quoteY = useTransform(smoothProgress, [0, 0.25], [0, -200]);
    const quoteOpacity = useTransform(smoothProgress, [0.15, 0.25], [1, 0]);

    // End Text: Re-appears at bottom of scroll sequence before section gets unpinned
    const endTextOpacity = useTransform(smoothProgress, [0.65, 0.72], [0, 1]);
    const endTextY = useTransform(smoothProgress, [0.6, 0.75], [100, 0]);


    return (
        <div className="bg-black min-h-screen text-slate-100 selection:bg-purple-500 selection:text-white">

            {/* Cinematic Scroll Sequence Container */}
            <div ref={containerRef} className="relative h-[400vh]">

                {/* Sticky Viewport */}
                <div className="sticky top-0 h-screen overflow-hidden">

                    {/* Particle Overlay (Persistent across scenes) */}
                    <ParticleBackground />

                    {/* Scene 1 */}
                    <motion.div style={{ opacity: opacity1, filter: blur1 }} className="absolute inset-0 z-10">
                        <motion.div style={{ scale: scale1 }} className="w-full h-full origin-center">
                            <img src={scenes[0].image} alt={scenes[0].alt} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className={`absolute inset-0 bg-gradient-to-b ${scenes[0].overlayColor}`}></div>
                    </motion.div>

                    {/* Scene 2 */}
                    <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 z-20">
                        <motion.div style={{ scale: scale2 }} className="w-full h-full origin-center">
                            <img src={scenes[1].image} alt={scenes[1].alt} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className={`absolute inset-0 bg-gradient-to-b ${scenes[1].overlayColor}`}></div>
                    </motion.div>

                    {/* Scene 3 */}
                    <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 z-30">
                        <motion.div style={{ scale: scale3 }} className="w-full h-full origin-center">
                            <img src={scenes[2].image} alt={scenes[2].alt} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className={`absolute inset-0 bg-gradient-to-b ${scenes[2].overlayColor}`}></div>
                    </motion.div>

                    {/* Global Grain Overlay */}
                    <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

                    {/* Typography Overlay */}
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">

                        {/* Hero Text Group */}
                        <div className="relative z-50 flex flex-col items-center">
                            {/* Title */}
                            <motion.div style={{ y: titleY, opacity: titleOpacity, filter: titleBlur }} className="text-center px-6">
                                <h1 className="text-7xl md:text-[10rem] font-tech font-bold text-white mb-6 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] tracking-tighter uppercase leading-[0.8]">
                                    Sachet Jain
                                </h1>
                            </motion.div>
                            {/* Subtitle */}
                            <motion.div style={{ y: subY, opacity: subOpacity }} className="flex flex-col items-center gap-6">
                                <h2 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-blue-50 drop-shadow-lg bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                                    AI Visual Artist
                                </h2>
                                <div className="h-[80px] w-[1px] bg-gradient-to-b from-white via-white/40 to-transparent"></div>
                            </motion.div>
                            {/* Quote */}
                            <motion.div style={{ y: quoteY, opacity: quoteOpacity }} className="relative mt-2 px-6">
                                <p className="text-slate-200 font-serif italic text-2xl md:text-4xl tracking-wide drop-shadow-md text-center max-w-2xl leading-relaxed">
                                    "Sculpting the digital sublime."
                                </p>
                            </motion.div>
                        </div>

                        {/* Transition Text (Appears at end of scroll) */}
                        <motion.div style={{ opacity: endTextOpacity, y: endTextY }} className="absolute bottom-24 md:bottom-32 text-center z-50">
                            <motion.div
                                animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-[1px] bg-white mx-auto"
                            />
                        </motion.div>

                        {/* Initial Scroll Prompt */}
                        <motion.div
                            style={{ opacity: subOpacity }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-overlay"
                        >
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Selected Works - Dark Theme */}
            <section className="relative z-10 bg-black pt-24 pb-32 border-t border-white/5">
                {/* Header */}
                <div className="px-6 md:px-12 mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-end pb-12 border-b border-white/10">
                        <div>
                            <h3 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-none">Selected<br /><span className="text-slate-500">Works</span></h3>
                        </div>
                        <Link to="/ai-videos" className="hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors pb-2 group">
                            View Full Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Full Bleed Projects */}
                <div className="flex flex-col gap-32 w-full">
                    <FeaturedCard
                        title="Formula 1"
                        category="Video Generation"
                        video="/videos/f1.mp4"
                        image="https://images.unsplash.com/photo-1598460673327-023a1050e503?q=80&w=2600&auto=format&fit=crop"
                        link="/project/formula-1"
                        index={0}
                    />

                    <FeaturedCard
                        title="Wild Life"
                        category="World Building"
                        video="/videos/Majestic_Tiger_s_Jungle_Stare.mp4"
                        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2544&auto=format&fit=crop"
                        link="/project/wild-life"
                        index={1}
                    />

                    <FeaturedCard
                        title="FPV Shots"
                        category="Drone Dynamics"
                        video="/videos/fpv.mp4"
                        image="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2544&auto=format&fit=crop"
                        link="/project/fpv-shots"
                        index={2}
                    />

                    <FeaturedCard
                        title="Cinematic Visuals"
                        category="Motion Art"
                        video="/videos/iad.mp4"
                        image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop"
                        link="/project/cinematic-visuals"
                        index={3}
                    />

                    <div className="w-full">
                        <Link to="/ai-projects" className="block group relative w-full aspect-video md:aspect-[2.4/1] overflow-hidden bg-slate-900 border-t border-b border-white/5 rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black opacity-100 group-hover:opacity-50 transition-opacity duration-500"></div>

                            {/* Hover Image Reveal */}
                            <img
                                src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1000&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 scale-105 group-hover:scale-100 ease-out"
                                alt="All Projects"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                <h4 className="text-4xl md:text-8xl font-serif text-white mb-6">All<br />Projects</h4>
                                <span className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-black text-white transition-all duration-500">
                                    <ArrowRight size={40} />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeaturedCard = ({ title, category, image, video, link, index }: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { amount: 0.3 });

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(err => console.log("Video play interrupted or blocked:", err));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative cursor-pointer w-full"
        >
            <Link to={link} className="block w-full">
                <div className="w-full aspect-video md:aspect-[2.4/1] overflow-hidden bg-slate-900 mb-6 relative rounded-3xl">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    {video ? (
                        <video
                            ref={videoRef}
                            src={video}
                            poster={image}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover scale-[1.1] transition-transform duration-[1.8s] ease-[0.22,1,0.36,1] group-hover:scale-[1.18] opacity-90 group-hover:opacity-100"
                        />
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover scale-[1.12] transition-transform duration-[1.8s] ease-[0.22,1,0.36,1] group-hover:scale-[1.18] opacity-90 group-hover:opacity-100"
                        />
                    )}
                </div>

                {/* Content with padding to align with grid */}
                <div className="px-6 md:px-12 w-full">
                    <div className="flex justify-between items-start border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors duration-500">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">{category}</p>
                            <h4 className="text-4xl md:text-7xl font-serif text-slate-200 group-hover:text-white transition-colors">{title}</h4>
                        </div>
                        <ArrowRight size={32} className="text-slate-600 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500 mt-2" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};