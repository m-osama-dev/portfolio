import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Next.js",
      "React.js",
      "Javascript",
      "Tailwind css",
      "HTML5/CSS3",
      "Git/Github",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor's Degree in Software Engineering",
      "Frontend Development Bootcamp",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "Meta Front-End Developer Certification",
      "Microsoft Certified: Azure Fundamentals",
    ],
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Responsive Design",
    description:
      "Creating modern, mobile-friendly, and responsive websites with pixel-perfect UI and smooth layouts.",
    Icon: DevicePhoneMobileIcon,
  },
  {
    id: 2,
    title: "Interactive Applications",
    description:
      "Component-driven SPA / SSR builds with state management, routing, forms, and animations.",
    Icon: CursorArrowRaysIcon,
  },
  {
    id: 3,
    title: "UI Integration with Backend",
    description:
      "Connecting UI with backend APIs, handling authentication, and optimizing performance for speed and SEO.",
    Icon: CloudArrowUpIcon,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A React portfolio highlighting skills, projects, and experience with a dynamic design.",
    image: "/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "http://osamacodescom.vercel.app",
  },
  {
    id: 2,
    title: "Food Restaurant Website",
    description:
      "An online food store that allows users to browse, buy, and securely manage recipes or foods.",
    image: "/2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://foodieland-liart.vercel.app",
  },
  {
    id: 3,
    title: "Redux Learning with Todo list",
    description:
      "A simple Todo List app built to learn Redux for state management, with tasks stored in local storage to persist data across sessions.",
    image: "/3.png",
    tag: ["All", "Mini"],
    gitUrl: "/",
    previewUrl: "http://redux-learning-lac.vercel.app",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "A responsive jewellery e-commerce site with product browsing, cart, wishlist, and smooth user experience across devices.",
    image: "/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://jewellery-store-six.vercel.app",
  },
  {
    id: 5,
    title: "Weather Website",
    description:
      "A weather website that provides real-time forecasts, temperature, and climate details for various locations.",
    image: "/5.png",
    tag: ["All", "Mini"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Sage buddy Website",
    description:
      "Sage Buddy is a smart business growth companion that helps streamline operations, boost productivity, and support decision-making with ease.",
    image: "/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://sage-buddy.vercel.app",
  },
];
