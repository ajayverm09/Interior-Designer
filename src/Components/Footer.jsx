import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f7f3e8] text-[#58564c] px-6 py-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-12">
      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-none">Felix O.</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">Nguyen</h1>
        </div>

        <div className="space-y-2 mt-8 sm:mt-12 md:mt-40 text-sm sm:text-base">
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>

        <div className="flex gap-4 text-lg sm:text-xl">
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="flex-1 max-w-lg w-full">
        <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Get Our Newsletter</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="w-full border border-gray-400 px-3 py-2 text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe" className="text-xs sm:text-sm">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#58564c] text-white px-4 sm:px-6 py-2 w-full hover:opacity-90"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 sm:mt-8 text-xs sm:text-sm space-y-1">
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>

        <p className="text-xs sm:text-sm mt-4 sm:mt-6">
          © 2035 by Felix O. Nguyen. Powered and secured by{" "}
          <a href="#" className="underline">
            Wix
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
