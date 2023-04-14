import {
  mobile,
  cplusplus,
  python,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  nextjs,
  signLanguage,
  faceMask,
  expense,
  todo,
  carRental,
  youtubeClone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "darkgreen-text-gradient",
      },
    ],
    image: carRental,
    source_code_link: "https://github.com/kabeerx9/Kabeer-Rental_car.git",
  },
  {
    name: "Face Mask Detection",
    description:
      "Desktop Application to detect Face Mask with 4 different Labels.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "PyQT5",
        color: "blue-text-gradient",
      },
    ],
    image: faceMask,
    source_code_link: "https://github.com/kabeerx9/Face_Mask_Detection.git",
  },
  {
    name: "Sign Language Detection",
    description: "Project to convert American Sign Language to text real time.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
    ],
    image: signLanguage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Expense Tracker",
    description: "An app to keep track of past expenses with respective dates.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/",
  },
  {
    name: "Youtube Clone ",
    description:
      "Developed a youtube clone using ReactJS , MaterialUI and Rapid API",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "red-text-gradient",
      },
      {
        name: "React-Routing",
        color: "green-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/kabeerx9/Web-Dev-Projects.git",
  },
  {
    name: "TODO - LIST",
    description:
      "An advanced TODO app created with Antd and ReactJS with Filtering, Sorting and Tags.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Ant-design",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/kabeerx9/react-to-do-assignment.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
