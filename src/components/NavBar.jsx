import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { hero } from "../assets";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative ">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-opacity-1 z-50 bg-purple-700 shadow-lg">
        <div className="flex justify-between items-center lg:mx-10 p-4 max-md:mx-0 m-auto">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold uppercase text-white">
            Travify
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-3xl max-sm:text-2xl md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-5 text-white">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/service" className="hover:underline">
              Services
            </Link>
            <Link to="/booknow" className="hover:underline">
              Book now
            </Link>
            <Link to="/news" className="hover:underline">
              News
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact us
            </Link>
            <Link to="/about" className="hover:underline">
              About us
            </Link>
          </nav>
        </div>
      </div>

      <div className="absolute bg-black inset-0 opacity-65 z-0"></div>
      {/* Hero Section with Background Image */}
      <div
        className="imageHero" //
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Hero Content */}
        <div className="text-center space-y-4 z-20">
          <h1 className="text-4xl max-md:text-2xl max-md:tracking-normal  font-bold uppercase tracking-wide text-white">
            Explore the World with Travify
          </h1>
          <p className="text-2xl max-md:text-2xl max-sm:text-[1rem] max-w-xl mx-auto text-slate-100 pb-5 max-sm:leading-normal">
            Discover your next adventure with us. Book with ease and travel
            confidently.
          </p>
          <div className="flex justify-center text-center gap-4">
            <Link
              to="/booknow"
              className="border-customPurple border-2 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-600 transition duration-300 capitalize"
            >
              book now
            </Link>
          </div>
        </div>
      </div>

      {/* Off-Canvas Sidebar Menu for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-[10000]`}
      >
        <div className="relative w-full h-full top-0 bg-gray-100 p-5 z-50">
          <Link
            to="/"
            className="text-3xl font-bold uppercase text-purple-700 hover:text-purple-800"
            onClick={() => setIsOpen(false)}
          >
            Travify
          </Link>

          <button
            className="absolute top-4 right-4 text-3xl text-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={30} />
          </button>

          <nav className="space-y-4 mt-10">
            <Link
              to="/"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/service"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/booknow"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book now
            </Link>
            <Link
              to="/news"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <Link
              to="/about"
              className="block text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
