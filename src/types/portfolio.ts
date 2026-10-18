export type AccentColor = "cyan" | "purple" | "pink" | "mint" | "blue";

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly shortDescription: string;
  readonly accentColor: AccentColor;
  readonly deliverables: readonly string[];
  readonly technologies: readonly string[];
  readonly approach: string;
  readonly isProposed?: boolean;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly problemAddressed: string;
  readonly mainFeatures: readonly string[];
  readonly technologies: readonly string[];
  readonly status: "Active" | "In Development" | "Planned";
  readonly detailedInformation: string;
  readonly externalUrl?: string;
  readonly repoUrl?: string;
  readonly isPlaceholder: boolean;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly photoUrl?: string;
  readonly initials: string;
  readonly skills: readonly string[];
  readonly profileUrl?: string;
  readonly isPlaceholder: boolean;
}

export interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly isPlaceholder?: boolean;
}

export interface SocialLink {
  readonly platform: string;
  readonly url?: string;
  readonly isConfigured: boolean;
}
