import { TechStackIcons } from '@/lib/data';
import Image from 'next/image';
import React from 'react'
Image

interface IName{
    name:string
}

function ToolBadge({name}:IName) {

    const tool = TechStackIcons[name as keyof typeof TechStackIcons];

    return (
        <div
            className="flex gap-2 bg-black/10 dark:bg-white/10 backdrop-blur-sm p-1 pr-1.5 rounded-md"
        >
            {tool ? (
                <>
                    <Image src={tool.icon} alt={tool.name} width={23} height={23} />
                    <div>{tool.name}</div>
                </>
            ) : (
                <div className="text-sm opacity-70">{name}</div> // fallback if undefined
            )}
        </div>
    )
}

export default ToolBadge