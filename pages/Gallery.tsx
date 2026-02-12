import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ProjectCategory, Project } from '../types';
import { getProjectsByCategory } from '../data/projects';
import { Play, Maximize2 } from 'lucide-react';

interface GalleryProps {
  title: string;
  category: ProjectCategory;
  description: string;
}

type Theme = 'light' | 'dark' | 'orange';

export const Gallery: React.FC<GalleryProps> = ({ title, category, description }) => {
  const navigate = useNavigate();
  const projects = getProjectsByCategory(category);

  // Determine Theme
  let theme: Theme = 'light';
  if (category === 'video') theme = 'dark';
  if (category === 'image') theme = 'orange';

  // Theme-specific configuration
  const themeConfig = {
    light: {
      bg: "bg-white text-slate-900",
      accent: "bg-slate-900",
      title: "text-slate-900",
      desc: "text-slate-500"
    },
    dark: {
      bg: "bg-black text-slate-100",
      accent: "bg-white",
      title: "text-white",
      desc: "text-slate-400"
    },
    orange: {
      bg: "bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white",
      accent: "bg-orange-600",
      title: "text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-700",
      desc: "text-slate-600"
    }
  };

  const currentStyle = themeConfig[theme];

  // Grid Layout
  const gridClassName = category === 'video'
    ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 pb-24"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pb-24";

  return (
    <PageTransition className={`${currentStyle.bg} min-h-screen relative overflow-hidden`}>

      {/* --- Backgrounds --- */}

      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80 z-0"></div>
          <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-purple-900/20 opacity-30 pointer-events-none blur-[120px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-blue-900/10 opacity-20 pointer-events-none blur-[120px] z-0"></div>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
        </>
      )}

      {theme === 'orange' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100/50 z-0"></div>
          {/* Dynamic Warm Lights */}
          <motion.div
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-orange-300/30 blur-[150px] pointer-events-none z-0 mix-blend-multiply"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-amber-200/40 blur-[150px] pointer-events-none z-0 mix-blend-multiply"
          />
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
        </>
      )}

      {theme === 'light' && (
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-slate-100 to-transparent opacity-60 pointer-events-none blur-3xl z-0"></div>
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-12 md:pt-20">

        {/* Header */}
        <div className="mb-24 md:mb-32 max-w-5xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1, delay: 0.1 }}
            className={`h-1 mb-8 ${currentStyle.accent}`}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`text-6xl md:text-8xl lg:text-9xl font-serif font-medium mb-8 tracking-tighter leading-[0.9] ${currentStyle.title}`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-xl md:text-2xl font-light leading-relaxed max-w-2xl ${currentStyle.desc}`}
          >
            {description}
          </motion.p>
        </div>

        {/* Grid */}
        <div className={gridClassName}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => navigate(`/project/${project.id}`)}
              theme={theme}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-20 text-center text-slate-400 font-light italic">
            Collection curating...
          </div>
        )}
      </div>
    </PageTransition>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  theme: Theme;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick, theme }) => {
  const isVideo = project.category === 'video' || !!project.youtubeId;
  const aspectRatioClass = isVideo ? 'aspect-video' : 'aspect-[4/5]';

  const styles = {
    light: {
      cardBg: 'bg-slate-100',
      placeholder: 'bg-slate-200',
      border: 'border-slate-200 group-hover:border-slate-900',
      title: 'text-slate-900 group-hover:text-purple-600',
      meta: 'text-slate-400',
      desc: 'text-slate-500',
    },
    dark: {
      cardBg: 'bg-slate-900',
      placeholder: 'bg-slate-800',
      border: 'border-white/20 group-hover:border-white',
      title: 'text-white group-hover:text-purple-400',
      meta: 'text-slate-500',
      desc: 'text-slate-400',
    },
    orange: {
      cardBg: 'bg-white',
      placeholder: 'bg-orange-100',
      border: 'border-orange-200 group-hover:border-orange-500',
      title: 'text-slate-900 group-hover:text-orange-600',
      meta: 'text-orange-900/60',
      desc: 'text-slate-500',
    }
  };

  const s = styles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group cursor-pointer flex flex-col gap-4"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${aspectRatioClass} ${s.cardBg} w-full shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-700 ease-[0.22,1,0.36,1] rounded-2xl`}>
        <div className={`absolute inset-0 animate-pulse ${s.placeholder}`} />
        {project.thumbnail.endsWith('.mp4') ? (
          <video
            src={project.thumbnail}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            loading="lazy"
          />
        )}

        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'orange' ? 'from-orange-900/40' : (theme === 'dark' ? 'from-black/80' : 'from-slate-900/40')} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`}></div>

        {/* Hover Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`w-16 h-16 backdrop-blur-md rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 ease-out shadow-xl ${theme === 'dark' ? 'bg-white' : 'border'} ${theme === 'orange' ? 'bg-orange-500/20 border-orange-200' : 'border-white/20 bg-white/10'}`}>
            {isVideo ? (
              <Play fill="currentColor" className={`ml-1 w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
            ) : (
              <Maximize2 className={`w-6 h-6 ${theme === 'orange' ? 'text-white' : 'text-white'}`} />
            )}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col gap-1 pt-2 px-1">
        <div className={`flex justify-between items-baseline border-b pb-4 transition-colors duration-700 ${s.border}`}>
          <h3 className={`text-2xl font-serif transition-colors duration-500 ${s.title}`}>{project.title}</h3>
          <span className={`text-xs font-bold uppercase tracking-widest ${s.meta}`}>{project.year}</span>
        </div>
        <p className={`text-sm font-light mt-2 line-clamp-2 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500 ${s.desc}`}>{project.shortDescription}</p>
      </div>
    </motion.div>
  );
};