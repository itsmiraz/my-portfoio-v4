/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const HireMeOnUpwork = () => {
  return (
    <div className="py-40 px-4 flex justify-center items-center ">
      <div>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white text-center leading-tight ">
          Hire Me  Your Next{" "}
          <br className="md:block hidden" /> <span className="text-blue-500"> Full-Stack Developer</span>
        </h2>
        <p className=" text-center text-[#E6E6E6] pt-5 text-[14px] md:text-[16px]">
          Interested in collaborating on a project? Visit my Upwork profile to
          view my portfolio, client <br className="md:block hidden" /> reviews, and to get in touch for
          potential opportunities. Let's create something amazing <br className="md:block hidden" />{" "}
          together!
        </p>
        <Link
          href={"https://www.fiverr.com/s/VY6dy1x"}
        >
          <button className="text-center mx-auto  flex justify-center bg-gradient-to-r from-[#002B3C] to-[#011D27] border py-4 mt-6 px-10 text-white text-[18px] border-[#6971A2] rounded-[10px] ">
          Book A Call
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HireMeOnUpwork;
