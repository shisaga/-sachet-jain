import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Mail, Instagram, Twitter, Linkedin, Send, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Project Commission',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // NOTE: You need to replace these with your actual EmailJS credentials
            // from https://dashboard.emailjs.com/
            const SERVICE_ID = 'service_677p50c'; // Replace with your Service ID
            const TEMPLATE_ID = 'template_zifhtau';
            const PUBLIC_KEY = 'zQw_A-At0u-frgB8v';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'sachet0985@gmail.com',
            };

            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (response.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: 'Project Commission', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send message. Please try again.');
            }
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.text || err.message || 'Something went wrong. Please try again.');
        }
    };

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
                                Let's start a<br />
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
                                    <SocialLink icon={<Instagram size={20} />} href="#" label="Instagram" />
                                    <SocialLink icon={<Twitter size={20} />} href="#" label="Twitter" />
                                    <SocialLink icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
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

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-serif text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-500">Thank you for reaching out. I'll get back to you soon.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-sm font-bold uppercase tracking-widest text-purple-600 hover:text-purple-700 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2 group/input">
                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 font-light text-slate-800"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2 group/input">
                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 font-light text-slate-800"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 group/input">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Subject</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors text-slate-700 font-light cursor-pointer"
                                            >
                                                <option>Project Commission</option>
                                                <option>Collaboration</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2 group/input">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/input:text-purple-600 transition-colors">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-300 resize-none font-light text-slate-800"
                                                placeholder="Tell me about your vision..."
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100"
                                            >
                                                <AlertCircle size={16} />
                                                <span>{errorMessage}</span>
                                            </motion.div>
                                        )}

                                        <button
                                            disabled={status === 'loading'}
                                            className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-purple-600 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group/btn mt-4"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <span>Sending...</span>
                                                    <Loader2 size={16} className="animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
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