const MainPage = () => {
  return (
    <div className="w-full h-full relative">
      <div className="z-20 absolute top-[40vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[5%] md:mx-[10%] lg:mx-[20%] animate-fadeInSlow">
        <h1 className="text-[#dbdbda] text-sm md:text-md lg:text-lg">
          For website and video editing
        </h1>
        <h1 className="text-white text-4xl lg:text-5xl my-2 font-bold">
          Suprotiv Moitra
        </h1>

        <h1 className="text-[#dbdbda] text-4xl lg:text-5xl mt-2 mb-3 ">
          Freelance Web Developer
        </h1>
        <div className="mt-6">
          <button>See My Work</button>
        </div>
      </div>
      <video
        className="absolute inset-0 w-full h-screen object-cover z-0 opacity-50"
        src="/website_bg_1.mp4" // Ensure the path is correct
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default MainPage;
