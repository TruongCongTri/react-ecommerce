import React from 'react'
import HeaderLogo from "../../assets/images/header/header-logo.svg"
import CartIcon from "../../assets/images/header/icon-cart.svg"

import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const user = null;

    const renderLoginButtonByUser = () => {
        if (user) {
            return (<p className="text-xs">Xin chao, {user.name}</p>);
        } 
        return (<Link
            to="#"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
              Login
          </Link>);
    }



  return (
    <header className="h-[100px] flex justify-center items-center">
      <nav className="border-gray-200 px-4 lg:px-6 dark:bg-gray-800 max-w-screen-xl w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
            
              src={HeaderLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Brand Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
                <img
                src={CartIcon}
                className="" 
                alt="Icon cart"
                />
            </Link>
            {
                renderLoginButtonByUser()
            }
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
              <li className="px-10 py-1 hover:bg-neutral-200 border-black">
                <Link 
                  to="/"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="px-10 py-1 hover:bg-neutral-200 border-black">
                <Link
                  to="/shop"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </Link>
              </li>
              <li className="px-10 py-1 hover:bg-neutral-200 border-black">
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li className="px-10 py-1 hover:bg-neutral-200 border-black">
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
