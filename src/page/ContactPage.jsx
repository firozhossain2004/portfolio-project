import React from "react";
import FormPage from "../components/FormPage.jsx";
import ContactQuestion from "../components/ContactQuestion.jsx";
import LogoSlider from "../components/LogoSlider.jsx";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-10 py-10 space-y-20">

      
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
          Have a Question or <br />
          <span className="italic font-Englisc">
            Just Want to Chat?
          </span>
        </h1>
      </div>

    
      <div className="max-w-4xl mx-auto">
        <FormPage />
      </div>

     
      <div className="w-full overflow-hidden">
        <LogoSlider />
      </div>

   
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h5 className="text-xs sm:text-sm md:text-lg text-purple-500 tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h5>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Your Questions <br />
          <span className="font-Englisc">Answered!</span>
        </h2>
      </div>

     
      <div className="max-w-3xl md:max-w-4xl mx-auto">
        <ContactQuestion />
      </div>

    </div>
  );
};

export default ContactPage;