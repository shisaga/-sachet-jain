import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowDown, Sparkles, Film, Mic, Smartphone, Cpu, Layers, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const services = [
        {
            icon: <Sparkles size={32} />,
            title: "AI-Generated Images",
            description: "High-resolution visuals for branding, marketing, social media, and advertising campaigns. Creating the impossible with pixel-perfect precision."
        },
        {
            icon: <Film size={32} />,
            title: "Cinematic AI Videos",
            description: "Film-inspired content with dramatic lighting, smooth motion, and professional storytelling. Perfect for brands, product launches, and digital campaigns."
        },
        {
            icon: <Mic size={32} />,
            title: "AI Voiceovers",
            description: "Natural, engaging voiceovers for ads, reels, and explainers. Studio-quality narration without the studio."
        },
        {
            icon: <Smartphone size={32} />,
            title: "AI UGC Reels",
            description: "Authentic, high-converting UGC-style videos designed specifically for social media growth and paid ad performance."
        }
    ];

    const tools = ["Veo 3", "Runway Gen-3", "Kling", "Midjourney", "Magnific AI", "Topaz Labs"];

    return (
        <PageTransition className="bg-white min-h-screen relative overflow-hidden text-slate-900 selection:bg-purple-600 selection:text-white">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>
                <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-purple-200/30 opacity-60 pointer-events-none blur-[120px] z-0"></div>
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-blue-100/40 opacity-50 pointer-events-none blur-[120px] z-0"></div>
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-20">

                {/* HERO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40">
                    <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-[2px] bg-purple-600 mb-8"
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] tracking-tighter mb-8 text-slate-900"
                        >
                            AI Visual<br /><span className="text-purple-600">Artist</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-slate-600 max-w-xl leading-relaxed"
                        >
                            I am a professional AI Artist specializing in AI-generated visuals, cinematic AI videos, AI graphics, AI voiceovers, and AI UGC content for brands, creators, and businesses. I help transform creative ideas into high-quality, modern, and visually powerful digital content that captures attention and drives engagement.
                        </motion.p>
                    </div>

                    <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh]">
                        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
                            <motion.img
                                initial={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
                                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                alt="Abstract AI Art"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                        </motion.div>
                    </div>
                </div>

                {/* WHAT I OFFER */}
                <div className="mb-40">
                    <div className="flex items-end justify-between mb-16 border-b border-slate-200 pb-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">What I Offer</h2>
                        <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-slate-400">Services</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>

                {/* TOOLS & EXPERTISE */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40 border-t border-slate-200 pt-20">
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-serif mb-4 text-slate-900">The Stack</h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                            I combine advanced AI models with modern creative workflows to ensure visual excellence. My process is a hybrid of prompt engineering, traditional design principles, and post-production polish.
                        </p>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-purple-500/50 hover:bg-purple-50 transition-colors"
                                >
                                    <Zap size={16} className="text-purple-600" />
                                    <span className="font-tech text-sm tracking-wide uppercase text-slate-700">{tool}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-20 text-center bg-gradient-to-b from-purple-50 to-transparent rounded-3xl border border-slate-100"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 text-slate-900">Ready to create?</h2>
                    <p className="text-slate-600 mb-12 max-w-lg mx-auto">
                        Whether it's a brand campaign, a music video, or a digital experience, let's build something extraordinary.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Start a Project <ArrowRight size={18} />
                    </Link>
                </motion.div>

            </div>
        </PageTransition>
    );
};

const ServiceCard = ({ icon, title, description, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="group p-8 md:p-12 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-500"
    >
        <div className="mb-6 text-purple-600 group-hover:text-white transition-colors duration-500 p-4 bg-purple-50 rounded-full w-fit group-hover:scale-110 group-hover:bg-purple-600 ease-out">
            {icon}
        </div>
        <h3 className="text-2xl font-serif mb-4 text-slate-900 group-hover:text-purple-700 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-600 transition-colors">
            {description}
        </p>
    </motion.div>
);