import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" px-10 py-3 overflow-hidden rounded-full border-2 relative  group border-clrPrimary  text-xs sm:text-base focus:ring-4 focus:ring-[#023e4f70]">
      <div className=" absolute inset-0 h-full w-0 group-hover:w-full group-focus:w-full transition-all bg-white group-focus:bg-clrPrimary group-hover:bg-clrPrimary z-0"></div>
      <span className="text-black group-hover:text-white group-focus:text-white relative">
        {text}
      </span>
    </button>
  );
};

export default Button;
