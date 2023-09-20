import React from "react";
import Image from "next/image";
import imageEmpty from "../../assets/kettle-desaturated._CB424694188_.svg";

import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "@/types/types";
import Link from "next/link";
const EmptyCart = () => {
  const { isLoading } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading ? (
        <>
          <div className="flex gap-[2rem] bg-white p-[2rem] w-[80rem] mx-auto">
            <Image src={imageEmpty} alt="empty-cart" className="w-[20rem]" />
            <div>
              <h2 className="text-[1.5rem] font-[600]">
                Your Amazon Cart is empty
              </h2>
              <p className="mb-[1rem] font-[600] text-[0.9rem] text-[#486c72]">
                <Link href="../">Shop todays deals</Link>
              </p>
              <div className="flex gap-2">
                <Link href="../login">
                  <button className="py-[0.2rem] px-[0.6rem] bg-amazon_yellow_light rounded-xl font-[400]">
                    Sign in to your account
                  </button>
                </Link>
                <Link href="../register">
                  <button className="py-[0.2rem] px-[0.6rem] border-2 rounded-xl font-[400]">
                    Sign up now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <p className="w-[80rem] text-[0.8rem] my-[2rem] ">
            The price and availability of items at Amazon.com.au are subject to
            change. The Shopping Cart is a temporary place to store a list of
            your items and reflects each items most recent price.
            <br /> Do you have a promotional code? Well ask you to enter your
            claim code when its time to pay.
          </p>
        </>
      ) : (
        <div className="flex gap-1 bg-white p-[2rem] w-[80rem] mx-auto flex-col">
          <h2 className="text-[1.6rem] font-[500] tracking-tight">
            Your Amazon shopping cart is empty.
          </h2>
          <p>
            Your shopping cart is here to serve you. Give it a purpose — fill it
            with food, clothing, household items, electronics, and more.
            Continue shopping on the <Link href="../" className="text-[#486c72] ">Amazon.com homepage</Link>, learn
            more about Daily Deals, or access your <Link href="../wishlist">Wishlist</Link>.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmptyCart;
