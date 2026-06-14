import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How long does a design project take?",
    answer:
      "Every project is different. A luxury brochure typically takes 7–14 business days, depending on thenumber of pages, complexity of content, and revision rounds. I'll always provide a clear timelinebefore we begin so you know exactly what to expect",
  },
  {
    id: 2,
    question: "How many revisions are included?",
    answer:
      "I offer unlimited revisions throughout the entire design process. My goal is to deliver a result you'regenuinely proud of — I don't stop until it's exactly right.",
  },
  {
    id: 3,
    question: "Do you sign an NDA before starting a project?",
    answer:
      "Absolutely. Client confidentiality is a priority for me. I'm happy to sign a Non-Disclosure Agreementbefore any project details are shared, ensuring your brand strategy and assetsremain completelyprivate",
  },
  {
    id: 4,
    question: "What file formats will I receive upon delivery?",
    answer:
      "IYou'll receive print-ready PDF files along with all original source files — typically in Adobe InDesign and Illustrator formats — so you have full ownership and flexibility for future use.",
  },
  {
    id: 5,
    question: "What software do you use for your designs?",
    answer:
      "I work primarily with Adobe InDesign for layout and publication design, and Adobe Illustrator andPhotoshop for brand identity and visual assets. All deliverables are producedat professional printquality",
  },
];

const ContactQuestion = () => {
  const [openId, setOpenId] = useState(null); 

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl md:max-w-4xl mx-auto text-white">

      {faqs.map((item) => (
        <div key={item.id} className="border-b border-gray-700 py-4 md:py-5">

         
          <div
            onClick={() => toggle(item.id)}
            className="flex justify-between items-center cursor-pointer gap-4"
          >
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              {item.question}
            </h2>

            <ChevronDown
              size={20}
              className={`transition duration-300 shrink-0 ${
                openId === item.id
                  ? "rotate-180 text-purple-500"
                  : ""
              }`}
            />
          </div>

        
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openId === item.id
                ? "grid-rows-[1fr] opacity-100 mt-3"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default ContactQuestion;