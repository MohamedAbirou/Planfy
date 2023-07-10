import revs from "./revs"

const Reviews = () => {
    return (
        <>
            <section className="container mx-auto pt-20 mb-20">
                <div className="mb-20">
                    <h1 className="text-purple text-4xl xl:text-left sm:text-center xs:text-center font-semibold mb-10">Services review</h1>
                    <p className="text-2xl xl:text-left sm:text-center xs:text-center leading-10">Our Service Reviews Section offers insightful feedback on a variety of services to help you make informed decisions. </p>
                </div>


                <div className="mx-auto mb-32 xs:mx-3 text-center">
                    <div className="flex flex-col lg:grid xl:grid-cols-3 lg:grid-cols-3 gap-4 md:mx-auto mt-24">
                        {revs.map((rev) => (
                            <div className="flex flex-col px-5 rounded-3xl bg-veryLightGray ">
                                <div className="xl:flex xl:flex-row md:flex-col md:text-center pb-3 pt-3">
                                    <div
                                        className="xl:w-32 xl:flex xl:justify-start lg:mb-0 md:mx-auto md:w-full md:flex md:justify-center xs:flex xs:justify-center">
                                        <img
                                            src={rev.img}
                                            className="rounded-full shadow-md w-24 dark:shadow-black/30"
                                            alt="woman avatar" />
                                    </div>
                                    <div className="w-full xl:text-left xs:text-center xl:ml-6">
                                        <p
                                            className="mb-2 text-3xl font-semibold text-brightRed">
                                            {rev.name}
                                        </p>
                                        <p
                                            className="mb-0 font-semibold text-xl text-brightRed">
                                            {rev.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="pb-6 px-5 font-medium xl:text-justify md:text-center xs:text-center">
                                        {rev.review}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </section>
        </>
    )
}

export default Reviews
