import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Resume',
    pathname: 'https://drive.google.com/file/d/1J1JtKOPMVMDxTokv7QrNK_5CDlxejXRj/view?usp=sharingf',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Instagram',
    url: `https://www.instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  /*{
    label: 'X',
    url: `https://www.instagram.com/${config.instagram}`,
    icon: 'x',
  },*/
];
