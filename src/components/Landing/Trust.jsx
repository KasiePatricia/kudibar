import React from "react";
import Kennis from "../../assets/icons/logo-kennis.svg";
import KennisMusic from "../../assets/icons/logo-kennis-music.svg";
import BlueAfric from "../../assets/icons/logo-blue-afric.svg";
import Yebox from "../../assets/icons/logo-yebox.svg";
import BluePrint from "../../assets/icons/logo-blue-print.svg";
import EnuguSme from "../../assets/icons/logo-enugu-sme.svg";

const Trust = () => {
  return (
    <section className=" py-12 bg-clrBGTrust">
      <div className=" relative max-w-[1286px] p-3 md:p-8 grid gap-6    mx-auto !py-0 ">
        <h2 className=" text-2xl sm:mb-4 font-normal">Trusted By</h2>
        <div className="flex items-center flex-wrap justify-around grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={Kennis}
              alt="Kennis logo"
            />
          </div>
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={KennisMusic}
              alt="Kennis Logo"
            />
          </div>
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={BlueAfric}
              alt="Blue Afric logo"
            />
          </div>
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={Yebox}
              alt="Yebox logo"
            />
          </div>
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={BluePrint}
              alt="Blue Print Company Logo"
            />
          </div>
          <div>
            <img
              className=" h-[40px] sm:h-[60px] w-[90px] sm:w-[150px] "
              src={EnuguSme}
              alt="Enugu Sme"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
