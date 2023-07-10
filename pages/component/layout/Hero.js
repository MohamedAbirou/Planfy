const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto mb-48"
        style={{ fontFamily: "Montserrat" }}
      >
        {/* Flex Container */}
        <div className="flex flex-col items-center mx-auto xl:-space-y-0 lg:-space-y-0 lg:flex-row">
          {/* Left item */}
          <div className="flex flex-col bg items-center xl:-mt-32 md:mt-28 sm:mt-24 xs:mt-20 xl:ms-10 lg:ms-10 xl:justify-end space-y-10 xl:w-1/2 lg:w-full w-1/2 sm:w-full xs:w-full">
            <h1 className="w-full font-semibold xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl xl:text-left lg:text-left text-center ">
              Slimmer <span className="text-brightRed ">werken</span>
              <br />
              <br />
              Sterker <span className="text-brightRed">groeien</span>
            </h1>
            <p className="xl:text-2xl xs:text-xl xl:text-left lg:text-left text-center lg:text-lg font-semibold w-full">
              Voor projectmatig werkende bedrijven die uren van medewerkers op
              projecten plannen en de planning naar een hoger niveau willen
              <br />
              brengen.
            </p>
            <div className="flex flex-row w-full space-x-7 xl:justify-start lg:justify-start md:justify-center sm:justify-center xs:justify-center">
              <img src="assets/img/app-store.png" className="w-44" alt="" />
              <img src="assets/img/play-store.png" className="w-44 " alt="" />
            </div>
          </div>
          {/* Image */}
          <div className="xl:flex lg:flex md:hidden sm:hidden xs:hidden">
            <img src="assets/img/LP-pic1.png" alt="" className="w-full clip-path-custom-shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
