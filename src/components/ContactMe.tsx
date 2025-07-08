import { Boxes } from "./ui/background-boxes";
import { SiGit, SiGmail, SiLinkedin } from "react-icons/si";

const ContactMe = () => {
    return (
        <div className="relative h-96 md:h-80  w-full bg-black py-12 px-10 md:px-36 overflow-hidden ">
            <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

            <div className="relative z-20 flex flex-col md:flex-row justify-around gap-12 ">

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white">Contact Me</h1>

                    <div className="flex flex-col text-white">
                        <span className="flex items-center gap-2">
                            <SiGmail />
                            Gmail
                        </span>
                        <a
                            href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=anirudhpatnaik2804@gmail.com"
                            target="_blank"
                            className="text-blue-400 hover:underline break-all"
                        >
                            anirudhpatnaik2804@gmail.com
                        </a>
                    </div>

                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/anirudh-patnaik-1a0374170/"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition"
                    >
                        <SiLinkedin />
                        Anirudh Patnaik
                    </a>
                </div>

                {/* External Links Section */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white">External Links</h1>
                    <a
                        href="https://github.com/anirudh2705"
                        target="_blank"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition"
                    >
                        <SiGit />
                        anirudh2705
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
