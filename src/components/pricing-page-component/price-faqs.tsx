import React from "react";
import { FiChevronRight } from "react-icons/fi";

const PriceFaqs = () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    }
  ];

  return (
    <div className="mt-10 py-10 flex flex-col justify-center items-center">

      <div className="text-center mb-8">

        <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px]">Pricing FAQs</h2>

        <h4 className="text-[#737373] font-normal text-[20px] leading-[30px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </h4>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-sm flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">

              <FiChevronRight className="text-[#23A6F0] text-[25px]" />

              <h5 className="text-[#252B42] font-bold text-[16px] leading-[24px]">
                {faq.question}
              </h5>

            </div>

            <p className="text-[#737373] font-normal text-[14px] leading-[20px] mt-2">
              {faq.answer}
            </p>

          </div>
        ))}

      </div>

      <p className="text-[#737373] font-medium text-[20px] leading-[30px] flex justify-center mt-16">
        Haven&apos;t got your answer? Contact our support
      </p>

    </div>
  );
};

export default PriceFaqs;
