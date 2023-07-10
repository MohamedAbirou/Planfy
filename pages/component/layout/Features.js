const Features = () => {
  return (
    <>
      {/* heroTwo Section */}
      <section id="hero" className="container mx-auto mt-16 mb-40" style={{ fontFamily: 'Montserrat' }}>
        {/* Flex Container */}
        <div className="flex flex-col items-center mx-auto lg:flex-row  xs:flex-col-reverse xl:space-x-56 lg:space-x-40 md:space-y-10 sm:space-y-10 xs:space-y-10">
          {/* Image */}
          <div className="xl:w-4/12 xl:ms-5 lg:w-full md:w-6/12 sm:w-9/12 xs:w-11/12">
            <img src="assets/img/OO-pic2.png" alt="" className="w-full" />
          </div>
          {/* Left item */}
          <div className="flex flex-row flex-wrap xl:w-1/2 lg:w-full space-y-10">
            <h1 className="w-full font-semibold text-purple xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl xl:text-right lg:text-right md:text-center sm:text-center xs:text-center" style={{ lineHeight: '4rem' }}>
              No matter what is your company’s specialty
              Planfy is ideal for you
            </h1>
            <p className="w-full xl:text-4xl xs:text-xl xs:pb-10 xl:text-right lg:text-right md:text-center sm:text-center xs:text-center lg:text-2xl md:text-2xl text-purple font-semibold">
              We have features that fits all your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
