import React from "react";
import Image from "next/image";
import imageEmpty from "../../assets/kettle-desaturated._CB424694188_.svg";
const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-[2rem] bg-white p-[2rem] mt-[2rem] w-[80rem] mx-auto">
        <Image src={imageEmpty} alt="empty-cart" className="w-[20rem]" />
        <div>
          <h2 className="text-[1.5rem] font-[600]">
            Your Amazon Cart is empty
          </h2>
          <p className="mb-[1rem] font-[600] text-[0.9rem] text-[#486c72]">
            Shop today's deals
          </p>
          <div className="flex gap-2">
            <button className="py-[0.2rem] px-[0.6rem] bg-amazon_yellow_light rounded-xl font-[400]">Sign in to your account</button>
            <button className="py-[0.2rem] px-[0.6rem] border border-2 rounded-xl font-[400]" >Sign up now</button>
          </div>
        </div>
      </div>
      <p className="w-[80rem] text-[0.8rem] my-[2rem] ">
        The price and availability of items at Amazon.com.au are subject to
        change. The Shopping Cart is a temporary place to store a list of your
        items and reflects each item's most recent price.<br/> Do you have a
        promotional code? We'll ask you to enter your claim code when it's time
        to pay.
      </p>
      </div>
  );
};

export default EmptyCart;
