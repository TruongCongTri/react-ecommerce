import React from "react";

import SubHeaderWallPaper from "../../assets/images/subheader/subheader-wallpaper.svg";
import SubHeaderLogo from "../../assets/images/subheader/subheader-logo.svg";

import { Link, NavLink } from "react-router-dom";

export default function SubHeader() {
  return (
    <>
      <div className="">
        <div className="group w-full h-[300px]">
          <div className="relative h-full">
            <img
              src={SubHeaderWallPaper}
              alt=""
              className="w-full h-full bg-blend-multiply blur-sm object-cover"
            />
            <div className="absolute bottom-0 w-full lg:pt-4 lg:pt-6 p-5 flex justify-center items-center ">
              <div className=" p-6 block">
                <img src={SubHeaderLogo} />
                <h1 className="font-manrope text-4xl font-bold leading-10 font-medium">
                  Shop
                </h1>

                {/* <!-- Breadcrumb --> */}
                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                  <ul className="flex items-center gap-5">
                    <li>
                      {" "}
                      <Link
                        to="/"
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <span className="font-medium text-base leading-7 text-gray-900">
                          Home
                        </span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="javascript:;"
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="5"
                          height="20"
                          viewBox="0 0 5 20"
                          fill="none"
                        >
                          <path
                            d="M4.12567 1.13672L1 18.8633"
                            stroke="#E5E7EB"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="font-medium text-base leading-7 text-gray-400">
                          Account
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
