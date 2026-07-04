
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (

        <a
            drag
            dragMomentum={false}
            href="https://wa.me/8801646626226?text=Hello%20Raihan,%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed
        bottom-5
        right-5
        z-50
        group
        
      "
        >

            <div
                className="
          flex
          items-center
          bg-[#25D366]
          text-white
          rounded-full
          shadow-xl
          hover:shadow-green-500/40
          transition-all
          duration-300
          hover:scale-105
          px-4
          py-3
        "
            >
                <FaWhatsapp className="text-3xl" />

                <span
                    className="
            hidden
            md:block
            ml-3
            font-medium
            whitespace-nowrap
          "
                >
                    Let's Chat
                </span>
            </div>
        </a>

    );
};

export default WhatsAppButton;