/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const HireMeOnUpwork = () => {
  return (
    <div className="py-40 px-4 flex justify-center items-center ">
      <div>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white text-center leading-tight ">
          Hire Me Your Next <br className="md:block hidden" />{" "}
          <span className="text-[#25D366]"> Full-Stack Developer</span>
        </h2>
        <p className=" text-center text-[#E6E6E6] pt-5 text-[14px] md:text-[16px]">
          Interested in collaborating on a project? Visit my Upwork profile to
          view my portfolio, client <br className="md:block hidden" /> reviews,
          and to get in touch for potential opportunities. Let's create
          something amazing <br className="md:block hidden" /> together!
        </p>
        <Link href="https://wa.me/8801740065272" target="_blank">
          <button className="text-center mx-auto flex justify-center bg-gradient-to-r from-[#25D366] to-[#25D366] border py-2 font-semibold mt-6 px-10 text-gray-900 text-[18px] border-[#2d2e31] rounded-[10px]">
            Book A Call
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HireMeOnUpwork;
