'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowUpRightIcon, Github, Radio } from 'lucide-react'
import ToolBadge from './ToolBadge'

interface Iproject {
    name: string,
    projectType: string,
    projectImage: string,
    description: string,
    githubLink: string,
    livelink: string,
    tools: string[],
    invert: boolean
}

function Projects({ projectImage, name, projectType, description, githubLink, livelink, tools, invert }: Iproject) {
    console.log(tools);


    return (
        <section className=' lg:max-w-[70vw] mx-auto'>
            <div className= {` p-1 lg:flex ${invert ? "lg:flex-row-reverse":""} px-2 border-2 rounded-md my-2`} >
                {/* Image of Project */}
                <Image
                    src={`/assets/${projectImage}.png`}
                    alt={projectImage}
                    height={500}
                    width={500}
                    className='rounded-sm'
                />
                <div className=' my-auto flex flex-col px-2 py-1'>
                    {/* Title and Project type */}
                    <div className="w-fit my-auto ">
                        <h2 className="inline-block align-middle text-2xl font-extralight">{name}</h2>
                        <p className="inline-block align-middle text-xs text-gray-500 mr-2 mx-3 bg-gray-200 rounded-sm p-1">{projectType}</p>
                    </div>

                    {/* Description */}
                    <p className=' font-light  text-black dark:text-white/60'> {description}</p>
                    {/* Buttons */}
                    <div className=' flex flex-col gap-2 py-2'>
                        <Button size="sm" variant="outline"
                            onClick={() => window.open(githubLink, "_blank")}

                        >
                            <Github />
                            Github
                            <ArrowUpRightIcon />
                        </Button>
                        <Button size="sm" variant="outline"
                            className='bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800'
                            onClick={() => window.open(livelink, "_blank")}
                        >
                            <Radio />
                            Live Link
                            <ArrowUpRightIcon />
                        </Button>
                    </div>
                    {/* Skill badges */}
                    <span className="flex gap-2 flex-wrap border-t-2 py-3">
                        {
                            tools.map((tools) => (
                                <ToolBadge key={tools} name={tools} />
                            ))
                        }
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Projects