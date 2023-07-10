const App = () => {
  return (
    <>
      {/* heroTwo Section */}
      <section id="hero" className="container mx-auto mt-16 mb-44" style={{ fontFamily: 'Montserrat' }}>
        {/* Flex Container */}
        <div className="flex flex-col items-center mx-auto lg:flex-row xs:flex-col xl:space-x-52 xl:me-3 lg:space-x-40 md:space-y-10 sm:space-y-10 xs:space-y-10">
          {/* Image */}
          <div className="xl:w-8/12 xl:ms-10 md:w-6/12 sm:w-9/12 xs:w-11/12">
            <img src="assets/img/LP-pic4.png" alt="" className="w-full" />
          </div>
          {/* Left item */}
          <div className="flex items-center flex-row flex-wrap justify-end space-y-10 xl:w-1/2 lg:w-1/2 text-center">
            <h1 className="w-full font-semibold text-purple xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl xl:text-right lg:text-right md:text-center" style={{ lineHeight: '4rem' }}>
              With planfy you can organize your work life as you want.
            </h1>
            <p className=" w-full xl:text-4xl lg:text-3xl md:text-2xl xs:text-xl xs:mx-1 xs:pb-5 xl:text-right lg:text-right md:text-center text-purple font-semibold">
              We have a plataform for the manager and one for the employee
            </p>
            <div className="flex flex-row xl:w-full md:w-full sm:w-full xs:w-full space-x-7 xs:space-x-7 xl:justify-end lg:justify-end md:justify-center xs:justify-center">
              <img src="assets/img/app-store.png" className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-44" alt="" />
              <img src="assets/img/play-store.png" className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-44" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
