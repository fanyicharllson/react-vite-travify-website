import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/100",
      text: "This travel agency provided the best vacation of my life! Highly recommended.",
      title: "Adventurer",
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/100",
      text: "Amazing service and wonderful destinations. Can't wait to book again!",
      title: "Explorer",
    },
    {
      name: "Alex Brown",
      image: "https://via.placeholder.com/100",
      text: "A seamless experience from start to finish. Thank you for making it so easy!",
      title: "Globetrotter",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        What Our Clients Say
      </h2>

      <div className="text-center text-sm text-white mb-4 sm:hidden">
        <div className="animate-pulse">
          <span>Swipe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white inline-block animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        touchRatio={0.5}
        touchStartPreventDefault={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-10  transition-transform duration-300 hover:scale-105">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full shadow-md mb-6"
              />
              <p className="text-lg text-gray-700 italic mb-4">
                {testimonial.text}
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <span className="text-sm text-gray-500">{testimonial.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
