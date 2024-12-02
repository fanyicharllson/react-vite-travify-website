import { useState, useEffect } from "react";
import LinkBtn from "../components/LinkBtn";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const TopBookNow = () => {
  const [images, setImages] = useState([]);

  //fetch images from unsplash

  const fetchImages = async () => {
    try {
      const respond = await fetch(
        `https://api.unsplash.com/search/photos?query=cityscapes&per_page=6&client_id=${accessKey}`
      );
      const data = await respond.json();
      setImages(data.results);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="py-12 max-sm:py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="heading uppercase">Top Book now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description || "Cityscape"}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300 "
              />
              <div className="absolute inset-0 left-4 top-4 bg-gray-900 max-h-10 max-w-24 rounded-lg flex justify-center items-center text-center">
                <p className="text-[15px] text-purple-700 font-bold">ratings</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* <p className="text-white font-semibold text-lg mb-2">
                  {image.location?.city || "City"}
                </p> */}
                <p className="text-gray-300 text-sm">
                  {image.location?.country || "Country"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center">
          <LinkBtn message="See all" />
        </div>
      </div>
    </section>
  );
};

export default TopBookNow;
