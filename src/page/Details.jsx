import { useParams, Link } from "react-router-dom";
import data from "../Data/workimg";
import WorkSlider from "../components/WorkSlider";

const Details = () => {
    const { id } = useParams();
    const item = data.find((d) => d.id.toString() === id);
    const remainingProjects = data.filter(
        (d) => d.id.toString() !== id
    );

    if (!item) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center text-3xl">
                Not Found
            </div>
        );
    }
    const sliderImages = item.images || [];
    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            <div
                className="w-full h-[50vh] sm:h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${item.img})` }}
            >
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto mt-12 md:mt-20 lg:mt-28 mb-12 md:mb-20 lg:mb-1 px-4 leading-relaxed ">
                Setting a new gold standard for Green Square, this cornerstone
                residential tower stands tall above one of Sydney’s most vibrant and
                coveted communities. Admire breathtaking, panoramic vistas from
                the comfort of your own home.
            </h3>
            {item.images?.[1] && (
                <div className="mb-10 mt-10">
                    <img
                        src={item.images[1]}
                        alt=""
                        className="w-full h-auto object-cover rounded-sm"
                    />
                </div>
            )}

            <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-16">
                {item.images?.[2] && (
                    <div className="flex justify-center mb-10">
                        <img
                            src={item.images[2]}
                            alt=""
                            className="w-full max-w-6xl h-auto object-cover rounded-sm mx-auto"
                        />
                    </div>
                )}
                <div>
                    <WorkSlider slides={sliderImages} />
                </div>
                {item.images?.[3] && (
                    <div className="flex justify-center mt-10 ">
                        <img
                            src={item.images[3]}
                            alt=""
                            className="w-full max-w-6xl h-auto object-cover rounded-sm"
                        />
                    </div>
                )}
            </div>
     <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-0 ">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-20">

    <div>
      <h3 className="text-[#6650D7] font-semibold">Project Location</h3>
      <h4 className="mt-2">{item.ProjectLocation}</h4>
    </div>

    <div>
      <h3 className="text-[#6650D7] font-semibold">Completed</h3>
      <h4 className="mt-2">{item.Completed}</h4>
    </div>

    <div>
      <h3 className="text-[#6650D7] font-semibold">Client</h3>
      <h4 className="mt-2">{item.Client}</h4>
    </div>

    <div>
      <h3 className="text-[#6650D7] font-semibold">Credits</h3>
      <h4 className="mt-2">{item.Credits}</h4>
    </div>

  </div>
</div>
            <div className="mt-10 mb-10">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
                    {remainingProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/details/${project.id}`}
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="
                                    w-full
                                    aspect-4/3
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-110
                                    "
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Details;