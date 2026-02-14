
export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  imageUrl?: string;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  text: string;
}

export enum MenuSection {
  PROJECTS = 'PROJECTS'
}
