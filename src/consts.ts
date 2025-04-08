import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Abzal Orazbek",
  EMAIL: "abzalorazbek2003@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Blog",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Work",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Projects",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://twitter.com/abzal_orazbek",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/abzy128"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/abzal-orazbek",
  }
];
