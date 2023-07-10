const ForEmployee = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="container mx-auto mt-16" style={{ fontFamily: 'Montserrat' }}>
        {/* Flex container */}
        <div className="flex mx-auto xl:space-x-20 mb-40 xl:flex-row lg:flex-row md:flex-col md:items-center xs:flex-col">
          {/* With Planfy you can */}
          <div className="flex xl:ms-5 flex-col space-y-5 xl:w-1/2 lg:w-1/2 md:w-full md:items-center xs:mx-3">
            <h2 className="flex max-w-md xl:self-start xl:text-5xl lg:text-4xl md:text-4xl text-purple font-semibold lg:self-start lg:text-left md:text-center sm:self-center xs:self-center xs:text-3xl">
              For Employees
            </h2>
            <ul className="xl:list-disc lg:list-disc pt-10 xl:text-left lg:text-left md:text-center sm:text-center xs:text-center sm:pb-10 xs:pb-10">
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl font-semibold pb-3">Manage your tasks </li>
              <p className="-ml-8 pl-8 mb-8 leading-10 text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl font-semibold pb-3">Keep up with of your projects </li>
              <p className="-ml-8 pl-8 mb-8 leading-10 text-lg">See who is in charge of the process, set meetings and even send your feedbacks to the team </p>
              <li className="text-brightRed xl:text-3xl lg:text-3xl md:text-2xl xs:text-xl font-semibold pb-3">Set your avaliable hours for the week</li>
              <p className="-ml-8 pl-8 leading-10 text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </ul>
          </div>
          {/* image */}
          <div className="flex lg:self-center xs:self-center xl:w-5/12 lg:w-1/2 md:w-7/12 sm:w-full md:block xs:hidden">
            <img src="assets/img/OO-pic3.png" className="rounded-md w-full" alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default ForEmployee