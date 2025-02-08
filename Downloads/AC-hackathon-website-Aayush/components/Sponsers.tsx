/** @format */

import Image from "next/image";
import React from "react";

const Sponsers = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-4xl md-text-7xl py-3 capitalize">
          OUR SPONSERS
        </h1>
        <p className="text-white font-medium text-xl">Supporting Partners</p>
        <p className="text-white font-light text-[15px] md:text-[20px] text-center md:px-20 py-5 ">
          Our esteemed sponsors play a vital role in making Hack-n-Droid a
          success. We are grateful for their generous support and commitment to
          fostering innovation and learning among college students.
        </p>
      </div>
      <div className="md:flex items-center justify-center gap-40 border-b-2 border-[#8ec1f484] ">
        <div className="flex flex-col items-center justify-center">
          <Image src="/dealzyIcon.png" width={250} height={250} alt="dealzy" />
          <p className="text-[#F4714D] text-center font-bold text-7xl pb-4">
            Dealzy
          </p>
        </div>
        <div className="hidden md:flex border-r-2 border-[#8ec1f484] w-2 h-96" />
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/sashidoIcon.png"
            width={250}
            height={250}
            alt="sashido"
          />
          <p className="text-[#149AFF] text-center font-bold text-7xl pb-4">
            Sashido
          </p>
        </div>
      </div>
    </>
  );
};

export default Sponsers;
