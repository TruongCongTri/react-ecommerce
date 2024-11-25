import React from "react";

export default function ContactForm() {
  return (
    <section className="py-24 relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="w-full flex-col justify-center items-center gap-4 flex">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Get In Touch With Us
          </h2>
          <p className="max-w-xl text-center text-gray-500 text-base font-normal leading-relaxed">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="lg:mx-auto text-left ">
            <ul className="text-base font-medium transition-all duration-500">
              <li className="mb-10">
                <label>Address</label>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </li>
              <li className="mb-10">
                <label>Phone</label>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </li>
              <li className="mb-10">
                <label>Working Time</label>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </li>
            </ul>
          </div>

          <form className="text-left">
            <ul className="text-base font-medium transition-all duration-500">
              <li className="mb-10">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Your name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="John"
                />
              </li>
              <li className="mb-10">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Last Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="Smith"
                />
              </li>
              <li className="mb-10">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Email address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="028 2154-2541"
                />
              </li>
              <li className="mb-10">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Subject
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="396 Matilda Falls, New Theresiaboro 14897-2774"
                />
              </li>
              <li className="mb-10">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <textarea
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="396 Matilda Falls, New Theresiaboro 14897-2774"
                />
              </li>
              <li className="mb-10">
                <button className="mx-auto sm:w-fit w-full px-9 py-3 bg-indigo-600 hover:bg-indigo-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex">
                  <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">
                    Submit
                  </span>
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}
