"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ToolItem = {
  name: string;
  icon: string;
};
// dd

const defaultItems: ToolItem[] = [
  {
    name: "Javascript",
    icon: "/icons/js.png"
  },
  {
    name: "React",
    icon: "/icons/react.png"
  },
  {
    name: "Docker",
    icon: "/icons/Docker.png"
  },
  {
    name: "Express",
    icon: "/icons/Express.png"
  },
  {
    name: "GraphQL",
    icon: "/icons/GraphQL.png"
  },
  {
    name: "MongoDB",
    icon: "/icons/MongoDB.png"
  },
  {
    name: "Node.js",
    icon: "/icons/Node.js.png"
  },
  {
    name: "Postman",
    icon: "/icons/Postman.png"
  },
  {
    name: "React.js",
    icon: "/icons/react.png"
  },
  {
    name: "Redis",
    icon: "/icons/Redis.png"
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/Tailwind CSS.png"
  },
  {
    name: "Typescript",
    icon: "/icons/Typescript.png"
  }
];

export default function SkillsSlider() {
  return (
    <div className="relative w-full my-2 overflow-hidden lg:py-6 hidden lg:block">
      <h1 className=" my-4 text-xl">Tools I Have Used </h1>
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)"
        }}
      >
        <motion.div
          className="flex gap-12 w-[200%] marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...defaultItems, ...defaultItems,].map((icon, i) =>
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 rounded-lg px-4 lg:px-9 py-2 bg-black/10 dark:bg-white/10 backdrop-blur-sm lg:backdrop-blur-3xl"
            >
              {/* {icon.icon} */}
              <Image src={icon.icon} alt="icon" width={24} height={24} />
              <span className="whitespace-nowrap text-sm lg:text-lg">
                {icon.name}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}