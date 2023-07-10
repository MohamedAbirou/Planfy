import serv from "./serv"

const Service = () => {
    return (
        <>
            <section className="container mx-auto pt-20 mb-20">
                <div className="mb-20 xl:ms-10">
                    <h1 className="text-purple text-4xl xl:text-left sm:text-center xs:text-center font-semibold mb-10">Our services</h1>
                    <p className="text-2xl xl:text-left sm:text-center xs:text-center xs:text-2xl leading-10 xs:leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et et dolore magna aliqua. </p>
                </div>

                <div className="flex xl:flex-row xl:mx-10 lg:flex-row md:flex-col md:items-center sm:flex-col xs:flex-col sm:items-center xs:items-center xl:gap-24 lg:gap-6 md:gap-24 sm:gap-24 xs:gap-12">
                    {serv.map((service) => (
                        <div className="bg-veryLightGray xl:px-12 lg:px-5 md:px-12 sm:px-12 xs:px-6 py-6 rounded-xl xl:w-8/12 md:w-8/12 sm:w-11/12 xs:w-full">
                            <h1 className="text-brightRed text-3xl text-center font-semibold pb-5">{service.title}</h1>
                            <p className="text-justify pb-8">{service.desc}</p>
                            <ul>
                                <li className="flex ms-10 mb-5">
                                    <img src="assets/img/correct.png" className="pe-3" alt="" />
                                    <p className="font-semibold text-lg">{service.benefit}</p>
                                </li>
                                <li className="flex ms-10 mb-5">
                                    <img src="assets/img/correct.png" className="pe-3" alt="" />
                                    <p className="font-semibold text-lg">{service.benefit}</p>
                                </li>
                                <li className="flex ms-10 mb-5">
                                    <img src="assets/img/correct.png" className="pe-3" alt="" />
                                    <p className="font-semibold text-lg">{service.benefit}</p>
                                </li>
                                <li className="flex ms-10 mb-5">
                                    <img src="assets/img/correct.png" className="pe-3" alt="" />
                                    <p className="font-semibold text-lg">{service.benefit}</p>
                                </li>
                            </ul>
                            <p className="font-semibold text-lg pb-3">For only:</p>
                            <div className="flex flex-col items-center -space-y-1">
                                <span>
                                    <img src="assets/img/euro.png" className="me-32" alt="" />
                                </span>
                                <h1 className="text-brightRed text-4xl text-center font-semibold pb-5">{service.price}</h1>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-brightRed to-purple text-white font-semibold px-14 py-2 rounded-lg">Select service</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </>
    )
}

export default Service
