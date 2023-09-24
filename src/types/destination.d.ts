

export interface DestinationType {
    id:string;
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }

  export interface CrewMember {
    id: string;
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }

  export interface TechnologyItem {
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }