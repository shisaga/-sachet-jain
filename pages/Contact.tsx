import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Mail, Instagram, Twitter, Linkedin, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <PageTransition className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-900">
        
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100"></div>
            
            {/* Animated Light Leaks / Aurora Effect */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 5, 0]
                }}
                transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(192,132,252,0.15)_0%,rgba(255,255,255,0)_60%)] blur-[100px]"
            />
            
            <motion.div 
                 animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.4, 0.3],
                    x: [0, -20, 0]
                }}
                transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] left-[-10%] w-[90vw] h-[90vw] bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,rgba(255,255,255,0)_60%)] blur-[120px]"
            />
            
            {/* Subtle Technical Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a06_1px,transparent_1px),linear-gradient(to_bottom,#0f172a06_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"></div>

            {/* Film Grain */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-center relative z-10 py-24">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-24">
                
                {/* Text Content */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-purple-600 mb-4 block">Get in Touch</span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium text-slate-900 mb-8 leading-tight">
                            Let's start a<br/>
                            <span className="italic text-slate-400">dialogue.</span>
                        </h1>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-slate-600 font-light max-w-md mb-12 leading-relaxed"
                    >
                        Whether for a commission, collaboration, or just to say hello, I'm always open to discussing new ideas and visions.
                    </motion.p>

                    {/* Contact Details */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-8"
                    >
                         <div className="group w-fit">
                             <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 block">Email</label>
                             <a href="mailto:sachet0985@gmail.com" className="text-2xl md:text-3xl font-serif text-slate-900 hover:text-purple-600 transition-colors flex items-center gap-3">
                                sachet0985@gmail.com
                                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                         </div>

                         <div>
                             <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">Socials</label>
                             <div className="flex gap-4">
                                <SocialLink icon={<Instagram size={20}/>} href="#" label="Instagram" />
                                <SocialLink icon={<Twitter size={20}/>} href="#" label="Twitter" />
                                <SocialLink icon={<Linkedin size={20}/>} href="#" label="LinkedIn" />
                             </div>
                         </div>
                    </motion.div>
                </div>

                {/* Form Section - Glass Card */}
                <motion.div 
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                     className="lg:w-1/2 w-full"
                >
                    <div className="bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60 relative overflow-hidden group hover:shadow-[0_12px_48px_rgba(147,51,234,0.08)] transition-shadow duration-700">
                        
                        {/* Shimmer effect on hover */}
                        <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-20deg] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 font-light text-slate-800" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 font-light text-slate-800" placeholder="john@example.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2 group/input">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Subject</label>
                                <select className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors text-slate-700 font-light cursor-pointer">
                                    <option>Project Commission</option>
                                    <option>Collaboration</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2 group/input">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Message</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 resize-none font-light text-slate-800" placeholder="Tell me about your vision..."></textarea>
                            </div>

                            <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-purple-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 group/btn mt-4">
                                <span>Send Message</span>
                                <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </div>
    </PageTransition>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => {
    return (
        <a href={href} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:border-purple-500 hover:text-purple-600 hover:shadow-md transition-all duration-300" aria-label={label}>
            {icon}
        </a>
    )
}