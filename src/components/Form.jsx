import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    budget: "",
    details: "",
  });

  const budgets = [
    "Less than $300",
    "$300 - $500",
    "$500 - $1K",
    "$1K - $1.5K",
    "More than $2K",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBudget = (item) => {
    setForm({ ...form, budget: item });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-xl mx-auto bg-black/40 p-5 md:p-8 rounded-2xl space-y-5"
    >

 
      <div>
        <label className="block mb-2 text-sm md:text-[20px]">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 text-sm md:text-base bg-black/60 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
        />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <label className="block mb-2 text-sm  md:text-[20px]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            className="w-full p-3 text-sm md:text-base bg-black/60 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm md:text-base">
            Whatsapp Number
          </label>
          <input
            type="text"
            name="whatsapp"
            placeholder="01XXXXXXXXX"
            onChange={handleChange}
            className="w-full p-3 text-sm  md:text-[20px] bg-black/60 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
          />
        </div>

      </div>

 
      <div>
        <label className="block mb-2 text-sm  md:text-[20px]">
          Project Budget
        </label>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {budgets.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleBudget(item)}
              className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-lg border transition
                ${
                  form.budget === item
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "border-gray-500 text-gray-300 hover:bg-purple-500 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm  md:text-[20px]">
          Project Details
        </label>

        <textarea
          name="details"
          placeholder="I want to redesign my old brochure..."
          onChange={handleChange}
          className="w-full p-3 text-sm md:text-base bg-black/60 border border-gray-600 rounded-lg h-32 md:h-36 outline-none focus:border-purple-500"
        ></textarea>
      </div>

   
      <button
        type="submit"
        className="w-full md:w-auto bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-500 transition text-sm md:text-base"
      >
        Let’s Connect →
      </button>

    </form>
  );
};

export default Form;