import { GlareCard } from "./ui/glare-card";

import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJsSquare,
} from "react-icons/fa";
import {
    SiTailwindcss, SiExpress, SiTypescript, SiJson, SiPostman, SiMongodb, SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaUserLock } from "react-icons/fa6";




const skillIcons = [
    { name: "Node", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDb", icon: SiMongodb },
    { name: "MySql", icon: SiMysql },
    { name: "Postman", icon: SiPostman },
    { name: "JWT", icon: FaUserLock },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "VS Code", icon: VscVscode },
    { name: "GIT", icon: FaGitAlt },
    { name: "JSON", icon: SiJson },

];
const Skills = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-34 pb-16 sm:pb-20 md:pb-24 dark:bg-black">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
                Technologies I Use
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 p-4 sm:p-6">
                {skillIcons.map(({ name, icon: Icon }) => (
                    <GlareCard
                        key={name}
                        className="flex flex-col items-center justify-center p-4 sm:p-6 bg-neutral-900 rounded-lg shadow hover:scale-105 transition-transform duration-200"
                    >
                        <Icon className="text-white text-2xl sm:text-3xl mb-2" />
                        <p className="text-white text-sm sm:text-base font-medium text-center">
                            {name}
                        </p>
                    </GlareCard>
                ))}
            </div>
        </div>
    );
};

export default Skills;
