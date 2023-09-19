import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  decreaseQuantity,
  increaseQuantity,
  deleteProduct,
} from "@/store/nextSlice";
import { StateProps, ProductProps, StoreProduct } from "@/types/types";
import { CartPayment } from "@/components";
import ResetCartButton from "../ResetCartButton/ResetCartButton";
import { removeProductFromShoppingCart, increaseQuantityFromShoppingCart, decreaseQuantityFromShoppingCart  } from "@/utils/firebase/firebase";
import { ProductsContext } from "@/context/ProductsContext";

const WithItemsCart = () => {
  const { productData, user } = useSelector((state: StateProps) => state.next);
  const { userCartProducts } = useContext(ProductsContext);

  const dispatch = useDispatch();

  const handleAction = (
    actionType: "decrease" | "increase" | "delete",
    product: ProductProps
  ) => {
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

  const handleCalcTotalWithoutUser = (): number => {
    const arrayTotal = userCartProducts.map(
      (product: StoreProduct) => product.price * product.quantity
    );
    console.log(arrayTotal)
    return arrayTotal
      .reduce((sum: number, number: number) => sum + number, 0)
      .toFixed(2);
  };

  const handleCalcTotalWithUser = (): number => {
    const arrayTotal = productData.map(
      (product: StoreProduct) => product.price * product.quantity
    );
    return arrayTotal
      .reduce((sum: number, number: number) => sum + number, 0)
      .toFixed(2);
  };

  return (
    <div className="flex justify-center gap-5">
      <div className="bg-white p-[1rem] w-[80rem]">
        <div className="text-[1.6rem] font-[600] mb-1 flex justify-between">
          <h2>Shopping Cart</h2>
          <h2>SubTotal</h2>
        </div>
        <div className="w-[78rem] mx-auto h-[0.04rem] bg-[#d5d6d6]" />

        <div className="flex flex-col gap-2">
          {user
            ? userCartProducts.map((product: StoreProduct) => (
                <div className="flex mt-[1rem]" key={product._id}>
                  <Image
                    src={product.image}
                    alt="product-image"
                    width={180}
                    height={180}
                    className="w-auto h-auto"
                  />
                  <div className="mt-2 flex gap-10">
                    <div>
                      <h2 className="text-[1.3rem]">{product.title}</h2>
                      <p className="text-[1.3rem] font-[600]">
                        $ {product.price}{" "}
                      </p>
                      <p className="text-[1rem]">{product.description}</p>
                      <div className="mt-1 font-[600] text-[0.9rem] text-[#486c72] flex gap-2">
                        <div className="flex items-center gap-2">
                          <div className="cursor-pointer" onClick={() => decreaseQuantityFromShoppingCart(user.uid,
                              product._id)}>
                            <LuMinus />
                          </div>
                          <span>{product.quantity}</span>
                          <div className="cursor-pointer" onClick={() => increaseQuantityFromShoppingCart(user.uid,
                              product._id)}>
                            <LuPlus />
                          </div>
                        </div>
                        <span className="text-[#cccccc8f]">|</span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            removeProductFromShoppingCart(
                              user.uid,
                              product._id
                            );
                          }}>
                          Delete
                        </span>
                        <span className="text-[#cccccc8f]">|</span>
                        <span className="cursor-pointer">Save for later</span>
                        <span className="text-[#cccccc8f]">|</span>
                        <span className="cursor-pointer">Share</span>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <p className="text-[1.3rem] font-[600] ">
                        $ {(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : productData.map((product: StoreProduct) => (
                <div key={product._id}>
                  <div className="flex mt-[1rem]">
                    <Image
                      src={product.image}
                      alt="product-image"
                      width={180}
                      height={180}
                      className="w-auto h-auto"
                    />
                    <div className="mt-2 flex gap-10">
                      <div>
                        <h2 className="text-[1.3rem]">{product.title}</h2>
                        <p className="text-[1.3rem] font-[600]">
                          $ {product.price}{" "}
                        </p>
                        <p className="text-[1rem]">{product.description}</p>
                        <div className="mt-1 font-[600] text-[0.9rem] text-[#486c72] flex gap-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="cursor-pointer"
                              onClick={() => handleAction("decrease", product)}>
                              <LuMinus />
                            </div>
                            <span>{product.quantity}</span>
                            <div
                              className="cursor-pointer"
                              onClick={() => handleAction("increase", product)}>
                              <LuPlus />
                            </div>
                          </div>
                          <span className="text-[#cccccc8f]">|</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              handleAction("delete", product);
                            }}>
                            Delete
                          </span>
                          <span className="text-[#cccccc8f]">|</span>
                          <span className="cursor-pointer">Save for later</span>
                          <span className="text-[#cccccc8f]">|</span>
                          <span className="cursor-pointer">Share</span>
                        </div>
                      </div>{" "}
                      <div className="w-full flex justify-end">
                        <p className="text-[1.3rem] font-[600] ">
                          $ {(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[78rem] mx-auto h-[0.04rem] bg-[#d5d6d6]" />
                </div>
              ))}
        </div>
        <div className="flex justify-between items-center mt-4 mx-2">
          <ResetCartButton />
          <p className="text-[1.3rem] font-[600]">
            Total: $ { user ? handleCalcTotalWithoutUser() : handleCalcTotalWithoutUser()}
          </p>
        </div>
      </div>
      <CartPayment />
    </div>
  );
};

export default WithItemsCart;
