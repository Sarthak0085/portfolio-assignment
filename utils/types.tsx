export interface userData {
  _id: string;
  userName: string;
  email: string;
  about: {
    name: string;
    title: string;
    subTitle: string;
    exp_year: string;
    phoneNumber: string;
    some_total: string;
    quote: string;
    description: string;
    address: string;
    contactEmail: string;
    avatar: {
      public_id: string;
      url: string;
    };
    alternateAvatars: {
      public_id: string;
      url: string;
    }[];
  };
  projects: {
    _id: string;
    title: string;
    description: string;
    enabled: boolean;
    githuburl: string;
    liveurl: string;
    sequence: number;
    image: {
      public_id: string;
      url: string;
    };
    techStack: string[];
  }[];
  services: {
    _id: string;
    name: string;
    desc: string;
    charge: string;
    enabled: boolean;
    image: {
      public_id: string;
      url: string;
    };
  }[];
  skills: {
    _id: string;
    name: string;
    enabled: boolean;
    image: {
      public_id: string;
      url: string;
      _id: string;
    };
    sequence: number;
    percentage: number;
  }[];
  social_handles: {
    _id: string;
    enabled: boolean;
    platform: string;
    url: string;
    image: {
      public_id: string;
      url: string;
    };
  }[];
  testimonials: {
    _id: string;
    name: string;
    position: string;
    enabled: boolean;
    review: string;
    image: {
      public_id: string;
      url: string;
    };
  }[];
  timeline: {
    _id: string;
    company_name: string;
    enabled: boolean;
    forEducation: boolean;
    jobLocation: string;
    jobTitle: string;
    sequence: number;
    summary: string;
    bulletPoints: string[];
    startDate: string;
    endDate: string;
  }[];
  youtube: {
    _id: string;
    embedId: string;
    enabled: boolean;
    sequence: number;
    title: string;
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
