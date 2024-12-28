import LandingPageButtons from "../components/LandingPageButtons";

const Home = () => (
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
    <div className="w-full relative">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-2xl xl:text-5xl font-normal">
          Hello I’am <span className="font-bold">Subin Abraham. <br />Fullstack</span> <span className="lg:text-outline">Engineer</span> <br /> Based In <span className="font-bold">India.</span>
          <div className="text-base py-10 text-zinc-500">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
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
    <div className="relative">
      <img src="home-screen-image.png" alt="home-screen-image" />
      {/* Line for desktop and mobile */}
      <div
        className="absolute bottom-0 left-0 bg-black
          md:w-[120%] md:-translate-x-[30%] md:h-[2px]
          w-full h-[2px]"
      ></div>
    </div>
  </div>
);

export default Home;
