import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How Long Does a Design Project Take?",
    answer:
      "At Design Monks, we understand that each project is unique. Usually, our design process takes a few weeks depending on the project's complexity and scope.",
  },
  {
    id: 2,
    question: "How Long Does a Design Project Take?",
    answer:
      "We begin with research and planning, followed by design iterations and feedback sessions.",
  },
  {
    id: 3,
    question: "How Long Does a Design Project Take?",
    answer:
      "This collaborative approach ensures the final design aligns perfectly with your goals.",
  },
  {
    id: 4,
    question: "How Long Does a Design Project Take?",
    answer:
      "Timeline depends on complexity, revisions, and communication speed.",
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