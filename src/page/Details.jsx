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
    const sliderImages = [
        item.img,
        item.caktagoreimg2,
        item.caktagoreimg3,
        item.caktagoreimg4,
        item.caktagoreimg5,
    ].filter(Boolean);
    return (
        <div className="bg-black text-white min-h-screen">
            <div
                className="w-full h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${item.img})` }}
            >
                <div className="absolute inset-0  flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        {item.title || "Project Details"}
                    </h1>
                </div>

            </div>
            <h3 className=" text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto mt-12 md:mt-20 lg:mt-28 mb-12 md:mb-20 lg:mb-28 px-4 leading-relaxed ">
                Setting a new gold standard for Green Square, this cornerstone
                residential tower stands tall above one of Sydney’s most vibrant and
                coveted communities. Admire breathtaking, panoramic vistas from
                the comfort of your own home.
            </h3>
            <div className="flex flex-1 md:flex-1 gap-6 mb-10 mt-10">
                {/* big img */}
                <img
                    src={item.caktagoreimg2}
                    alt=""
                    className="w-full h-[700px] object-cover rounded-sm"
                />
            </div>

            <div className="px-5 md:px-16 lg:px-32 py-16">
                <div className="flex flex-1 md:flex-1 gap-6 mb-10 justify-center">
                    <img
                        src={item.caktagoreimg2}
                        alt=""
                        className="w-6xl h-[650px] object-cover rounded-sm "
                    />
                </div>
                <div>
                    <WorkSlider slides={sliderImages} />
                </div>

                <div className="flex flex-1 md:flex-1 gap-6 mb-10 mt-10 justify-center">
                    <img
                        src={item.caktagoreimg2}
                        alt=""
                        className="w-6xl h-[650px] object-cover rounded-sm"
                    />
                </div>
                <div className="px-10 grid grid-cols-1 md:grid-cols-2 w-xl gap-8">

                    <div>
                        <h3 className="text-[#6650D7]">Project Location</h3>
                        <h4>{item.ProjectLocation}</h4>
                    </div>
                    <div>
                        <h3 className="text-[#6650D7]">Completed</h3>
                        <h4>{item.Completed}</h4>
                    </div>
                    <div>
                        <h3 className="text-[#6650D7]">Client</h3>
                        <h4>{item.Client}</h4>
                    </div>
                    <div>
                        <h3 className="text-[#6650D7]">Credits</h3>
                        <h4>{item.Credits}</h4>
                    </div>
                </div>
            </div>
<div className="mt-10 mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
              h-64
              sm:h-72
              md:h-80
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