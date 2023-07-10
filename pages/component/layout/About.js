const About = () => {
  return (
    <>
      {/*About Us Section */}
      <section id="hero" className="mb-36" style={{ fontFamily: 'Montserrat' }}>
        {/*Flex Container */}
        <div
          className="container xl:flex-row flex flex-col-reverse items-center mx-auto xl:space-x-20">
          {/*Left item */}
          <div className="flex flex-col justify-center xl:ms-10 lg:ms-10 space-y-10 xl:w-1/2 xl:text-justify lg:text-center md:text-center sm:text-center xs:text-center">
            <h1 className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl font-semibold xl:mt-0 md:mt-10 sm:mt-10 xs:mt-10 text-purple">
              Wat is Planfy?
            </h1>
            <p className="lg:text-xl font-medium" style={{ lineHeight: '3rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          {/*Image */}
          <div className="xl:w-5/12 lg:w-6/12 md:w-6/12 sm:w-9/12 xs:w-11/12">
            <img src="assets/img/LP-pic3.png" alt="" className="w-full" />
          </div>

        </div>
      </section>
    </>
  )
}

export default About
