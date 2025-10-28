export const TechStackIcons = {
  Javascript: {
    name: "Javascript",
    icon: "/icons/js.png"
  },
  React: {
    name: "React",
    icon: "/icons/react.png"
  },
  Docker: {
    name: "Docker",
    icon: "/icons/Docker.png"
  },
  Express: {
    name: "Express",
    icon: "/icons/Express.png"
  },
  GraphQL: {
    name: "GraphQL",
    icon: "/icons/GraphQL.png"
  },
  MongoDB: {
    name: "MongoDB",
    icon: "/icons/MongoDB.png"
  },
  Nodejs: {
    name: "Node.js",
    icon: "/icons/Node.js.png"
  },
  Postman: {
    name: "Postman",
    icon: "/icons/Postman.png"
  },
  Redis: {
    name: "Redis",
    icon: "/icons/Redis.png"
  },
  Tailwind: {
    name: "Tailwind CSS",
    icon: "/icons/Tailwind CSS.png"
  },
  Typescript: {
    name: "Typescript",
    icon: "/icons/Typescript.png"
  },
  ShadCn: {
    name: "ShadCn",
    icon: "/icons/shadcn.png"
  },
} as const;

export interface Iproject {
  name: string;
  projectType: string;
  projectImage: string;
  description: string;
  githubLink: string;
  livelink: string;
  tools: string;
}

export const projects: Iproject[] = [
  {
    name: "SmartDataX",
    projectType: "Full Stack • Data Dashboard",
    projectImage: "smartdatax",
    description:
      "A full-stack analytics dashboard that visualizes and monitors real-time business metrics. Built with a modular architecture for easy integration of data sources and user management.",
    githubLink: "https://github.com/omkute/smartdatax",
    livelink: "https://smartdatax.vercel.app",
    tools: " TailwindCSS, TypeScript",
  },
  {
    name: "DocOnTime",
    projectType: "Web App • Productivity",
    projectImage: "smartdatax",
    description:
      "A medical appointment scheduling system built for doctors and patients with real-time slot management, JWT authentication, and role-based dashboards.",
    githubLink: "https://github.com/omkute/docontime",
    livelink: "https://docontime.vercel.app",
    tools: " TailwindCSS, TypeScript",
  },
  {
    name: "TradeSpark",
    projectType: "Hackathon Project • FinTech",
    projectImage: "smartdatax",
    description:
      "A simulated stock trading platform for student startups, inspired by SEBBA. Allows companies to register, issue shares, and trade with real-time updates and analytics.",
    githubLink: "https://github.com/omkute/tradespark",
    livelink: "https://tradespark.vercel.app",
    tools: " TailwindCSS, TypeScript",
  },
  {
    name: "CampusConnect",
    projectType: "Mobile-First • Community",
    projectImage: "smartdatax",
    description:
      "A social app connecting college students through clubs, events, and study groups. Built with an intuitive UI and integrated real-time chat using Socket.io.",
    githubLink: "https://github.com/omkute/campusconnect",
    livelink: "https://campusconnect.vercel.app",
    tools: " TailwindCSS, TypeScript",
  },
  {
    name: "AutoVision",
    projectType: "AI Project • Computer Vision",
    projectImage: "smartdatax",
    description:
      "An AI-powered number plate recognition system that identifies vehicles and logs entry data automatically. Designed for parking automation and security systems.",
    githubLink: "https://github.com/omkute/autovision",
    livelink: "https://autovision.vercel.app",
    tools: " TailwindCSS, TypeScript",
  },
];


export type ToolKey = keyof typeof TechStackIcons;
export type ToolItem = (typeof TechStackIcons)[ToolKey];


export function getTool(tool: ToolKey): ToolItem {
  return TechStackIcons[tool];
}


