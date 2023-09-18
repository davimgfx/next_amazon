import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { ProductProps } from "../../types/types";
import { addToCart, addToFavorite } from "@/store/nextSlice";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../types/types";
import { addToShoppingCartList } from "@/utils/firebase/firebase";

function PromoPercent(price: number, oldPrice: number): string {
  return (((oldPrice - price) / oldPrice) * 100).toFixed(0);
}

const Product = ({ product }: { product: ProductProps }) => {
  const { user } = useSelector((state: StateProps) => state.next);

  const dispatch = useDispatch();

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

  const handleAction = (actionType: "cart" | "favorite") => {
    const action = actionType === "cart" ? addToCart : addToFavorite;
    dispatch(
      action({
        _id,
        brand,
        category,
        description,
        image,
        isNew,
        oldPrice,
        price,
        title,
        quantity: 1,
      })
    );
  };

  return (
    <div
      key={_id}
      className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden my-[2rem]  relative z-50">
      <div className="w-full">
        <Image
          alt="productImage"
          src={image}
          width={300}
          height={300}
          className="w-full h-full object-cover  hover:scale-110 cursor-pointer"
        />
      </div>

      {isNew && (
        <span className="py-[0.2rem] px-[0.4rem] bg-amazon_red text-white rounded-[0.2rem]">
          Up to {PromoPercent(price, oldPrice)}% off
        </span>
      )}

      <h2>{title}</h2>
      {isNew && (
        <p>
          $ {price}{" "}
          <del className="text-[#777] text-[0.9rem]">Was: $ {oldPrice}</del>
        </p>
      )}
      {!isNew && <p>$ {price} </p>}
      <div>
        <p className="text-xs text-gray-500 tracking-wider">{category}</p>
      </div>
      <div className="w-12 h-24 absolute bottom-[10rem] right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
        <span
          className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:text-amazon_red cursor-pointer duration-300"
          onClick={() => {
            user
            ? addToShoppingCartList(user.uid, product)
            : handleAction("cart")
          }}>
          <HiShoppingCart />
        </span>
        <span
          className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:text-amazon_red cursor-pointer duration-300"
          onClick={() => handleAction("favorite")}>
          <FaHeart />
        </span>
      </div>
      <button
        className="w-full bg-amazon_red text-white rounded-lg mt-2 font-medium h-10 hover:bg-amazon_yellow duration-300"
        onClick={() => {
          user
            ? addToShoppingCartList(user.uid, product)
            : handleAction("cart");
        }}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
