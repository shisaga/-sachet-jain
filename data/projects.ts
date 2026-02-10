
import { Project, ProjectCategory, ProjectMedia } from '../types';

const allImagesMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/8l Medium.png', aspectRatio: 'portrait', caption: 'Phase 1: Liquid State' },
  { type: 'image', url: '/videos/ChatGPT Image Sep 28, 2025, 11_42_36 AM Medium.png', aspectRatio: 'portrait', caption: 'Latent Space Exploration' },
  { type: 'image', url: '/videos/Lucid_Origin_.png', aspectRatio: 'portrait', caption: 'Neural Expression' },
  { type: 'image', url: '/videos/Whisk_d991ce2a22a0e8a9484463428b48a1dedr Medium.png', aspectRatio: 'portrait', caption: 'Aether Bloom Study' },
  { type: 'image', url: '/videos/a_cinematic_tight_medium_shot_of_a_man_running_directly_toward_the_camera_in_the_desert_under_harsh_kw35gebnhe16i33dght0_0 Medium.png', aspectRatio: 'portrait', caption: 'The Infinite Pursuit' },
  { type: 'image', url: '/videos/blender Medium.png', aspectRatio: 'portrait', caption: 'Silicon Structures' },
  { type: 'image', url: '/videos/dd Medium.png', aspectRatio: 'portrait', caption: 'Minimalist Void' },
  { type: 'image', url: '/videos/nike neon Medium.png', aspectRatio: 'portrait', caption: 'Neon Gothic' },
  { type: 'image', url: '/videos/taco v01 Medium.png', aspectRatio: 'portrait', caption: 'Refraction & Form' }
];


const cyberGothicMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/cyber-gothic/1.png', aspectRatio: 'square', caption: 'Neo-Gothic Cathedral' },
  { type: 'image', url: '/videos/cyber-gothic/2.png', aspectRatio: 'square', caption: 'Cybernetic Gargoyle' },
  { type: 'image', url: '/videos/cyber-gothic/3.png', aspectRatio: 'square', caption: 'Stained Glass Mechanics' },
  { type: 'image', url: '/videos/cyber-gothic/4.png', aspectRatio: 'square', caption: 'The Cyber Knight' },
];

const nanoSkinMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/nano-skin/1.png', aspectRatio: 'square', caption: 'Synthetic Biometrics' },
  { type: 'image', url: '/videos/nano-skin/2.png', aspectRatio: 'square', caption: 'Neural Interface' },
  { type: 'image', url: '/videos/nano-skin/3.png', aspectRatio: 'square', caption: 'Bio-Digital Fusion' },
  { type: 'image', url: '/videos/nano-skin/4.png', aspectRatio: 'square', caption: 'Data Veins' },
  { type: 'image', url: '/videos/nano-skin/5.png', aspectRatio: 'square', caption: 'Molecular Circuitry' },
];

const neuralPortraitsMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/neural-portraits/1.png', aspectRatio: 'square', caption: 'The Observer' },
  { type: 'image', url: '/videos/neural-portraits/2.png', aspectRatio: 'square', caption: 'Synthetic Gaze' },
  { type: 'image', url: '/videos/neural-portraits/3.png', aspectRatio: 'square', caption: 'Digital Soul' },
  { type: 'image', url: '/videos/neural-portraits/4.png', aspectRatio: 'square', caption: 'Echoes of Humanity' },
  { type: 'image', url: '/videos/neural-portraits/5.png', aspectRatio: 'square', caption: 'Neural Resonance' },
  { type: 'image', url: '/videos/neural-portraits/6.png', aspectRatio: 'square', caption: 'The Architect' },
];

const takoyakiBallsMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/neural-portraits/1.png', aspectRatio: 'square', caption: 'Culinary Texture' },
  { type: 'image', url: '/videos/neural-portraits/2.png', aspectRatio: 'square', caption: 'Street Food Art' },
  { type: 'image', url: '/videos/neural-portraits/3.png', aspectRatio: 'square', caption: 'Golden Perfection' },
  { type: 'image', url: '/videos/neural-portraits/4.png', aspectRatio: 'square', caption: 'Sauce Drizzle' },
  { type: 'image', url: '/videos/neural-portraits/5.png', aspectRatio: 'square', caption: 'Sizzling Surface' },
  { type: 'image', url: '/videos/neural-portraits/6.png', aspectRatio: 'square', caption: 'Flavor Matrix' },
];

const desertRunnerMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/desert-runner/1.png', aspectRatio: 'square', caption: 'Endless Horizon' },
  { type: 'image', url: '/videos/desert-runner/2.png', aspectRatio: 'square', caption: 'Running Against Time' },
  { type: 'image', url: '/videos/desert-runner/3.png', aspectRatio: 'square', caption: 'Heat Haze' },
  { type: 'image', url: '/videos/desert-runner/4.png', aspectRatio: 'square', caption: 'Solitude' },
];

const formula1Media: ProjectMedia[] = [
  { type: 'image', url: '/videos/formula-1/1.png', aspectRatio: 'square', caption: 'Race Day' },
  { type: 'image', url: '/videos/formula-1/2.png', aspectRatio: 'square', caption: 'Pit Stop' },
  { type: 'image', url: '/videos/formula-1/3.png', aspectRatio: 'square', caption: 'Victory Lap' },
  { type: 'image', url: '/videos/formula-1/4.png', aspectRatio: 'square', caption: 'Podium' },
];




const voltForgeMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/volt-forge/1.png', aspectRatio: 'square', caption: 'Electric Core' },
  { type: 'image', url: '/videos/volt-forge/2.png', aspectRatio: 'square', caption: 'Industrial Power' },
  { type: 'image', url: '/videos/volt-forge/3.png', aspectRatio: 'square', caption: 'Energy Flow' },
  { type: 'image', url: '/videos/volt-forge/4.png', aspectRatio: 'square', caption: 'Tech Aesthetics' },
  { type: 'image', url: '/videos/volt-forge/5.png', aspectRatio: 'square', caption: 'Circuit Glow' },
  { type: 'image', url: '/videos/volt-forge/6.png', aspectRatio: 'square', caption: 'High Voltage' },
];

const voidTexturesMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/void-textures/2.png', aspectRatio: 'square', caption: 'Minimalist Noise' },
  { type: 'image', url: '/videos/void-textures/3.png', aspectRatio: 'square', caption: 'Dark Matter' },
  { type: 'image', url: '/videos/void-textures/4.png', aspectRatio: 'square', caption: 'Deep Space' },
  { type: 'image', url: '/videos/void-textures/5.png', aspectRatio: 'square', caption: 'Dark Time Space' },
  { type: 'image', url: '/videos/void-textures/6.png', aspectRatio: 'square', caption: 'Time Pixle' },
  { type: 'image', url: '/videos/void-textures/7.png', aspectRatio: 'square', caption: 'Void Horizon' },
];

const neonGothicMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/neon-gothic/1.png', aspectRatio: 'square', caption: 'Neo-Gothic Cathedral' },
  { type: 'image', url: '/videos/neon-gothic/2.png', aspectRatio: 'square', caption: 'Cybernetic Gargoyle' },
  { type: 'image', url: '/videos/neon-gothic/3.png', aspectRatio: 'square', caption: 'Stained Glass Mechanics' },
  { type: 'image', url: '/videos/neon-gothic/4.png', aspectRatio: 'square', caption: 'The Cyber Knight' },

];

const tacoRealityMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/taco-reality/1.png', aspectRatio: 'square', caption: 'Culinary Texture' },
  { type: 'image', url: '/videos/taco-reality/2.png', aspectRatio: 'square', caption: 'Street Food Art' },
  { type: 'image', url: '/videos/taco-reality/3.png', aspectRatio: 'square', caption: 'Golden Perfection' },
  { type: 'image', url: '/videos/taco-reality/4.png', aspectRatio: 'square', caption: 'Sauce Drizzle' },
  { type: 'image', url: '/videos/taco-reality/5.png', aspectRatio: 'square', caption: 'Crispy Geometry' },
  { type: 'image', url: '/videos/taco-reality/6.png', aspectRatio: 'square', caption: 'Flavor Explosion' },
];
const chronosReflectionMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/chronos-reflection/1.png', aspectRatio: 'square', caption: 'Time Manipulation' },
  { type: 'image', url: '/videos/chronos-reflection/2.png', aspectRatio: 'square', caption: 'Temporal Distortion' },
  { type: 'image', url: '/videos/chronos-reflection/3.png', aspectRatio: 'square', caption: 'Past & Future' },
  { type: 'image', url: '/videos/chronos-reflection/5.png', aspectRatio: 'square', caption: 'Time Travel' },
  { type: 'image', url: '/videos/chronos-reflection/6.png', aspectRatio: 'square', caption: 'Epoch Shift' },
  { type: 'image', url: '/videos/chronos-reflection/7.png', aspectRatio: 'square', caption: 'Infinity Mirror' },
];

const queenMedia: ProjectMedia[] = [
  { type: 'image', url: '/videos/queen/1.png', aspectRatio: 'square', caption: 'Queen' },
  { type: 'image', url: '/videos/queen/2.png', aspectRatio: 'square', caption: 'Queen' },
  { type: 'image', url: '/videos/queen/3.png', aspectRatio: 'square', caption: 'Queen' },
  { type: 'image', url: '/videos/queen/4.png', aspectRatio: 'square', caption: 'Queen' },
];



