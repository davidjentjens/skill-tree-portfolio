export interface Skill {
    label: string;
    subLabel?: string;
    details?: string;
    color?: string;
    proficiencyLevel?: number;
    yearsExperience?: number;
    year?: number;
    category?: string;
    icon?: string;
    projects?: Project[];
}
  
export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    technologies: string[];
    company: string;
    year: number;
}