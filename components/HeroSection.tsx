import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <section className=' w-full lg:max-w-[80vw] mx-auto lg:h-[70vh] lg:flex items-center justify-center'>
            <div className=' p-3 lg:min-w-[40%] '>
                <div className=' items-center flex flex-col'>
                    <Image
                        src='https://avatars.githubusercontent.com/u/142393952?v=4'
                        alt='Profile Image'
                        width={200}
                        height={200}
                        className=' rounded-full '
                    />
                    <span className=' font-extralight'>Developer • Designer • Builder</span>
                    <p className=' font-bold text-lg'>Om Santosh Kute</p>
                </div>
            </div>
            <div className='font-extralight text-gray-700 dark:text-gray-500 space-y-2 text-lg'>
                <p className='  '>
                    Hii, I’m {" "}
                    <span className='underline decoration-blue-500 decoration-wavy underline-offset-5 hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]'>Om</span>  <br />
                    A computer science undergrad from {" "}
                    <span className='underline decoration-blue-500 decoration-wavy underline-offset-5 hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]'>

                        Buldhana,Maharashtra
                    </span>
                    {" "}who loves turning ideas into real, working products. I live at the intersection of design and development, I make things that look good and actually work.
                </p>
                <p>From building
                    {" "}
                    <span className='underline decoration-blue-500 decoration-wavy underline-offset-5 hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]'>
                        dashboards
                    </span>
                    {" "}
                    and
                    {" "}
                    <span className='underline decoration-blue-500 decoration-wavy underline-offset-5 hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]'>

                        Next.js
                    </span>
                    {" "}
                    Authernitcation systems to AI-powered systems and hackathon projects, I’m always experimenting, learning, and shipping. I believe in building fast, breaking things (sometimes), and improving constantly.
                </p>
                <p>When I’m not coding, you’ll find me exploring new tools, scrolling
                    {' '}
                    <span className='underline decoration-blue-500 decoration-wavy underline-offset-5 hover:text-foreground transition-all duration-150 ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]'>
                        X
                    </span>
                    {" "}
                    , or Watching/reading about Automotive Content.</p>

            </div>
        </section>
    )
}

export default HeroSection