export const projects: Project[] = [
  {
    id: 'formula-1',
    title: 'Formula 1',
    category: 'video',
    shortDescription: 'Cinematic motorsport reimagined.',
    fullDescription: 'A high-octane exploration of Formula 1 racing, generated using the latest video synthesis models.',
    thumbnail: 'https://images.unsplash.com/photo-1598460673327-023a1050e503?q=80&w=2600&auto=format&fit=crop',
    heroMedia: '/videos/f1.mp4',
    year: '2024',
    tags: ['Veo', 'Motorsport', 'Cinematic'],
    media: [
      { type: 'video', url: '/videos/f1.mp4', aspectRatio: 'landscape' },
      allImagesMedia[5],
      allImagesMedia[8]
    ]
  },
  {
    id: 'wild-life',
    title: 'Wild Life',
    category: 'video',
    shortDescription: 'Accelerated biological evolution.',
    fullDescription: 'Wild Life explores the capacity of AI to simulate complex biological systems.',
    thumbnail: '/videos/Majestic_Tiger_s_Jungle_Stare.mp4',
    heroMedia: '/videos/Majestic_Tiger_s_Jungle_Stare.mp4',
    year: '2024',
    tags: ['Nature', 'AI Video', 'Creature'],
    media: [
      { type: 'video', url: '/videos/Majestic_Tiger_s_Jungle_Stare.mp4', aspectRatio: 'landscape' },
      allImagesMedia[2],
      allImagesMedia[4]
    ]
  },
  {
    id: 'fpv-shots',
    title: 'FPV Shots',
    category: 'video',
    shortDescription: 'Drone Dynamics.',
    fullDescription: 'High-speed cinematic FPV drone shots across diverse landscapes.',
    thumbnail: '/videos/fpv.mp4',
    heroMedia: '/videos/fpv.mp4',
    year: '2024',
    tags: ['FPV', 'Action', 'Cinematic'],
    media: [
      { type: 'video', url: '/videos/fpv.mp4', aspectRatio: 'landscape' },
      allImagesMedia[6],
      allImagesMedia[7]
    ]
  },
  {
    id: 'cinematic-visuals',
    title: 'Cinematic Visuals',
    category: 'video',
    shortDescription: 'Motion Art.',
    fullDescription: 'Experimental motion art and cinematic visual storytelling.',
    thumbnail: '/videos/iad.mp4',
    heroMedia: '/videos/iad.mp4',
    year: '2024',
    tags: ['Motion', 'Experimental', 'Visuals'],
    media: [
      { type: 'video', url: '/videos/iad.mp4', aspectRatio: 'landscape' },
      allImagesMedia[0],
      allImagesMedia[3]
    ]
  },
  {
    id: 'chronos-reflection',
    title: 'Chronos Reflection',
    category: 'image',
    shortDescription: 'Liquid light studies.',
    fullDescription: 'Temporal distortion and fluid dynamics captured in states of impossible refraction.',
    thumbnail: '/videos/8l Medium.png',
    heroMedia: '/videos/8l Medium.png',
    year: '2024',
    tags: ['Generative', 'Fluid', 'Light'],
    media: chronosReflectionMedia
  },
  {
    id: 'nano-skin',
    title: 'Nano Skin',
    category: 'image',
    shortDescription: 'Synthetic biometrics.',
    fullDescription: 'A deep dive into synthetic textures, exploring the boundary between biology and nanotechnology.',
    thumbnail: '/videos/ChatGPT Image Sep 28, 2025, 11_42_36 AM Medium.png',
    heroMedia: '/videos/ChatGPT Image Sep 28, 2025, 11_42_36 AM Medium.png',
    year: '2024',
    tags: ['Nanotech', 'Biometrics', 'Synthetic'],
    media: nanoSkinMedia
  },
  {
    id: 'neural-portraits',
    title: 'Neural Portraits',
    category: 'image',
    shortDescription: 'Faces from the machine.',
    fullDescription: 'High-fidelity portraits of individuals who have never existed.',
    thumbnail: '/videos/Lucid_Origin_.png',
    heroMedia: '/videos/Lucid_Origin_.png',
    year: '2024',
    tags: ['Portrait', 'Human', 'Emotion'],
    media: neuralPortraitsMedia
  },
  {
    id: 'takoyaki-balls',
    title: 'Takoyaki Balls',
    category: 'image',
    shortDescription: 'Culinary digital art.',
    fullDescription: 'An exploration of texture and form within the digital culinary landscape.',
    thumbnail: '/videos/Whisk_d991ce2a22a0e8a9484463428b48a1dedr Medium.png',
    heroMedia: '/videos/Whisk_d991ce2a22a0e8a9484463428b48a1dedr Medium.png',
    year: '2023',
    tags: ['Culinary', 'Digital Art', 'Texture'],
    media: tacoRealityMedia
  },
  {
    id: 'desert-runner',
    title: 'Desert Runner',
    category: 'image',
    shortDescription: 'Endless Pursuit.',
    fullDescription: 'A cinematic sequence of a man running through a harsh desert landscape.',
    thumbnail: '/videos/a_cinematic_tight_medium_shot_of_a_man_running_directly_toward_the_camera_in_the_desert_under_harsh_kw35gebnhe16i33dght0_0 Medium.png',
    heroMedia: '/videos/a_cinematic_tight_medium_shot_of_a_man_running_directly_toward_the_camera_in_the_desert_under_harsh_kw35gebnhe16i33dght0_0 Medium.png',
    year: '2024',
    tags: ['Desert', 'Cinematic', 'Motion'],
    media: takoyakiBallsMedia
  },
  {
    id: 'volt-forge',
    title: 'VoltForge',
    category: 'image',
    shortDescription: 'Industrial electric artistry.',
    fullDescription: 'A visual journey into the microscopic world of processors, reimagined as a high-voltage industrial forge.',
    thumbnail: '/videos/blender Medium.png',
    heroMedia: '/videos/blender Medium.png',
    year: '2024',
    tags: ['Industrial', 'Electric', 'Tech'],
    media: voltForgeMedia
  },
  {
    id: 'void-textures',
    title: 'Void Textures',
    category: 'image',
    shortDescription: 'Negative space and noise.',
    fullDescription: 'Experimental outputs focusing on minimalist digital artifacts.',
    thumbnail: '/videos/dd Medium.png',
    heroMedia: '/videos/dd Medium.png',
    year: '2024',
    tags: ['Abstract', 'Minimalism', 'Noise'],
    media: voidTexturesMedia
  },
  {
    id: 'cyber-gothic',
    title: 'Cyber Gothic',
    category: 'image',
    shortDescription: 'Cathedrals of the digital age.',
    fullDescription: 'Fusing medieval gothic architecture with cyberpunk aesthetics.',
    thumbnail: '/videos/nike neon Medium.png',
    heroMedia: '/videos/nike neon Medium.png',
    year: '2023',
    tags: ['Architecture', 'Gothic', 'Neon'],
    media: cyberGothicMedia
  },
  {
    id: 'queen',
    title: 'Queen',
    category: 'image',
    shortDescription: 'Engineered elegance ',
    fullDescription: 'where precision meets timeless jewellery design.',
    thumbnail: '/videos/queen/1.png',
    heroMedia: '/videos/queen/1.png',
    year: '2024',
    tags: ['Jewellery', 'Luxury', '3D'],
    media: queenMedia
  },
  {
    id: 'cyber-ferrari',
    title: 'Cyber Ferrari',
    category: 'video',
    shortDescription: 'The height of synthetic speed.',
    fullDescription: 'A hyper-realistic video generation of a Ferrari, exploring the intersection of automotive design and AI synthesis.',
    thumbnail: '/videos/ai visuals/ferrari.mp4',
    heroMedia: '/videos/ai visuals/ferrari.mp4',
    year: '2025',
    tags: ['Automotive', 'Cyberpunk', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/ferrari.mp4', aspectRatio: 'landscape' }]
  },
  {
    id: 'mclaren-synthesis',
    title: 'McLaren Synthesis',
    category: 'video',
    shortDescription: 'Precision in motion.',
    fullDescription: 'Visualizing the aerodynamic perfection of McLaren through neural cinematography.',
    thumbnail: '/videos/ai visuals/McLaren.mp4',
    heroMedia: '/videos/ai visuals/McLaren.mp4',
    year: '2025',
    tags: ['Automotive', 'Precision', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/McLaren.mp4', aspectRatio: 'landscape' }]
  },
  {
    id: 'snow-leopard',
    title: 'Snow Leopard',
    category: 'video',
    shortDescription: 'Ethereal wildlife observation.',
    fullDescription: 'Capturing the majestic and elusive nature of the snow leopard in a synthetically generated alpine habitat.',
    thumbnail: '/videos/ai visuals/Snow_Leopard.mp4',
    heroMedia: '/videos/ai visuals/Snow_Leopard.mp4',
    year: '2025',
    tags: ['Wildlife', 'Nature', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/Snow_Leopard.mp4', aspectRatio: 'landscape' }]
  },
  {
    id: 'elephantine-motion',
    title: 'Elephant',
    category: 'video',
    shortDescription: 'Gentle giants in focus.',
    fullDescription: 'A study of the graceful and powerful movements of elephants, rendered with hyper-realistic detail.',
    thumbnail: '/videos/ai visuals/Elephant_.mp4',
    heroMedia: '/videos/ai visuals/Elephant_.mp4',
    year: '2025',
    tags: ['Wildlife', 'Scale', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/Elephant_.mp4', aspectRatio: 'landscape' }]
  },
  {
    id: 'neural-fpv',
    title: 'Neural FPV',
    category: 'video',
    shortDescription: 'A first-person journey through AI.',
    fullDescription: 'High-speed FPV-style exploration of AI-generated landscapes, pushing the boundaries of spatial rendering.',
    thumbnail: '/videos/ai visuals/fpv.mp4',
    heroMedia: '/videos/ai visuals/fpv.mp4',
    year: '2025',
    tags: ['FPV', 'Action', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/fpv.mp4', aspectRatio: 'landscape' }]
  },
  {
    id: 'culinary-pizza',
    title: 'AI Pizza',
    category: 'video',
    shortDescription: 'Sizzling digital textures.',
    fullDescription: 'Exploring the intricate details of light, texture, and steam in a hyper-realistic culinary simulation of a pizza.',
    thumbnail: '/videos/ai visuals/pizza.mp4',
    heroMedia: '/videos/ai visuals/pizza.mp4',
    year: '2025',
    tags: ['Culinary', 'Texture', 'AI Video'],
    media: [{ type: 'video', url: '/videos/ai visuals/pizza.mp4', aspectRatio: 'landscape' }]
  }
];

export const getProjectsByCategory = (category: ProjectCategory) => {
  return projects.filter(p => p.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};

export const getNextProject = (currentId: string) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

export const getPrevProject = (currentId: string) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  return projects[prevIndex];
}
