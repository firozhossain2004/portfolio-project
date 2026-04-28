import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "How Long Does a Design Project Take?",
        answer:
            "At Design Monks, we understand that each project is unique. Usually, our design process takes a few weeksdepending on the project's complexity and scope. We begin with thorough research and planning, followed by design iterations and client feedback sessions. This collaborative approach ensures that the final design aligns perfectly with your vision and goals.",
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


const Titale = () => {

    const [openId, setOpenId] = useState([]);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className="max-w-4xl mx-auto text-white">

            {faqs.map((item) => (
                <div key={item.id} className="border-b border-gray-700 py-5">

                  
                    <div
                        onClick={() => toggle(item.id)}
                        className="flex justify-between items-center cursor-pointer"
                    >
                        <h2 className="text-xl md:text-xl">
                            {item.question}
                        </h2>

                        <ChevronDown
                            className={`transition duration-300 ${openId === item.id ? "rotate-180 text-purple-500" : ""
                                }`}
                        />
                    </div>

                   
                    <div
                        className={`overflow-hidden transition-all duration-500 ${openId === item.id ? "max-h-40 mt-4" : "max-h-0"
                            }`}
                    >
                        <p className="text-gray-400 text-xs">
                            {item.answer}
                        </p>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default Titale