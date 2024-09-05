const { icons } = require('@/assets');

const SKILLS = [
  {
    id: 1,
    name: 'HTML',
    level: 'Advanced',
    icon: icons.htmlIcon,
  },
  {
    id: 2,
    name: 'CSS',
    level: 'Advanced',
    icon: icons.cssIcon,
  },
  {
    id: 3,
    name: 'Javascript',
    level: 'Intermediate',
    icon: icons.jsIcon,
  },
  {
    id: 4,
    name: 'ReactJs',
    level: 'Intermediate',
    icon: icons.reactIcon,
  },
  {
    id: 5,
    name: 'NextJs',
    level: 'Intermediate',
    icon: icons.nextjsIcon,
  },
  {
    id: 6,
    name: 'TailwindCSS',
    level: 'Intermediate',
    icon: icons.tailwindIcon,
  },
  {
    id: 7,
    name: 'Typescript',
    level: 'Basic',
    icon: icons.typescriptIcon,
  },
  {
    id: 8,
    name: 'Bootstrap',
    level: 'Basic',
    icon: icons.bootstrapIcon,
  },
  {
    id: 9,
    name: 'Mysql',
    level: 'Basic',
    icon: icons.mysqlIcon,
  },
  {
    id: 10,
    name: 'NodeJs',
    level: 'Intermediate',
    icon: icons.nodeIcon,
  },
  {
    id: 11,
    name: 'ExpressJs',
    level: 'Intermediate',
    icon: icons.expressIcon,
  },
  {
    id: 12,
    name: 'Webpack',
    level: 'Basic',
    icon: icons.webpackIcon,
  },
  {
    id: 13,
    name: 'Firebase',
    level: 'Basic',
    icon: icons.firebaseIcon,
  },
  {
    id: 14,
    name: 'MongoDB',
    level: 'Basic',
    icon: icons.mongodbIcon,
  },
];

const TOOLS = [
  {
    id: 1,
    name: 'VSCode',
    icon: icons.vsCodeIcon,
    level: 'Intermediate',
  },
  {
    id: 2,
    name: 'Github',
    icon: icons.githubIcon,
    level: 'Intermediate',
  },
  {
    id: 3,
    name: 'Figma',
    icon: icons.figmaIcon,
    level: 'Basic',
  },
  {
    id: 4,
    name: 'Git',
    icon: icons.gitIcon,
    level: 'Basic',
  },
];

export { SKILLS, TOOLS };
