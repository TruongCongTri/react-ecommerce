import React from "react";

export default function g() {
  return (
    <nav className="py-5 transition-all duration-500 w-full  bg-white border-b border-solid border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex  flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className=" flex justify-between  lg:flex-row">
            <a href="javascript:;" className="flex items-center">
              
            </a>
            
          </div>
          <div className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto" id="navbar-default">
            <ul className="flex lg:items-center lg:justify-center flex-col max-lg:gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto">
              <li>
                <a
                  href="javascript:;"
                  className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                >
                  About us
                </a>
              </li>
              <li className="relative">
                <button
                  data-dropdown-toggle="menu1"
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                >
                  Products
                </button>
                
              </li>
              <li className="relative">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-trigger="click"
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                >
                  Features
                  
                </button>
                
              </li>
            </ul>
            <div className="flex items-center ml-5 justify-center">
              <button className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                Login
              </button>
              <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
