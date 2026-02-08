
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
      ...allImagesMedia
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
      ...allImagesMedia
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
      ...allImagesMedia
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
      ...allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
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
    media: allImagesMedia
  },
  {
    id: 'taco-reality',
    title: 'Taco Reality',
    category: 'image',
    shortDescription: 'Culinary refraction studies.',
    fullDescription: 'A study of light and form within a digital culinary space.',
    thumbnail: '/videos/taco v01 Medium.png',
    heroMedia: '/videos/taco v01 Medium.png',
    year: '2024',
    tags: ['Culinary', 'Refraction', '3D'],
    media: allImagesMedia
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
