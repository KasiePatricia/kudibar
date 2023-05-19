import React from "react";
import PlayStore from "../../assets/icons/playstore.svg";
import AppleStore from "../../assets/icons/app-store.svg";
import ScreenEvent from "../../assets/images/screen-events.png";

const Device = () => {
  return (
    <section className="bg-clrPrimary">
      <div className="relative flex justify-center flex-wrap max-w-[1286px] px-3 md:px-8 gap-6  mx-auto space-x-40">
        <div className="max-w-[406px] py-10 sm:py-24">
          <h4 className="text-white text-3xl sm:text-5xl font-bold mb-6">
            Experience the
            <br /> Arena effect on <br /> any device
          </h4>
          <p className="text-clrText mb-10 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in
            in mauris molestie turpis.
          </p>
          <div className="flex items-center sm:gap-4">
            <img
              height="72"
              className="w-36 sm:w-40"
              src={PlayStore}
              alt="Play store"
            />
            <img
              height="72"
              className="w-32 sm:w-36"
              src={AppleStore}
              alt="Apple store"
            />
          </div>
        </div>
        <div className="relative flex-col flex justify-end grow-0 shrink sm:w-[35%]">
          <img
            width="422"
            height="622"
            className=" w-80"
            src={ScreenEvent}
            alt="Event Screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Device;
