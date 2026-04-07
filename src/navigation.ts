import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Mentoring',
      href: getPermalink('/mentoring'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Book a Call',
      href: 'https://calendly.com/mayankbhasin007/new-meeting',
      target: '_blank',
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Mentoring', href: getPermalink('/mentoring') },
        { text: 'Portfolio', href: getPermalink('/portfolio') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Offerings',
      links: [
        { text: 'For Small Businesses', href: getPermalink('/portfolio#offerings') },
        { text: 'For Individuals', href: getPermalink('/portfolio#offerings') },
        { text: 'For Universities', href: getPermalink('/portfolio#offerings') },
        { text: 'AI Strategy', href: getPermalink('/portfolio#offerings') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: "PM's AI Toolkit", href: getPermalink('/pm-ai-toolkit') },
        { text: 'AI Tech Stack Guide', href: getPermalink('/ai-tech-stack-guide-knowledge-workers') },
        { text: 'Autonomous Engineering Manifesto', href: getPermalink('/autonomous-engineering-manifesto') },
        { text: 'All Articles', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/mayankbhasin/' },
        { text: 'GitHub', href: 'https://github.com/mayank-bhasin' },
        { text: 'Contact Me', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mayankbhasin/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mayank-bhasin' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Clarity AI by Mayank Bhasin. All rights reserved.
  `,
};
