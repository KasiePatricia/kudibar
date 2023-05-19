import React from "react";
import ScreenAnalytics from "../../assets/images/screen-analytics.png";
import ScreenEvent from "../../assets/images/screen-events.png";
import ScreenTicketing from "../../assets/images/screen-ticketing.png";
import Button from "../Button";

const Event = () => {
  return (
    <section className=" py-4 md:py-10 bg-[#fafafa] bg-pattern-stripes md:bg-pattern-side-nav bg-repeat">
      <div className=" relative max-w-[1286px] p-3 md:p-8 grid gap-6 mx-auto  text-center !py-10 sm:!py-24 !max-w-5xl">
        <div className=" text-left sm:text-center">
          <h3 className=" font-normal text-base sm:text-2xl text-[#ADABAB]">
            We are more than a ticketing platform
          </h3>
          <h2 className=" text-3xl sm:text-5xl text-clrPrimary font-bold mb-6 sm:mb-14">
            An Arena of Events
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className=" min-h-[400px] bg-clrBGEvent1 relative rounded-3xl flex flex-wrap justify-center gap-10 p-10 !pt-12 !pb-0  overflow-hidden w-full">
            <div className="max-w-[372px] text-left">
              <h4 className=" text-4xl font-bold text-left mb-4 text-clrTEXTEvent1">
                Analytics <br />
                Management
              </h4>
              <p className=" text-base font-normal max-w-[328px]">
                Monitor the performance of your events ranging from click rates,
                likes, ticket sales, you name it, we got it covered.
              </p>
            </div>
            <img
              width="527"
              height="400"
              className=" absolute bottom-0 mx-auto h-[145px] object-contain"
              src={ScreenAnalytics}
              alt="Screen Analytics"
            />
          </div>
          <div className=" min-h-[400px] bg-clrBGEvent2 relative rounded-3xl flex flex-wrap justify-center gap-10 p-10 !pt-12 !pb-0  overflow-hidden w-full">
            <div className="max-w-[372px] text-left">
              <h4 className="text-clrTEXTEvent2 text-4xl font-bold text-left mb-4">
                Virtual Event Gallery
              </h4>
              <p className=" text-base font-normal max-w-[328px]">
                Monitor the performance of your events ranging from click rates,
                likes, ticket sales, you name it, we got it covered.
              </p>
            </div>
            <img
              width="308"
              height="622"
              className=" w-52"
              src={ScreenEvent}
              alt="Event Screen"
            />
          </div>
          <div className=" col-span-full min-h-[350px] bg-clrBGEvent3 relative rounded-3xl flex flex-wrap sm:flex-nowrap justify-center gap-10 p-10 !pt-12 !pb-0  overflow-hidden w-full">
            <div className="max-w-[372px] text-left shrink-0 flex-1">
              <h4 className=" text-4xl text-clrTEXTEvent3 font-bold text-left mb-4">
                Event Ticketing <br />
                Made Easy
              </h4>
              <p className=" text-base font-normal max-w-[328px] mb-6">
                Experience ticket purchase and management at the highest level
                of ease with one click of a button.
              </p>
              <Button text={"Get Your Tickets"} />
            </div>
            <div className=" grow-0 shrink sm:w-[35%] flex-col flex justify-end">
              <img
                width="337"
                height="622"
                className=" object-contain"
                src={ScreenTicketing}
                alt="Ticketing screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
