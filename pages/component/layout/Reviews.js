import revs from "./revs"

const Reviews = () => {
  return (
    <>
      <section style={{ fontFamily: 'Montserrat' }}>
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl mb-16">
          <h3
            className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl font-bold text-purple">
            Onze sectoren & klanten
          </h3>
        </div>

        <div className="container mx-auto grid gap-6 mb-24 lg:gap-12 md:grid-cols-3
    xl:space-y-5 lg:space-y-5 md:space-y-5 sm:-space-y-5 xs:-space-y-5">
          {revs.map((rev) => (
            <div className="mt-5">
              <div className="mb-6 flex justify-center">
                <img
                  src={rev.img}
                  className="w-40 rounded-full shadow-lg dark:shadow-black/30" />
              </div>
              <div className="mb-12 md:mb-0">
                <h5 className="mb-4 text-2xl font-semibold text-center text-brightRed">
                  {rev.name}
                </h5>
                <p className="mb-4 xl:px-16 leading-9 text-lg font-medium xl:text-justify lg:text-justify md:text-center sm:text-center xs:text-center whitespace-break-spaces">
                  {rev.review}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}

export default Reviews
