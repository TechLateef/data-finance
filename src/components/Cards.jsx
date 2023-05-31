import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Item from "./Item";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Item
          url={Single}
          userType="Single User"
          price="$149"
          storage="500 GB Storage"
          userNo="1 Granted User"
          sendAmount="Send up to 2 GB"
        />

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8  mt-8">1 GB Storage</p>
            <p className="py-2 border-b mx-8 ">3 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 10 GB</p>
          </div>
          <button className="button bg-black w-[200px] rounded-md font-medium my-6  text-[#00df9a] py-3 px-6 mx-auto">
            {" "}
            Start Trial
          </button>
        </div>

        <Item
          url={Triple}
          userType="Group Account"
          price="$299"
          storage="5 TB Storage"
          userNo="10 Users Allowed"
          sendAmount="Sent up to 20GB"
        />
      </div>
    </div>
  );
}

export default Cards;
