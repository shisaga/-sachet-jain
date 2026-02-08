import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ArrowDown } from 'lucide-react';

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <PageTransition className="bg-white min-h-screen relative overflow-hidden text-slate-900 selection:bg-red-600 selection:text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base Gradient - White to Soft Red */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50 to-white"></div>
          
          {/* Subtle moving lights - Red and Cool Grey (Multiply blend for light mode) */}
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-red-200/50 blur-[120px] mix-blend-multiply" 
          />
           <motion.div 
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-slate-200/60 blur-[120px] mix-blend-multiply" 
          />
          {/* Film Grain */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION: Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40">
            {/* Left: Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
                 <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[2px] bg-red-600 mb-8"
                 />
                 <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-7xl md:text-9xl font-serif font-medium leading-[0.85] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-red-900"
                 >
                    Visual<br/>Architect
                 </motion.h1>
                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl font-light text-slate-600 max-w-xl leading-relaxed ml-2"
                 >
                    I’m an AI Artist and 3D Artist focused on creating cinematic, high-end visuals that feel powerful, precise, and emotionally engaging. My work blends advanced AI tools with traditional 3D craftsmanship to produce visuals that look premium, realistic, and story-driven.
                 </motion.p>
            </div>

            {/* Right: Parallax Image */}
            <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh]">
                <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl">
                    <motion.img 
                        initial={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                        alt="Portrait of the Artist"
                        className="w-full h-full object-cover"
                    />
                    {/* Light Overlay Gradient for blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 p-6">
                     <span className="font-tech text-xs uppercase tracking-widest border border-slate-900/10 bg-white/50 backdrop-blur px-3 py-1 rounded-full text-slate-900 font-bold">EST. 2024</span>
                </div>
            </div>
        </div>

        {/* BIO / NARRATIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-40 border-t border-red-100 pt-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-serif mb-6 text-slate-900">The Ghost in the Machine</h2>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                    We live in an era where imagination is no longer bound by technical skill, but by the clarity of vision. As an AI Visual Artist, I don't just prompt; I direct. 
                </p>
                <br/>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                    My background in traditional 3D design (Blender/Maya) grounds my AI work in physical reality—lighting, texture, and composition—while the AI allows me to explore concepts that would be impossible to build by hand.
                </p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
            >
                 <StatRow label="Focus" value="Art Direction / AI Video / World Building" />
                 <StatRow label="Tools" value="Midjourney / Runway Gen-3 / Blender / Veo" />
                 <StatRow label="Location" value="Digital Nomad / Cloud Based" />
                 <StatRow label="Status" value="Accepting Commissions" highlight />
            </motion.div>
        </div>

        {/* CINEMATIC STRIP */}
        <div className="mb-24">
            <div className="flex items-end justify-between mb-12">
                 <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-red-900/50">Methodology</h3>
                 <ArrowDown className="text-red-900 animate-bounce" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                <CinematicCard 
                    title="01. SYNTHESIS" 
                    subtitle="Generative Exploration"
                    image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
                    delay={0}
                />
                 <CinematicCard 
                    title="02. KINETICS" 
                    subtitle="Motion & Physics"
                    image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    delay={0.2}
                    className="md:mt-12" // Staggered layout
                />
                 <CinematicCard 
                    title="03. ATMOSPHERE" 
                    subtitle="Color & Grading"
                    image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
                    delay={0.4}
                    className="md:mt-24" // Staggered layout
                />
            </div>
        </div>

        {/* FOOTER STATEMENT */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-24 text-center"
        >
            <p className="font-serif italic text-2xl md:text-4xl text-slate-400 hover:text-red-700 transition-colors duration-700 cursor-default">
                "The future isn't rendered.<br/>It's dreamed."
            </p>
        </motion.div>

      </div>
    </PageTransition>
  );
};

const StatRow = ({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) => (
    <div className="flex flex-col gap-1 border-b border-red-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <span className={`font-tech text-lg ${highlight ? 'text-red-600 drop-shadow-sm font-bold' : 'text-slate-800'}`}>{value}</span>
    </div>
);

const CinematicCard = ({ title, subtitle, image, delay, className = "" }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative h-[400px] md:h-full overflow-hidden bg-slate-100 ${className} shadow-lg`}
        >
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-700"></div>
            <img src={image} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out grayscale-[0.1] group-hover:grayscale-0" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h4 className="text-3xl font-serif text-white mb-1">{title}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 group-hover:text-red-300 transition-colors">{subtitle}</p>
            </div>
            
            {/* Border Lines */}
            <div className="absolute top-4 left-4 right-4 h-[1px] bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </motion.div>
    )
}