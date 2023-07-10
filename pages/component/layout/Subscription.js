import subsData from "./subsData";

const Subscription = () => {
  return (
    <>
      {/* Subscription Section */}
      < section
        id="subscription"
        className="container mx-auto mt-20 xl:text-left lg:text-left md:text-center sm:text-center xs:text-center"
        style={{ fontFamily: "Montserrat" }
        }
      >
        {/* Container to heading and blocks */}
        < h2 className="xl:text-4xl xl:ms-10 lg:text-3xl xl:text-left lg:text-center md:text-3xl sm:text-3xl xs:text-3xl text-purple font-semibold" >
          Subscription plans
        </h2 >
        <h2 className="mt-5 xl:ms-10 xl:text-lg font-medium xl:text-left lg:text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia unde
          officiis sint aut exercitationem excepturi eum omnis temporibus iusto
          quae quasi,
          <br className="hidden xl:block" /> veniam a totam atque cupiditate
          sunt at. Unde, consectetur?
        </h2>

        <div className="mx-auto mb-32 text-center">
          {/* Subscription Container */}
          <div className="flex flex-col lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-4 md:w-10/12 md:mx-auto xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 xs:mt-10">
            {subsData.map((subs, index) => (
              <div key={index} className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray ">
                <h5 className="text-2xl font-bold text-brightRed">{subs.title}</h5>
                <p className="text-lg font-medium text-center leading-9">
                  {subs.desc}
                </p>
              </div>
            ))}

            <div className="flex flex-col items-center h-20 rounded-lg bg-gradient-to-r from-pink-600 to-purple">
              <a
                href="#"
                className="font-semibold text-2xl xl:px-28 xl:py-6 lg:px-28 lg:py-6 md:px-56 md:py-6 sm:px-36 sm:py-6 xs:px-18 xs:py-6 text-white"
              >
                See all plans
              </a>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Subscription;
