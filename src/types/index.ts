export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  highlight: boolean;
}

export interface Award {
  title: string;
  description: string;
}
