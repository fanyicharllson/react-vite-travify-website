import { maldives } from "../assets";
import { Link } from "react-router-dom";

const Maldives = () => {
  return (
    <section className="relative mb-10">
      <div className="absolute bg-black inset-0 opacity-70"></div>
      <div
        className="max-lg:h-[500px] lg:h-[600px] h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url(${maldives})`,
        }}
      >
        {/* Maldives content */}
        <div className="max-container relative max-lg:w-[95%]">
          <div className=" text-white">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold  uppercase tracking-widest">
              explore maldives
            </h1>
          </div>

          <div className=" bg-white mt-9 max-lg:mt-7 h-[1px]"></div>
          <div className="mt-10 relative">
            <div className="overflow-hidden">
              <p className="text-sm max-sm:text-base tracking-widest leading-6 font-medium text-gray-100">
                Maldives is a landlocked island nation in the Indian Ocean. It
                has a coastline stretching from the Arabian Sea to the Gulf of
                Oman. The country is bordered by Bahrain to the east, Saudi
                Arabia to the north, Oman to the northwest, and the Arabian Sea
                to the south.
                <div className="py-4 mt-6">
                  <Link
                    to="/see more"
                    className="border-2 border-purple-600 bg-purple-600 rounded-full py-3 px-10 text-[15px]"
                  >
                    See More
                  </Link>
                </div>
              </p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative group rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={image.urls.regular}
                    alt={image.alt_description || "Maldives"}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maldives;
