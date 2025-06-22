// Team types for MeetTheTeam view and related components

export interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialty?: string;
  experience?: string;
  certifications?: string[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TeamFilter {
  id: string;
  name: string;
  category: string;
}

export interface TeamValue {
  title: string;
  description: string;
  icon: string;
  color?: string;
}
