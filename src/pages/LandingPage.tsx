import React, { useRef } from "react";
import Hero from "@/components/Hero";
import CareerData from "@/components/CareerData";
import Skills from "@/components/Skills";
import ProjectSection2 from "@/components/ProjectSection2";
import ContactMe from "@/components/ContactMe";
import { BackgroundBeams } from "@/components/ui/background-beams";

const LandingPage = () => {
    const projectsRef = useRef<HTMLDivElement>(null);

    return (
        <div>

            <Hero scrollToProjects={() => {
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }} />

            <Skills />
            <div className="text-center dark:bg-black text-white">
                <h1 className="lg:text-4xl text-2xl">My career Journey</h1>
                <CareerData />
            </div>

            {/* Personal Projects Section with ref */}
            <div ref={projectsRef} className="text-center dark:bg-black text-white">
                <h1 className="lg:text-4xl text-2xl">Personal Projects</h1>
                <ProjectSection2 />
            </div>

            <ContactMe />
            <BackgroundBeams />
        </div>
    );
};

export default LandingPage;
