import { useState } from "react";
import Select from "react-select";
import countryCodes from "./countryCodes";

const ContactForm = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <section
        className="container mx-auto mt-24 mb-36"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="xl:mx-10 xl:text-left lg:text-left md:text-center sm:text-center xs:text-center">
          <h1 className="text-3xl text-purple font-bold pb-8">
            Get in touch with us
          </h1>
          <p className="text-xl pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex xl:mx-10 sm:mx-5 xl:flex-row xl:space-y-0 lg:flex-row md:flex-col sm:flex-col xs:flex-col xl:space-x-32 lg:space-x-20 md:space-y-10 sm:space-y-10 xs:space-y-10">
          <div className="flex xl:w-6/12 lg:w-9/12 md:w-full rounded-3xl bg-veryLightGray p-6 shadow-lg">
            <form className="w-full">
              {/*Name input*/}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label for="name" className="text-brightRed font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg py-2 px-2 mt-2 focus:outline focus:outline-2 outline-brightRed"
                  id="name"
                />
              </div>

              {/*Email input*/}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label for="email" className="text-brightRed font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded-lg py-2 px-2 mt-2 focus:outline focus:outline-2 outline-brightRed"
                  id="email"
                />
              </div>

              {/*phone number input*/}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-brightRed font-bold"
                >
                  Phone Number
                </label>
                <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col">
                  <Select
                    options={countryCodes}
                    className="w-28 mr-2 focus:outline-none"
                    classNamePrefix="react-select"
                    placeholder="+"
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                  />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="flex-1 px-3 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-3 xs:py-2 rounded-lg focus:outline focus:outline-2 outline-brightRed"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
              </div>

              {/*Message input*/}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label for="message" className="text-brightRed font-bold">
                  Message
                </label>
                <textarea
                  className="block w-full rounded-lg py-2 px-2 mt-2 focus:outline focus:outline-2 outline-brightRed resize-none"
                  id="message"
                  cols={30}
                  rows={5}
                />
              </div>

              {/*Submit button*/}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-10 py-2 bg-brightRed rounded-full text-white font-semibold uppercase"
                  data-te-ripple-init
                >
                  Contact
                </button>
              </div>
            </form>
          </div>



          <div className="mx-auto xl:w-5/12 lg:w-8/12 md:w-full mb-32 text-left">
            {/* Subscription Container */}
            <div className="grid grid-rows-3 gap-4 md:mx-auto">
              {/* Contact 1 */}
              <div className="flex flex-row w-full h-36 px-5 bg-veryLightGray py-5 shadow-lg rounded-3xl">
                <div>
                  <img
                    src="assets/img/phone-icon2.png"
                    className="w-10 me-5"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-brightRed">
                    Call us
                  </h1>
                  <p className="font-semibold">
                    Mon - Fri from 08 am to 5 pm
                  </p>
                  <p className="text-lg font-semibold underline">
                    +31850601960
                  </p>
                </div>
              </div>

              {/* Contact 2 */}
              <div className="flex flex-row w-full px-5 bg-veryLightGray p-5 xl:-mt-3 lg:-mt-12 md:-mt-3 sm:-mt-6 xs:-mt-16 shadow-lg rounded-3xl">
                <div>
                  <img
                    src="assets/img/location-icon2.png"
                    className="w-10 xl:me-5 lg:me-8 md:me-5 sm:me-8"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-brightRed">
                    Visit us
                  </h1>
                  <div className="flex justify-between space-x-6">
                    <div className="font-semibold space-y-3">
                      <p>Dubai Office</p>
                      <p>Lorem Ipsum Lorem</p>
                      <p>Ipsum Lorem</p>
                    </div>
                    <div className="font-semibold space-y-3">
                      <p>Netherlands Office</p>
                      <p className="underline">Steenpletsstraat 6</p>
                      <p className="underline">4.14, 2288AA Rijswijk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact 3 */}
              <div className="flex flex-row w-full h-36 px-5 bg-veryLightGray py-5 shadow-lg rounded-3xl">
                <div>
                  <img
                    src="assets/img/mail-icon2.png"
                    className="w-10 me-5"
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-brightRed">
                    Email us
                  </h1>
                  <p className="font-semibold">Talk with our friendly team</p>
                  <p className="text-lg font-semibold">info@planfy.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactForm;
