import { useTranslations } from 'next-intl';

export const projects = [
  {
    title: 'Open-class booking system',
    description: `It is developed for open class reservations. It consists of Next.js(SSR), Zustand for state management, NextAuth for authentication, Firebase for DB functionality. It operates in the KR market and the current Github repo is a proto version. The final version is operated on the company's Google Cloud`,
    image: '/images/open-class-booking-system.png',
    tags: ['Next.js', 'Type-Script', 'zustand', 'next-auth', 'firebase'],
    source: 'https://github.com/jin-dev/devPlatform',

    id: 0,
  },
  {
    title: 'SNS Project(Clone)',
    description:
      'Self-development clone project: Implementing Server-Side Rendering(SSR) with Next.js and global-state management using zustand. Additionally, incorporating OAuth for Google login and retrieving API data from Sanity',
    image: '/images/SNS_clone_project.png',
    tags: ['Next.js', 'Type-Script', 'zustand', 'tailwindcss', 'sanity'],
    source: 'https://next-js-tik-tok-project.vercel.app/',

    id: 0,
  },

  {
    title: 'Admin Dashboard',
    description:
      'developed a React.js Admin Dashboard based on CoreUi Template. It offers convenient shortcuts for common management tasks. The dashboard predominantly utilizes React Hooks and uses global state management with Redux Tool Kit. ',
    image: '/images/Admin-Dashboard.png',
    tags: ['React', 'Type-Script', 'Redux Tool Kit'],
    source: 'https://github.com/jin-dev/admin_Dashboard',

    id: 1,
  },
  {
    title: 'BlockChain Trading Platform',
    description:
      'Sustaining a blockChain Trading Platform app bulit on React Nativ and applying the presentational & container design pattern.',
    image: '/images/currency-Platform.png',
    tags: ['React native'],
    source: 'https://google.com',

    id: 2,
  },
  {
    title: 'Next.js Core Project',
    description:
      'A skeleton Project based on Next.js with applied server-side rendering',
    image: '/images/nextJs-landing.png',
    tags: ['Next.js', 'Styled-component'],
    source: 'https://google.com',
    visit: 'https://github.com/jin-dev/next_js_skeleton.git',
    id: 3,
  },
  {
    title: 'Online-buzz search Platform',
    description:
      'This platform provided 8 million daily online data feeds including data from Facebook, Twitter and Instagram. it had major companies and universites as it`s primary clients, using the platform for marketing purposes.',
    image: '/images/nielsen-Dashboard.png',
    tags: ['Java-Spring', 'Apache Solr', 'Open-Source Analyzer'],
    source: 'https://google.com',

    id: 4,
  },
];

export const TimeLineData = [
  {
    year: 2011,
    text: 'Finished Bachelor in Computer Science at the University of Auckland',
  },
  { year: 2012, text: 'Worked at Qualcomm CDMA Korea' },
  { year: 2014, text: 'Worked at Nielsen Korea (Full-Stack)' },
  { year: 2018, text: 'Worked at OkEx Korea (Node.js React Native)' },
  { year: 2021, text: 'works at U Fintech Hub (React.js) ' },
];
