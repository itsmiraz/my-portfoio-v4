/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const HireMeOnUpwork = () => {
  return (
    <div className="py-40 flex justify-center items-center ">
      <div>
        <h2 className="text-[48px] font-bold text-white text-center leading-tight ">
          Hire Me on <span className="text-[#00FF66]">Upwork</span> Your Next{" "}
          <br /> Full-Stack Developer
        </h2>
        <p className=" text-center text-[#E6E6E6] pt-5 text-[16px]">
          Interested in collaborating on a project? Visit my Upwork profile to
          view my portfolio, client <br /> reviews, and to get in touch for
          potential opportunities. Let's create something amazing <br />{" "}
          together!
        </p>
        <Link
          href={"https://www.upwork.com/freelancers/mirajh5?mp_source=share"}
        >
          <button className="text-center mx-auto  flex justify-center bg-gradient-to-r from-[#002B3C] to-[#011D27] border py-4 mt-6 px-10 text-white text-[18px] border-[#6971A2] rounded-[10px] ">
            Visit my Upwork Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HireMeOnUpwork;
