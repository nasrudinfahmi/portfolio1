const { photo, icons } = require('@/assets');

const PORTFOLIOS = [
  {
    id: 1,
    name: 'Gemilangku',
    description:
      'Gemilang is a modern e-commerce portfolio built with ReactJS, Express, Tailwind, and Firebase.',
    href: 'https://gemilangku.netlify.app/',
    github: 'https://github.com/nasrudinfahmi/gemilang/',
    photo: photo.gemilangku,
    alt: 'Gemilangku',
    tech: [
      {
        name: 'ReactJS',
        icon: icons.reactIcon,
      },
      {
        name: 'Tailwind',
        icon: icons.tailwindIcon,
      },
      {
        name: 'ExpressJS',
        icon: icons.expressIcon,
      },
    ],
  },
  {
    id: 2,
    name: 'E-Groceries',
    description:
      'I have recently completed slicing the landing page for a mini course by RevoU, titled Intro to Software Engineering. This project involved converting designs into responsive code following modern UI/UX principles',
    href: 'https://revou-fundamental-course.github.io/18-sep-23-nasrudinfahmi/',
    github:
      'https://github.com/revou-fundamental-course/18-sep-23-nasrudinfahmi/',
    photo: photo.LpRevou,
    alt: 'E-Groceries',
    tech: [
      {
        name: 'HTML',
        icon: icons.htmlIcon,
      },
      {
        name: 'CSS',
        icon: icons.cssIcon,
      },
      {
        name: 'Javascript',
        icon: icons.jsIcon,
      },
    ],
  },
  {
    id: 3,
    name: 'Catatan App',
    description:
      'A note-taking application based on HTML, CSS, and JavaScript with comprehensive features for managing notes',
    href: 'https://catatan-app.netlify.app/',
    github: 'https://github.com/nasrudinfahmi/catatan-app/',
    photo: photo.noteApp,
    alt: 'Catatan app',
    tech: [
      {
        name: 'HTML',
        icon: icons.htmlIcon,
      },
      {
        name: 'CSS',
        icon: icons.cssIcon,
      },
      {
        name: 'Javascript',
        icon: icons.jsIcon,
      },
    ],
  },
];

export { PORTFOLIOS };
