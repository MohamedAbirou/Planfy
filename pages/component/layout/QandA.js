import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqData from "./faqData";

const QandA = () => {
  const [activeCategory, setActiveCategory] = useState("Subscription");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section className="container mx-auto mb-20" id="FAQ">
        <div className="xl:ms-10 lg:ms-10 xl:text-left lg:text-left md:text-center sm:text-center xs:text-center">
          <h1 className="text-3xl text-purple font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col">
          <div className="mt-20 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xl:text-left lg:text-left md:text-left xl:mx-10 lg:mx-10 md:mx-10 sm:text-center xs:text-center">
            <div className="mt-4 space-y-8 lg:mt-8">
              <a
                href="#!"
                className={`block text-2xl text-brightRed hover:underline cursor-pointer ${activeCategory === "Subscription" ? "text-brightRed" : ""
                  }`}
                onClick={() => handleCategoryChange("Subscription")}
              >
                Subscription
              </a>
              <a
                href="#!"
                className={`block text-2xl text-brightRed hover:underline cursor-pointer ${activeCategory === "Payment" ? "text-brightRed" : ""
                  }`}
                onClick={() => handleCategoryChange("Payment")}
              >
                Payment
              </a>
              <a
                href="#!"
                className="block text-2xl text-brightRed font-bold underline"
              >
                Other
              </a>
            </div>
          </div>

          <div className="container px-6 py-12 mx-auto">
            <div className="mt-8 space-y-8 lg:mt-12">
              {faqData[activeCategory].map((faq, index) => (
                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button
                    key={index}
                    className="flex items-center justify-between w-full"
                    onClick={() => handleToggle(index)}
                  >
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      {faq.question}
                    </h1>

                    <span className="text-brightRed">
                      {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <div
                    key={index}
                    className={`mb-1 ${activeIndex === index ? "block" : "hidden"
                      }`}
                  >
                    <p className="mt-8">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QandA;
