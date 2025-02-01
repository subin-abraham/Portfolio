import LandingPageButtons from "../components/LandingPageButtons";
import Header from "../shared/Header";

const Home = () => (
  <div>
    <Header />
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
      {/* Content Section */}
      <div className="w-full relative order-2 md:order-1">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-2xl xl:text-5xl font-normal">
            Hello I’am <span className="font-bold">Subin Abraham. <br />Fullstack</span>{" "}
            <span className="sm:text-outline-responsive lg:text-outline">Engineer</span> <br /> Based In{" "}
            <span className="font-bold">India.</span>
            <div className="text-base py-10 text-zinc-500">
              Passionate Software Developer with a background in Electronics and Communication Engineering. I thrive on crafting user-friendly applications and continuously embracing new technologies to stay ahead in the ever-evolving tech landscape. Let's connect and innovate together!
            </div>
          </div>
        </div>
        {/* Button container aligned to the bottom */}
        <div className="absolute bottom-0 left-0 flex justify-start space-x-4">
          <LandingPageButtons src="linkedin.svg" alt="" />
          <LandingPageButtons src="linkedin.svg" alt="" />
          <LandingPageButtons src="linkedin.svg" alt="" />
          <LandingPageButtons src="linkedin.svg" alt="" />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative order-1 md:order-2">
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

export default Home;