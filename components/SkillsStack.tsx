import Image from 'next/image';
import React from 'react'


type ToolItem = {
    name: string;
    icon: string;
};

const SkillsArr: ToolItem[] = [
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


function SkillsStack() {
    return (
        <section className='grid grid-cols-2 gap-4 md:hidden mx-auto'>
           
            {SkillsArr.map((skill, index) => (
                <div className=' flex gap-2 justify-center border-2 p-1 rounded-sm shadow-sm items-center text-center' key={index}>
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        height={30}
                        width={30}
                    />
                    <div className=''>
                        <p className=' '>{skill.name}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SkillsStack