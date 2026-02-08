import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react';
import { getProjectById, getNextProject, getPrevProject } from '../data/projects';
import { PageTransition } from '../components/PageTransition';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
    const project = id ? getProjectById(id) : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedMedia) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedMedia]);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <button onClick={() => navigate('/')} className="text-purple-600 hover:underline">Return Home</button>
                </div>
            </div>
        );
    }

    const nextProject = getNextProject(project.id);
    const prevProject = getPrevProject(project.id);

    return (
        <PageTransition className="!pt-0 !pb-0 bg-white">

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.1 }}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
                            onClick={() => setSelectedMedia(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.img
                            src={selectedMedia}
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full h-full object-contain rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    <img
                        src={project.heroMedia}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-20 md:pb-32">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ y: 60, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex gap-4 mb-4">
                                {project.tags.map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                            <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 mb-4 mix-blend-multiply leading-tight">{project.title}</h1>
                        </motion.div>
                    </div>
                </div>

                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -5, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} />
                    <span className="uppercase text-xs font-bold tracking-widest">Back</span>
                </motion.button>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
                >
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Project Details</h3>
                        <div className="space-y-4">
                            <div>
                                <span className="block text-xs text-slate-500 uppercase">Year</span>
                                <span className="text-lg text-slate-900 font-serif">{project.year}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 uppercase">Category</span>
                                <span className="text-lg text-slate-900 font-serif capitalize">{project.category}</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Concept</h3>
                        <p className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </div>
                </motion.div>

                {/* Media Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.media.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                            className="flex flex-col"
                        >
                            <div
                                className="relative rounded-xl overflow-hidden aspect-[2/3] cursor-zoom-in group/media shadow-lg hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedMedia(item.url)}
                            >
                                {/* Video Icon if needed */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform duration-500">
                                            <Play fill="white" className="text-white ml-1 w-6 h-6" />
                                        </div>
                                    </div>
                                )}
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    src={item.url}
                                    alt={item.caption || `Project image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover/media:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                            </div>
                            {item.caption && (
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-[1px] w-6 bg-slate-300"></div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{item.caption}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Next/Prev Navigation */}
            <div className="w-full bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 py-24 grid grid-cols-2">

                    <Link to={`/project/${prevProject.id}`} className="group flex flex-col items-start text-left">
                        <span className="text-xs uppercase tracking-widest text-slate-400 mb-3 group-hover:text-purple-500 transition-colors flex items-center gap-2">
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform duration-300" /> Previous Project
                        </span>
                        <h4 className="text-2xl md:text-4xl font-serif text-slate-900 group-hover:opacity-70 transition-opacity">{prevProject.title}</h4>
                    </Link>

                    <Link to={`/project/${nextProject.id}`} className="group flex flex-col items-end text-right">
                        <span className="text-xs uppercase tracking-widest text-slate-400 mb-3 group-hover:text-purple-500 transition-colors flex items-center gap-2">
                            Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <h4 className="text-2xl md:text-4xl font-serif text-slate-900 group-hover:opacity-70 transition-opacity">{nextProject.title}</h4>
                    </Link>

                </div>
            </div>

        </PageTransition>
    );
};