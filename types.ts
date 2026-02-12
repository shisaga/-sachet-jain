export type ProjectCategory = 'image' | 'video' | 'project' | 'experiment';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  youtubeId?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  heroMedia: string; // URL for hero image or video poster
  media: ProjectMedia[];
  year: string;
  tags: string[];
  youtubeId?: string;
}