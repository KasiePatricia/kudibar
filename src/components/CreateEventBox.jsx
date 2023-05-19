import React from "react";

const CreateEventBox = ({ items: { title, description } }) => {
  return (
    <div className=" flex-1 min-w-[250px] relative overflow-hidden h-48 sm:h-60 rounded-3xl p-6 sm:p-10 flex justify-end text-left flex-col cursor-pointer group ">
      <div className=" absolute top-0 left-0 h-full w-full group-hover:scale-[1.05] transition-all z-0 bg-gradient-to-br from-black via-black !to-transparent !bg-custom-image bg-center bg-cover bg-no-repeat"></div>
      <div className="flex items-center mb-2  z-[2]">
        <h3 className=" text-2xl sm:text-4xl font-bold  mr-4">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 group-hover:scale-[1.3] group-hover:w-12 group-hover:translate-x-1 transition-all"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </div>
      <p className="z-[2] text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default CreateEventBox;
