import React from "react";
import SubFooterQuality from "../../assets/images/subfooter/subfooter-quality.svg";
import SubFooterWarranty from "../../assets/images/subfooter/subfooter-warranty.svg";
import SubFooterShipping from "../../assets/images/subfooter/subfooter-shipping.svg";
import SubFooterSupport from "../../assets/images/subfooter/subfooter-support.svg";

export default function SubFooter() {
  return (
    <div className="w-full bg-orange-50">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="lg:mx-auto text-left ">
            <img
              src={SubFooterQuality}
              className="flex ml-8 h-16"
              alt="Brand Logo"
            />
          </div>

          <div className="lg:mx-auto text-left ">
            <img
              src={SubFooterWarranty}
              className="flex ml-8 h-16"
              alt="Brand Logo"
            />
          </div>

          <div className="lg:mx-auto text-left ">
            <img
              src={SubFooterShipping}
              className="flex ml-8 h-16"
              alt="Brand Logo"
            />
          </div>

          <div className="lg:mx-auto text-left">
            <img
              src={SubFooterSupport}
              className="flex ml-8 h-16"
              alt="Brand Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
