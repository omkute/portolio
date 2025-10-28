import ContactMe from "@/components/ContactMe";
import GithubInfo from "@/components/GithubInfo";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSlider from "@/components/SkillsSlider";
import SkillsStack from "@/components/SkillsStack";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" px-6 mx-auto">
      <HeroSection />
      {/* Desktop Skills Badge */}
      <SkillsSlider />
      {/* Mobile Skills section */}
      <div className="">
        <p className=" text-xl font-extralight my-3 lg:hidden">Tools I have Used</p>
        <SkillsStack />
      </div>
      {/* Projects */}
      <div className=" flex flex-col items-center py-4 ">
        <h2 className=" font-extralight text-2xl my-2 lg:max-w-[70vw]">• Key Projects •</h2>

        <Projects
        name="SmartDataX"
        projectType="FrontEnd"
        projectImage="smartdatax"
        description= "A full-stack analytics dashboard that visualizes and monitors real-time business metrics. Built with a modular architecture for easy integration of data sources and user management."
        githubLink=""
        livelink=""
        tools={[ "React"]}
        invert={false}
        />
        <Projects
        name="Session Based Auth"
        projectType="Backend"
        projectImage="smartdatax"
        description= "A full-stack analytics dashboard that visualizes and monitors real-time business metrics. Built with a modular architecture for easy integration of data sources and user management."
        githubLink=""
        livelink=""
        tools={[ "React"]}
        invert={true}
        />
      </div>

      {/* Github Info */}
      <div className="  mx-auto py-5">
       <span className=" flex justify-center items-center gap-x-1.5 ">
         <Image
          src='/icons/GitHub.png'
          alt="Github Icon"
          height={50}
          width={40}
          className="dark:invert"
        />
        <p className=" font-extralight text-center text-xl">Github Contributions</p>
       </span>
        <GithubInfo />
        {/* <p className="">12</p> */}
      </div>
      {/* Contect me */}
      <div>
      <ContactMe/>
      </div>
    </section>
  );
}
