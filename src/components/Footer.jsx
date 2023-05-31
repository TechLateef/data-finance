import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Fcontent from "./Fcontent";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-9 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ml-0">
          REACT.
        </h1>
        <p className="py-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
        <div className=" flex justify-between md:w-[70%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGitSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-4">
        <Fcontent
          head="Solution"
          l1="Analytics"
          l2="Marketing"
          l3="Commerce"
          l4="Insight"
        />
        <Fcontent
          head="Support"
          l1="Pricing"
          l2="Documentation"
          l3="Guide"
          l4="API Status"
        />
        <Fcontent
          head="Company"
          l1="About"
          l2="Blog"
          l3="Jobs"
          l4="Press"
          l5="Partners"
        />
      </div>
    </div>
  );
}

export default Footer;
