export interface Skill {
    label: string;
    subLabel?: string;
    color?: string;
    proficiencyLevel?: number;
    yearsExperience?: number;
    category?: string;
    icon?: string;
    projects?: Project[];
}
  
export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    company: string;
    year: number;
}