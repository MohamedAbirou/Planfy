import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer
        className="bg-darkPurple text-center lg:text-left"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="py-10 xl:mx-32 lg:mx-1 md:mx-32 sm:mx-18 xs:mx-auto xl:text-center lg:text-left md:text-center sm:text-center xs:text-center">
          <div className="grid md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:space-y-10 xs:space-y-10">
            {/* Planfy logo section */}
            <div className="mt-3">
              <h6 className="mb-6 flex items-center xl:me-44 lg:me-32 md:-ms-2 justify-center font-semibold uppercase md:justify-center">
                <img src="assets/img/Logo2.png" className="w-28" alt="" />
              </h6>
              <p className="font-bold text-white xl:me-44 lg:me-32 md:ms-3 md:text-center">
                Planning for you!
              </p>
            </div>

            {/* navbar section */}
            <div className="grid grid-cols-2 xs:mx-auto xl:mx-10 xl:mt-10 lg:mx-4 lg:mt-10 gap-5 mt-0 md:mb-10">
              <Link
                href="/"
                className="mb-4 flex justify-center cursor-pointer text-white hover:text-brightRed font-semibold uppercase md:justify-start"
              >
                Home
              </Link>
              <Link
                href="/overOns"
                className="mb-4 flex justify-center cursor-pointer text-white hover:text-brightRed font-semibold uppercase md:justify-start"
              >
                Over Ons
              </Link>
              <Link
                href="/contact"
                className="mb-4 flex justify-center font-semibold text-white hover:text-brightRed cursor-pointer uppercase md:justify-start"
              >
                Contact
              </Link>
              <Link
                href="/diensten"
                className="mb-4 flex justify-center font-semibold text-white hover:text-brightRed cursor-pointer uppercase md:justify-start"
              >
                Diensten
              </Link>
            </div>

            {/* Contact section */}
            <div className="flex flex-col text-white xl:mt-10 lg:mt-10 xl:ms-0 lg:ms-10 md:ms-0 sm:ms-0 xs:ms-0 xl:items-start lg:items-start md:items-center">
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <img
                  src="assets/img/phone-icon.png"
                  className="h-6 w-5 mr-3"
                  alt=""
                />
                +31 850601960
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <img
                  src="assets/img/location-icon.png"
                  className="h-6 w-6 mr-3"
                  alt=""
                />
                Steenplaetsstraat 6 4.14, 2288AA Rijswijk
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <img
                  src="assets/img/mail-icon.png"
                  className="w-6 h-5 mr-3"
                  alt=""
                />
                info@planfy.nl
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 w-full mb-2"></div>

        <div className="flex xl:flex-row xs:flex-col">
          <div className="flex mx-auto items-center justify-center xl:ps-20">
            {/*Copyright section*/}
            <div className="xl:w-max pt-3 pb-3 text-center text-white font-medium">
              <span>© All rights reserved to </span>
              <a
                className="font-medium text-white hover:underline"
                href="/home"
              >
                Planfy
              </a>
              <span>, 2023</span>
            </div>
            {/* Social network icons container */}
          </div>

          <div className="flex justify-center space-x-5 pt-1 pb-3 xl:pe-5">
            <a
              href="https://www.linkedin.com/in/Planfy/"
              className="rounded-3xl bg-white"
              target="_blank"
            >
              <img src="assets/img/linkedin.png" className="h-8 w-8" alt="" />
            </a>
            <a
              href="https://www.facebook.com/Planfy/"
              className="rounded-3xl bg-white"
              target="_blank"
            >
              <img src="assets/img/fb-icon.png" className="h-8 w-8" alt="" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+442034550310&text=Hello, more information!"
              className=""
              target="_blank"
            >
              <img
                src="assets/img/whatsapp-icon.png"
                className="h-8 w-8"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/Planfy/"
              className="rounded-3xl bg-white"
              target="_blank"
            >
              <img src="assets/img/ig-icon.png" className="h-8 w-8" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
