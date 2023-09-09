import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { LuMinus, LuPlus } from "react-icons/lu";
import { decreaseQuantity, increaseQuantity, deleteProduct } from "@/store/nextSlice";
import { StateProps, ProductProps, StoreProduct } from "@/types/types";

const WithItemsCart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();
  console.log(productData);

  const handleAction = (actionType: "decrease" | "increase" | "delete", product: ProductProps) => {
    const actionMap = {
      decrease: () => dispatch(decreaseQuantity({ _id: product._id })),
      increase: () => dispatch(increaseQuantity({ _id: product._id })),
      delete: () => dispatch(deleteProduct(product._id)),
    };
  
    const actionFunction = actionMap[actionType];
    if (actionFunction) {
      actionFunction();
    }
  };

  return (
    <div className="bg-white p-[1rem]  w-[80rem] mx-auto">
      <h2 className="text-[1.6rem] font-[600] mb-1">Shopping Cart</h2>
      <div className="w-[78rem] mx-auto h-[0.04rem] bg-[#d5d6d6]" />
      <div className="flex flex-col gap-10">
        {productData.map((product : StoreProduct) => (
          <div key={product._id} className="flex mt-[1rem]">
            <Image
              src={product.image}
              alt="product-image"
              width={180}
              height={180}
            />
            <div className="mt-2">
              <h2 className="text-[1.3rem]">{product.title}</h2>
              <p className="text-[1.3rem] font-[600]">${product.price}</p>
              <p className="text-[1rem]">{product.description}</p>
              <div className="mt-1 font-[600] text-[0.9rem] text-[#486c72] flex gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleAction("decrease", product)}
                  >
                    <LuMinus />
                  </div>
                  <span>{product.quantity}</span>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleAction("increase", product)}
                  >
                    <LuPlus />
                  </div>
                </div>
                <span className="text-[#cccccc8f]">|</span>
                <span className="cursor-pointer" onClick={() => handleAction("delete", product)} >Delete</span>
                <span className="text-[#cccccc8f]">|</span>
                <span className="cursor-pointer">Save for later</span>
                <span className="text-[#cccccc8f]">|</span>
                <span className="cursor-pointer">Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithItemsCart;
