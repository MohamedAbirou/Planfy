const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto mt-16 mb-40"
        style={{ fontFamily: "Montserrat" }}
      >
        {/* Flex Container */}
        <div className="flex flex-col items-center mx-auto lg:flex-row md:space-y-10 xl:space-x-20 lg:space-x-20">
          {/* Left item */}
          <div className="flex space-y-10 flex-col mx-10 lg:w-8/12 xs:w-full">
            <h1 className="xl:text-5xl text-purple xl:text-left lg:text-4xl xs:text-center sm:text-center font-semibold md:text-4xl sm:text-4xl xs:text-3xl">
              Over ons
            </h1>
            <p
              className="xl:text-3xl lg:text-xl xl:text-justify xs:text-center xs:text-xl font-medium"
              style={{ lineHeight: "3rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          {/* Image */}
          <div className="xl:w-5/12 sm:w-7/12 md:block xs:hidden">
            <img src="assets/img/OO-pic1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
