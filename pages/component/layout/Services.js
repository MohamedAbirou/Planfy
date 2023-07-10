const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" style={{ fontFamily: 'Montserrat' }}>
        <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-3xl xs:px-3 text-darkBlue font-semibold pb-10">The easiest way for you to organize your
          &nbsp;<br className=" md:block sm:hidden" />company.
        </h1>
        {/* Flex container */}
        <div className="container flex mx-auto mt-8 mb-40 xl:flex-row lg:flex-col xl:space-x-20 md:flex-col md:items-center md:gap-10 xs:flex-col">
          {/* With Planfy you can */}
          <div className="flex flex-col space-y-12 xl:w-1/2 xl:ms-10 lg:w-full md:w-full md:items-center">
            <h2 className="flex max-w-md xl:self-start xl:text-3xl lg:text-3xl font-semibold lg:text-center md:text-center sm:self-center xs:self-center xs:text-2xl">
              With Planfy you can:
            </h2>
            <ul className="xl:list-disc lg:list-none md:list-none sm:list-none xl:pl-10 lg:pl-10 pt-5 xl:text-left lg:text-center md:text-center sm:text-center xs:text-center">
              <li className="text-brightRed xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-semibold pb-3">Have access to your team timesheet</li>
              <p className="xl:-ml-8 mb-8 xl:text-lg font-medium leading-10">In addition to having access to the available schedules of each employee so you can manage their tasks</p>
              <li className="text-brightRed xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-semibold pb-3">Manage the progress of your projects</li>
              <p className="xl:-ml-8 mb-8 xl:text-lg font-medium leading-10">See who is in charge of the process, set meetings and even send your feedbacks to the team </p>
              <li className="text-brightRed xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-semibold pb-3">Access all the documents of your company in one place </li>
              <p className="xl:-ml-8 sm:pb-10 xs:pb-10 xl:text-lg font-medium leading-10">For example the project invoice,&nbsp;&nbsp; your employees paycheck and every document
                you need. </p>
            </ul>
          </div>
          {/* image */}
          <div className="flex lg:self-center xs:self-center xs:px-2 xl:w-8/12 lg:w-9/12 md:w-10/12 sm:w-full xs:w-96">
            <img src="assets/img/LP-pic2.png" className="w-full" alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default Services
