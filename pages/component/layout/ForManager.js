const ForManager = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="container mx-auto mb-24" style={{ fontFamily: 'Montserrat' }}>
        {/* Flex container */}
        <div className="flex mx-auto mb-40 xl:flex-row-reverse lg:flex-row-reverse md:flex-col xl:gap-8 lg:gap-8 md:gap-2 xs:flex-col">
          {/* With Planfy you can */}
          <div className="flex flex-col space-y-12 xl:w-1/2 lg:w-1/2 md:w-full">
            <h1 className="xl:text-5xl text-purple xl:self-center lg:text-4xl font-semibold md:text-4xl sm:text-3xl xs:text-3xl text-center mb-3">
              For Manager
            </h1>
            <ul className="flex flex-col mx-auto sm:pb-10 xs:pb-10">
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl text-center font-semibold pb-3">Set the tasks</li>
              <p className="mb-8 leading-10 text-center text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl text-center font-semibold pb-3">Add notes on the projects and have direct contact with your employees</li>
              <p className="mb-8 leading-10 text-center text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl text-center font-semibold pb-3">Get access of your team and clients overview</li>
              <p className="leading-10 text-center text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </ul>
          </div>
          {/* image */}
          <div className="flex xl:ms-5 lg:self-center xs:self-center xl:w-1/2 lg:w-6/12 md:w-10/12 sm:w-full">
            <img src="assets/img/OO-pic4.png" className="rounded-md w-full" alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default ForManager
