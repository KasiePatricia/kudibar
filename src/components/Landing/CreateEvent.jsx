import React from "react";
import { CREATE_DATA } from "../../data/CreateData";
import CreateEventBox from "../CreateEventBox";

const CreateEvent = () => {
  return (
    <section className=" bg-clrCreateBG">
      <div className=" relative max-w-[1286px] p-3 md:p-8 gap-6 mx-auto  text-center !py-10 sm:!py-24 !max-w-5xl">
        <div className="text-left sm:text-center">
          <h3 className="font-normal text-base sm:text-2xl text-clrText2">
            Make your events more memorable
          </h3>
          <h2 className=" text-3xl sm:text-5xl text-clrPrimary font-bold mb-6 sm:mb-14">
            Start Creating Today
          </h2>
        </div>
        <div className="flex flex-wrap gap-6 text-white">
          {CREATE_DATA.map((item, index) => {
            return <CreateEventBox key={index} items={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
