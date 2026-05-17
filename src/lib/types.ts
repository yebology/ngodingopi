import type { LOCALES } from './constants';

/** Supported locale type. */
export type Locale = (typeof LOCALES)[number];

/** Dictionary structure for i18n translations. */
export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
    secondary_cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      'web-app': ServiceItem;
      'ui-ux': ServiceItem;
      api: ServiceItem;
      maintenance: ServiceItem;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    view_project: string;
    projects: {
      'project-1': ProjectItem;
      'project-2': ProjectItem;
      'project-3': ProjectItem;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      'testimonial-1': TestimonialItem;
      'testimonial-2': TestimonialItem;
      'testimonial-3': TestimonialItem;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      experience: string;
      clients: string;
      satisfaction: string;
    };
    values_title: string;
    values: {
      quality: { title: string; description: string };
      communication: { title: string; description: string };
      innovation: { title: string; description: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
    info: {
      email: string;
      location: string;
      availability: string;
    };
  };
  footer: {
    description: string;
    links_title: string;
    contact_title: string;
    copyright: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
}
