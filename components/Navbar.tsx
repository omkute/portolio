"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { ModeToggle } from "@/components/shadcnComp/ModeToggler";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => setIsOpen(true);
  const handleClickClose = () => setIsOpen(false);

  return (
    <section className="sticky top-0 z-10 border-b border-gray-200 dark:border-black bg-white/50 dark:bg-black/30 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center p-3 lg:max-w-[80vw] max-w-[90vw] mx-auto">
        {/* Logo */}
        <Image
         className=" transition duration-300 dark:brightness-200 dark:invert"
         src='/logo.png'
         alt="Logo"
         width={90}
         height={10}
         />
         

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blogs</Link>
        </ul>

        {/* Dark/Light Toggle (Desktop Only) */}
        <div className="hidden lg:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <X onClick={handleClickClose} className="cursor-pointer" />
          ) : (
            <MenuIcon onClick={handleClickOpen} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black/90 border-t border-gray-200 dark:border-gray-800 shadow-md">
          <ul className="flex flex-col gap-3 p-4 text-center font-medium">
            <Link href="/" onClick={handleClickClose}>
              Home
            </Link>
            <Link href="/projects" onClick={handleClickClose}>
              Projects
            </Link>
            <Link href="/blog" onClick={handleClickClose}>
              Blogs
            </Link>
            <div className="flex justify-center mt-2">
              <ModeToggle />
            </div>
          </ul>
        </div>
      )}
    </section>
  );
}
