import React from "react";
import FooterLogo from "../../assets/images/footer/footer-logo.svg";

import { Link, NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              to="/"
              className="flex justify-center lg:justify-start pb-5"
            >
              <img
                src={FooterLogo}
                className="mr-3 h-6 sm:h-9"
                alt="Brand Logo"
              />
            </Link>
            <p className="pt-5 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="pt-2 pb-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              FL 33134 USA
            </p>
          </div>

            {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-base font-medium text-gray-400 mb-7 pb-5">
              Links
            </h4>
            <ul className="text-base font-medium transition-all duration-500">
              <li className="mb-10">
                <Link
                  to="/"
                  className="text-black hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="mb-10">
                <Link
                  to="/shop"
                  className="text-black hover:underline"
                >
                  Shop
                </Link>
              </li>
              <li className="mb-10">
                <Link
                  to="/about"
                  className="text-black hover:underline"
                >
                  About
                </Link>
              </li>
              <li >
                <Link
                  to="/contact"
                  className="text-black hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

            {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-base font-medium text-gray-400 mb-7 pb-5">
              Help
            </h4>
            <ul className="text-base font-medium transition-all duration-500">
              <li className="mb-10">
                <Link
                  to="/"
                  className="text-black hover:underline"
                >
                  Payment Options
                </Link>
              </li>
              <li className="mb-10">
                <Link
                  to="/"
                  className="text-black hover:underline"
                >
                  Returns
                </Link>
              </li>
              <li >
                <Link
                  to="/"
                  className="text-black hover:underline"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <h4 className="text-base font-medium text-gray-400 mb-7 pb-4 text-center lg:text-left">
              Newsletter
            </h4>

            <form className="flex items-center max-w-lg mx-auto">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="subscribe"
                  className="block w-full border-b border-black "
                  placeholder="Enter your email address "
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 hover:bg-neutral-200 "
              
                >
                <span className="border-b border-black">SUBCRIBE</span>
                
              </button>
            </form>
          </div>
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©<Link to="/">pagedone</Link> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
