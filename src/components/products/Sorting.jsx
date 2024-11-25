import React, { useState } from "react";
import FilterIcon from "../../assets/images/shop/shop-icon-filter.svg";
import GridIcon from "../../assets/images/shop/shop-icon-grid.svg";
import ViewListIcon from "../../assets/images/shop/shop-icon-viewlist.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Sorting() {
  return (
    <div className="w-full bg-orange-50">
      <div className="h-[100px] flex justify-center items-center">
        <div className="border-gray-200 px-4 lg:px-6 dark:bg-gray-800 max-w-screen-xl w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
              <button>
                <img
                  src={FilterIcon}
                  className="mr-3 h-6 sm:h-9"
                  alt="filter"
                />
              </button>
              <button>
                <img src={GridIcon} className="mr-3 h-6 sm:h-9" alt="grid" />
              </button>
              <button>
                <img
                  src={ViewListIcon}
                  className="mr-3 h-6 sm:h-9"
                  alt="list"
                />
              </button>
            </div>
            <div className="flex items-center lg:order-2">
              <div
                to="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <span>Brand</span>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Options
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="mt-8 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          Account settings
                        </a>
                      </MenuItem>
                      
                    </div>
                  </MenuItems>
                </Menu>
              </div>
              <div
                to="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <span>Category</span>
              </div>
              <div
                to="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <span>Sort by</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
