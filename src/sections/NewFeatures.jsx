import { useState, useEffect } from "react";
import NewFeatureText from "../components/NewFeatureText";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const NewFeatures = () => {
  const [images, setImages] = useState([]);

  //fetch images from unsplash

  const fetchImages = async () => {
    try {
      const respond = await fetch(
        `https://api.unsplash.com/search/photos?query=beach+vacation&per_page=3&client_id=${accessKey}`
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
    <section className="bg-gray-100 pb-12 max-sm:py-6">
      <h1 className="heading capitalize">Feature news</h1>
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description || "Beach"}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300 "
              />
              <NewFeatureText
                date="02 December 2024"
                text="Top 10 Beatiful Beaches"
              />
              <div className="pb-3 px-3 text-purple-800">
                <Link to="/see more" className="animate-pulse flex items-center gap-2 text-center">
                  <span>See more</span>
                  <FaArrowRight className="text-purple-700" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
