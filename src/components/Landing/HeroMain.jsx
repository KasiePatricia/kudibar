import React from "react";
import Button from "../Button";

const HeroMain = () => {
  return (
    <div className=" relative max-w-[1286px] px-3 md:px-8 grid gap-6 mx-auto bg-[#edf7f5]">
      <section className="flex gap-28 overflow-hidden px-2 h-max ">
        <div className=" py-14 sm:py-28 flex-1 flex-shrink-0 relative">
          <h1
            className=" font-bold text-4xl sm:text-6xl max-w-xl text-clrPrimary capitalize mb-5 sm:mb-12"
            style={{ minHeight: "120px" }}
          >
            <p className="">Experience</p>
            <p className="">virtual events </p>
            <span className="">Like </span>
            <span className="relative whitespace-nowrap">
              <span className="">never before</span>
              <span className=" absolute bottom-0 translate-y-[68%] left-14 sm:left-14">
                <svg
                  width="288"
                  height="39"
                  className=" w-[160px] sm:w-[288px]"
                  viewBox="0 0 288 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11.4307C32.2411 7.02301 119.012 -0.469995 232.165 4.81918"
                    stroke="#109CF1"
                    stroke-width="5"
                    stroke-linecap="round"
                    className="stroke-dasharray: 229.535; stroke-dashoffset: 0; transition: stroke-dashoffset 0.2s ease-in-out 0s;"
                  ></path>
                  <path
                    d="M231.871 5.09631C149.356 8.52576 87.1625 19.3576 66.3803 24.3448"
                    stroke="#109CF1"
                    stroke-width="5"
                    stroke-linecap="round"
                    className="stroke-dasharray: 166.801; stroke-dashoffset: 0; transition: stroke-dashoffset 0.1s ease-in-out 0s;"
                  ></path>
                  <path
                    d="M67.0669 24.2526C95.1798 21.8411 178.091 19.9893 284.833 31.8736"
                    stroke="#109CF1"
                    stroke-width="5"
                    stroke-linecap="round"
                    className="stroke-dasharray: 218.162; stroke-dashoffset: 0; transition: stroke-dashoffset 0.1s ease-in-out 0s;"
                  ></path>
                </svg>
              </span>
              <span className="">.</span>
            </span>
          </h1>
          <p className=" mb-8 max-w-lg leading-6 text-clrText3 font-normal text-sm sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in
            in mauris molestie turpis.
          </p>
          <Button text={"Come Into The Arenas"} />
        </div>
        <div className=" relative shrink flex-1 hidden md:block ">
          <div className="h-10 bg-gradient-to-b from-transparent to-[#F6FBFD] absolute bottom-0 left-0 w-full z-[2] "></div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 absolute left-0 top-0 vertical-scroll -translate-y-full ">
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1187652065_slide-fef17c844ea0fc3fb5341d6c86636bfc85304671-s1100-c50.jpg"
              width="207"
              height="373"
              alt="Event Pictures"
            />
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
              width="207"
              height="373"
              alt="Event Pictures"
            />
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
              width="207"
              height="373"
              alt="Event Pictures"
            />
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1187652065_slide-fef17c844ea0fc3fb5341d6c86636bfc85304671-s1100-c50.jpg"
              width="207"
              height="373"
              alt="Event Pictures"
            />
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1187652065_slide-fef17c844ea0fc3fb5341d6c86636bfc85304671-s1100-c50.jpg"
              width="207"
              height="373"
              alt="Event Pictures"
            />
            <img
              className=" h-96 w-48 rounded-full object-cover even:-translate-y-1/2"
              src="https://www.rollingstone.com/wp-content/uploads/2023/02/01.jpg"
              width="207"
              height="373"
              alt="Event Pictures"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroMain;
