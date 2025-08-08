import React from "react";

function ContactForm() {
  return (
    <div className="bg-[#e6d1b0] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#58564c] mb-4">
            Contact Us
          </h1>
          <p className="text-[#58564c] mb-6 sm:mb-10 text-base sm:text-lg max-w-md">
            Have a question or want to start a project? Reach out to us today.
            We’d love to hear from you.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm text-[#58564c]">First name</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 p-3 rounded-md bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-[#58564c]">Last name</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 p-3 rounded-md bg-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm text-[#58564c]">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-400 p-3 rounded-md bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-[#58564c]">Phone</label>
                <div className="flex">
                  <select className="border border-gray-400 rounded-l-md p-3 bg-transparent">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>
                  <input
                    type="tel"
                    className="w-full border border-gray-400 border-l-0 outline-0 rounded-r-md p-3 bg-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#58564c]">Long answer</label>
              <textarea
                rows="5"
                className="w-full border border-gray-400 p-3 rounded-md bg-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#58564c] text-white py-3 rounded-md text-base sm:text-lg hover:bg-[#47453d] transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <img
            src="https://static.wixstatic.com/media/11062b_96d3a9781cd04ad390be5a4de30f5a52~mv2.jpg/v1/fill/w_841,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_96d3a9781cd04ad390be5a4de30f5a52~mv2.jpg"
            alt="Decorative pots"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
