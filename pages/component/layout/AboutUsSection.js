const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto xl:mt-36 lg:mt-32 md:mt-32 sm:mt-32 xs:mt-20 mb-24 " style={{ fontFamily: 'Montserrat' }}>
        {/* Flex Container */}
        <div
          className="flex flex-col items-center mx-auto lg:space-x-20 lg:flex-row ">
          {/* Left item */}
          <div className="flex flex-col space-y-10 xl:ms-10 lg:ms-10 lg:w-1/2">
            <h1 className="xl:text-6xl text-purple xl:w-10/12 xl:text-left lg:text-4xl lg:text-left xs:text-center sm:text-center font-semibold md:text-4xl sm:text-4xl xs:text-3xl xl:leading-snug lg:leading-snug">
              Take a look in our services and<br /> which one<br />
              fulfills your needs
            </h1>
            <p className="xl:text-2xl lg:text-xl sm:text-lg xs:text-lg md:text-xl lg:text-left xl:w-10/12 text-justify xl:text-left xs:text-center font-medium pb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et et dolore magna aliqua.
            </p>
          </div>
          {/* Image */}
          <div className="flex xl:justify-start xl:-mt-11 lg:-mt-5 xl:w-1/2 sm:w-10/12 md:w-9/12">
            <img src="assets/img/D-pic1.png" alt="" className="rounded-md w-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
