import { HoverEffect } from "./ui/card-hover-effect";
const projects = [
    {
        title: "e-commerce Api",
        description:
            "Secure e-commerce API with JWT-based authentication and role management.",
        link: "https://github.com/anirudh2705/e-commerce-api.git",


    },
    {
        title: "Jobs Api",
        description: "RESTful API backend for a job listing and management application.", link: "https://github.com/anirudh2705/jobs-api.git",
    },
    {
        title: "Task-manager Api",
        description:
            "API for creating, updating, and managing user tasks efficiently.",
        link: "https://github.com/anirudh2705/task-manager-api.git",
    },
    {
        title: "Portfolio",
        description: "Personal portfolio built with React, styled using ShadCN and Aceternity UI.", link: "/",
    },
    {
        title: "Movies app",
        description: "Frontend movie app built with vanilla JavaScript using an external movies API.",
        link: "https://github.com/anirudh2705/movieAppJs.git",
    },
    {
        title: "shopping-wooping-e-com",
        description:
            "End-to-end e-commerce platform with full shopping functionali",
        link: "https://github.com/anirudh2705/shopping-wooping-e-com-mern.git",
    },
];



const ProjectSection2 = () => {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>)
}

export default ProjectSection2
