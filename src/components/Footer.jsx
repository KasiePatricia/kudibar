import React from "react";
import Logo from "../assets/icons/logo-kudibar.svg";

const Footer = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="relative max-w-[1286px] px-3 md:px-8 grid gap-6  mx-auto my-8 border-b-2 border-gray-200">
          <div className="flex justify-between flex-wrap-reverse pb-9 pt-16 gap-6 text-clrPrimary">
            <div className=" grow-0 max-w-[260px] ">
              <img
                width="304"
                height="79"
                className="w-40 sm:w-72  mb-6"
                src={Logo}
                alt="Kudibar logo"
              />
              <p className="text-sm font-normal">
                Kudibar is your one stop shop for everything event tickets and
                cinema movies.
              </p>
            </div>
            <div className="flex flex-wrap gap-y-6 gap-x-16 sm:gap-x-32">
              <div>
                <h4 className="text-lg font-bold mb-4">About</h4>
                <ul>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Company</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Why Kudibar?</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Pricing</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Career</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Team</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Support</h4>
                <ul>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Contact Us</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">FAQ</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Legals</h4>
                <ul>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="mb-4 text-sm font-normal whitespace-nowrap">
                    <a href="/">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-[1286px] p-3 md:p-8">
          <p className="text-sm">All rights reserved © 2020 Kudibar</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
