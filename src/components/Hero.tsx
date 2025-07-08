import { Button } from "@/components/ui/button";
import React from "react";
import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/text-generate-effect";

import CV from '../assets/Anirudh Patnaik.pdf'

interface HeroProps {
    scrollToProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToProjects }) => {
    const words = `Node.js developer with 2+ years of experience building scalable backend services and REST APIs using Node.js and Express.`;
    const words1 = `Proficient in JavaScript, TypeScript, MongoDB, JWT authentication, React and Tailwind.`;

    return (
        <div className="w-full mx-auto h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-8 w-full h-full text-center"
            >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Anirudh Patnaik
                </h2>

                <div className="max-w-4xl mt-6">
                    <TextGenerateEffect words={words} duration={1.5} />
                    <TextGenerateEffect words={words1} duration={2} />
                </div>

                <div className="flex sm:flex-row items-center gap-4 mt-8">
                    <Button variant="primary" className="px-6 py-3 text-base sm:text-lg">
                        <a href={CV} download='anirudh_patnaik_cv' >

                            Resume
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        className="px-6 py-3 text-base sm:text-lg text-white"
                        onClick={scrollToProjects}
                    >
                        Projects
                    </Button>
                </div>
            </Vortex>
        </div>
    );
};

export default Hero;
