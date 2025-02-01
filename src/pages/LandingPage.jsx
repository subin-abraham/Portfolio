import LandingPageButtons from "../components/LandingPageButtons";
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => (
    <div>
        {/* Grid layout for phone, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text Section */}
            <div className="w-full relative order-2 lg:order-1 sm:mt-5 md:mt-5">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="text-2xl xl:text-5xl font-normal">
                        <div>
                            Hello I’am <span className="font-bold">Subin Abraham. <br />Fullstack</span>{" "}
                            <span className="sm:text-outline-responsive lg:text-outline">Engineer</span> <br /> Based In{" "}
                            <span className="font-bold">India.</span>
                        </div>
                        <div className="text-base pt-5 text-zinc-500 ">
                            Passionate Software Developer with a background in Electronics and Communication Engineering. I thrive on crafting user-friendly applications and continuously embracing new technologies to stay ahead in the ever-evolving tech landscape. Let's connect and innovate together!
                        </div>
                    </div>
                </div>
                {/* Buttons at the bottom */}
                <div className="flex justify-start space-x-4">
                    <LandingPageButtons icon={faLinkedin} routePath={"www.linkedin.com/in/subinabraham63"} />
                    <LandingPageButtons icon={faGithub} />
                    <LandingPageButtons icon={faMedium} />
                    <LandingPageButtons icon={faEnvelope} />
                </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2">
                <img src="home-screen-image.png" alt="home-screen-image" className="w-full" />
                {/* Line for desktop and mobile */}
                <div
                    className="absolute bottom-0 left-0 bg-black
          md:w-[120%] md:-translate-x-[30%] md:h-[2px]
          w-full h-[2px]"
                ></div>
            </div>
        </div>
    </div>
);

export default LandingPage;