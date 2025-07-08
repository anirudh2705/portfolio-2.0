import { Timeline } from "@/components/ui/timeline";


const CareerData = () => {

    const data = [
        {
            title: "Webwheel Technologies",
            desc: "Jr. Software Developer",
            duration: "July 2023 - current",
            content: (
                <div>
                    {/* <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">

                    </p> */}
                    <div className="text-left  ">
                        <h1 className="font-bold">Project: Practice Management (PM)</h1>
                        <p className="pl-4">Developed and implemented an all-in-one practice management
                            platform featuring client tracking, smart scheduling, deadline calendars, invoicing, and an integrated CRM.
                            The system was designed to streamline daily operations, improve team productivity, and enable data-driven
                            business decisions for professional service providers. </p>

                        <h1 className="font-bold pt-2">Responsibilities</h1>
                        <div className="pl-4">

                            <ul>
                                <li>
                                    - Responsible for designing, creating, and maintaining Node.js and Express APIs to support core
                                    application functionality.
                                </li>
                                <li>- Implemented secure connections to MongoDB collections using Mongoose, handling data modeling and
                                    efficient queries.
                                </li>
                                <li>- Created robust authentication workflows by generating JWT tokens, managing token storage, and
                                    implementing token refresh mechanisms.
                                </li>
                                <li>- Integrated RESTful APIs with frontend teams, ensuring seamless data exchange and real-time
                                    updates.
                                </li>
                                <li>- Worked closely with cross-functional teams to develop new backend modules, optimize API
                                    performance, and enhance overall product scalability.
                                </li>
                            </ul>
                        </div>
                        <h1 className="font-bold pt-2">

                            Technologies used : Node, Express, JavaScript, MongoDb, Jwt, React
                        </h1>
                    </div>
                </div>
            ),
        },


        {
            title: "Full Stack Development [MERN]  ",
            desc: " GeeksforGeeks",
            duration: "Early 2023",
            content: (
                <div>
                    <div className="text-left  ">

                        <div className="pl-4">
                            <ul>
                                <li>
                                    - Designed and developed a user-friendly UI and robust backend for an e-commerce application
                                </li>
                                <li>- Integrated APIs seamlessly between the frontend and backend to ensure smooth functionality
                                </li>
                                <li>- Utilized Postman for API testing and debugging, ensuring reliability and performance of API
                                    endpoints.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div> */}
                </div>
            ),
        },
    ];
    return (
        <div className="overflow-x-hidden overflow-y-hidden w-full md:px-10 lg:px-24 ">
            <Timeline data={data} />
        </div>
    )
}

export default CareerData;

