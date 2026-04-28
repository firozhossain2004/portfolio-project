import { useParams } from "react-router-dom";
import data from "../js/workimg";

const Details = () => {
    const { id } = useParams();

    const item = data.find(d => d.id.toString() === id);

    if (!item) {
        return <div className="text-white">Not Found</div>;
    }

    return (
        <div className="bg-black text-white min-h-screen">


            <div className="h-[80vh]">
                <img
                    src={item.img}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-black px-20 py-16">


                <div className="grid grid-cols-2 gap-6 mb-6">
                    <img src={item.caktagoreimg2} className="w-full h-64 object-cover rounded-xl" />
                    <img src={item.caktagoreimg3} className="w-full h-64 object-cover rounded-xl" />
                </div>


                <div className="mb-6">
                    <img
                        src={item.caktagoreimg5}
                        className="w-full h-96 object-cover rounded-xl"
                    />
                </div>


                <div className="grid grid-cols-2 gap-6">
                    <img src={item.caktagoreimg2} className="w-full h-64 object-cover rounded-xl" />
                    <img src={item.caktagoreimg3} className="w-full h-64 object-cover rounded-xl" />
                </div>

            </div>


        </div>
    );
};

export default Details;