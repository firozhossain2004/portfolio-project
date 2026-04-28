import React, { useState } from 'react'

const From = () => {
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
           
        >
           
            <label className="block mb-2">Full Name</label>
            <input
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-black/40 rounded-lg outline-none"
            />

         
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="yourmail@gmail.com"
                        onChange={handleChange}
                        className="w-full p-3 bg-black/40 rounded-lg outline-none"
                    />
                </div>

                <div>
                    <label>Whatsapp Number</label>
                    <input
                        type="text"
                        name="whatsapp"
                        placeholder="1123 1234567"
                        onChange={handleChange}
                        className="w-full p-3 bg-black/40 rounded-lg outline-none"
                    />
                </div>
            </div>

         
            <div className="mt-4">
                <label className="block mb-2">Project Budget</label>
                <div className="flex flex-wrap gap-3">
                    {budgets.map((item) => (
                        <button
                            type="button"
                            key={item}
                            onClick={() => handleBudget(item)}
                            className={`px-4 py-2 rounded-lg border ${form.budget === item
                                    ? "bg-purple-600 border-purple-600"
                                    : "border-gray-500"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="mt-4">
                <label>Project Details</label>
                <textarea
                    name="details"
                    placeholder="I want to redesign my old brochure..."
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-black/40 rounded-lg h-32 outline-none"
                ></textarea>
            </div>

            {/* Button */}
            <button
                type="submit"
                className="mt-6 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-500 transition"
            >
                Let’s Connect →
            </button>
        </form>
    );
};


export default From