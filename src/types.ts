
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
