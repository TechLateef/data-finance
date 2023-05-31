import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Item({ url, userType, price, storage, userNo, sendAmount }) {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={url} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{userType}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8  mt-8">{storage}</p>
        <p className="py-2 border-b mx-8 ">{userNo}</p>
        <p className="py-2 border-b mx-8 ">{sendAmount}</p>
      </div>
      <button className="button bg-[#00df9a] w-[200px] rounded-md font-medium my-6  text-black py-3 px-6 mx-auto">
        {" "}
        Start Trial
      </button>
    </div>
  );
}

export default Item;
