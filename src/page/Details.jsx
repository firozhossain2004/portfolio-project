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
    const sliderImages = item.sliderImages || [];
    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            <div
                className="w-full h-[50vh] sm:h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${item.Heroimage})` }}

            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <h1
                        className=" text-white text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-semibold text-center px-4"
                    >
                        {item.title}
                    </h1>
                    <p className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-center  px-4">{item.ProjectLocation}</p>
                </div>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl text-center max-w-4xl mx-auto mt-12 md:mt-20  mb-12 md:mb-20 lg:mb-1 px-4 leading-relaxed ">
                {item.description}
            </h3>
            {item.Heroimage2 && (
                <div className="mb-10 mt-10 w-full max-w-6xl mx-auto">

                    {item.Heroimage2Type === "vimeo" ? (
                        <div className="relative w-full aspect-video overflow-hidden rounded-sm">
                            <iframe
                                src={`https://player.vimeo.com/video/${item.Heroimage2}`}
                                title={item.title}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img
                            src={item.Heroimage2}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-sm"
                        />
                    )}

                </div>
            )}

            <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-16">
                {item.hero3 && (
                    <div className="flex justify-center mb-10">
                        <img
                            src={item.hero3}
                            alt=""
                            className="w-full max-w-6xl h-auto object-cover rounded-sm mx-auto"
                        />
                    </div>
                )}
                <div>
                    <WorkSlider slides={sliderImages} />
                </div>
                {item.jpg5 && (
                    <div className="flex justify-center mt-10 ">
                        <img
                            src={item.jpg5}
                            alt=""
                            className="w-full max-w-6xl h-auto object-cover rounded-sm"
                        />
                    </div>
                )}
            </div>
            <div className="max-w-4xl  px-5 sm:px-6 lg:px-0  md:ml-36">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-20">

                    <div>
                        <h3 className="text-[#6650D7] font-semibold">Location</h3>
                        <h4 className="mt-2">{item.ProjectLocation}</h4>
                    </div>

                    <div>
                        <h3 className="text-[#6650D7] font-semibold">Completion</h3>
                        <h4 className="mt-2">{item.Completed}</h4>
                    </div>

                    <div>
                        <h3 className="text-[#6650D7] font-semibold">Client work</h3>
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
                    {remainingProjects.slice(0, 5).map((project) => (
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
              aspect-[4/3]
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