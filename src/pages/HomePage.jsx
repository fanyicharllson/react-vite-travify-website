import NavBar from "../components/NavBar";
// import Footer from '../components/Footer';
import Choose from "../sections/ChooseUs";
import Partners from "../sections/Partners";
import TopBookNow from "../sections/TopBookNow";
import Maldives from "../sections/Maldives";
import Faqs from "../sections/faqs";
import NewFeatures from "../sections/NewFeatures";
import Testimonial from "../sections/testimonial";
import News from "../sections/News";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Choose />
        <Partners />
        <TopBookNow />
        <Maldives />
        <Faqs />
        <NewFeatures />
        <Testimonial />
        <News />
      </main>

      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        <Footer/>
      </footer> */}
    </div>
  );
};

export default HomePage;
