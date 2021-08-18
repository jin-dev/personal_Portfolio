import { useTranslations } from 'next-intl';



export const projects = [
  {
    title: 'Admin Dashboard',
    description: "developed React.js Admin Dashboard based on CoreUi Template, It provides convenient shortcuts for common management tasks. The dashboard is mostly based on React Hooks and global state managemtn with Redux Tool Kit. ",
      image: '/images/Admin-Dashboard.png',
      tags: ['React', 'Type-Script', 'Redux Tool Kit'],
    source: 'https://github.com/jin-dev/admin_Dashboard',
   
    id: 0,
  },
  {
    title: 'BlockChain Trading Platform',
    description: "Sustaining a blockChain Trading Platform app based on React Native. applied presentational & container design pattern.",
    image: '/images/currency-Platform.png',
    tags: ['React-Native'],
    source: 'https://google.com',
    
    id: 1,
  },
  {
    title: 'Next.js Core Project',
    description: "a skeleton Project based on Next.js. SSR(Server-Side Rendering) is applied. ",
    image: '/images/nextJs-landing.png',
    tags: ['Next.js', 'Styled-component'],
    source: 'https://google.com',
    visit: 'https://github.com/jin-dev/next_js_skeleton.git',
    id: 2,
  },
  {
    title: 'Online-buzz search Platform',
    description: "This platform provided 8million daily online data such as Facebook, Twitter and Instagram. some of major companies and universites were main clients for their marketing purpose. ",
    image: '/images/nielsen-Dashboard.png',
    tags: ['Java-Spring', 'Apache Solr', 'Open-Source Analyzer'],
    source: 'https://google.com',

    id: 3,
  },
];

export const TimeLineData = [
  { year: 2011, text: 'Finished Bachelor in Computer Science at the University of Auckland', },
  { year: 2012, text: 'Worked at Qualcomm CDMA Korea', },
  { year: 2014, text: 'Worked at Nielsen Korea (Full-Stack)', },
  { year: 2018, text: 'Worked at OkEx Korea (Node.js React Native)', },
  { year: 2021, text: 'works at U Fintech Hub (React.js) ', },
];