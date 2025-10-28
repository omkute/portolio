import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'
import { MailIcon, Search } from 'lucide-react'
import Link from 'next/link'

function ContactMe() {
  return (
    <section className=' lg:max-w-[60vw] mx-auto border-t-2 rounded-3xl mt-4 lg:p-2'>
       
       <h2 className=' font-extralight text-2xl text-center'>Get In Touch</h2>
       <p className=' lg:text-xl text-lg text-center'>Have a project in mind, want to collaborate, or just say hi? <br />
        Feel free to reach out I’m always up for a good conversation about code, design, or anything creative.</p>
        <a 
        href="mailto:omkutex@gmail.com"
        className=' text-blue-500 flex justify-center'
        >
            <MailIcon/>
            omkutex@gmail.com</a>
    </section>
  )
}

export default ContactMe