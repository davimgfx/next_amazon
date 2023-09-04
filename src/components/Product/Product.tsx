import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { ProductProps } from "../../types/types";


  
const Product = ({ product }) => {
  const {
    brand,
    category,
    description,
    image,
    isNew,
    oldPrice,
    price,
    title,
    _id,
  } = product;

  return (
    <div
      key={_id}
      className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden my-[2rem] cursor-pointer relative z-50">
      <div className="w-full">
        <Image
          alt="productImage"
          src={image}
          width={300}
          height={300}
          className="w-full h-full object-cover  hover:scale-110"
        />
      </div>
      {isNew && (
        <span className="py-[0.2rem] px-[0.4rem] bg-amazon_red text-white rounded-[0.2rem]">
          Up to {(((oldPrice - price) / oldPrice) * 100).toFixed(0)}% off
        </span>
      )}
      <h2>{title}</h2>
      {isNew && (
        <p>
          $ {price} <span>Was: $ {oldPrice}</span>
        </p>
      )}
      {!isNew && <p>$ {price} </p>}
      <div
        className="w-12 h-24 absolute bottom-[10rem] right-0 border-[1px] border-gray-400 bg-white rounded-md
          flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
        <span className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:text-amazon_red cursor-pointer duration-300">
          <HiShoppingCart />
        </span>
        <span className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:text-amazon_red cursor-pointer duration-300">
          <FaHeart />
        </span>
      </div>
    </div>
  );
};

export default Product;
