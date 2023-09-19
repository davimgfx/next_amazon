import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "@/types/types";
import { CartPayment } from "@/components";
import ResetCartButton from "../ResetCartButton/ResetCartButton";
import { ProductsContext } from "@/context/ProductsContext";
import ProductItemCart from "../ProductItemCart/ProductItemCart";


const WithItemsCart = () => {
  const { productData, user } = useSelector((state: StateProps) => state.next);
  const { userCartProducts } = useContext(ProductsContext);


  const handleCalcTotal = (array: StoreProduct[]): string => {
    const arrayTotal = array.map(
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
                <ProductItemCart product={product} key={product._id} />
              ))
            : productData.map((product: StoreProduct) => (
                <ProductItemCart product={product} key={product._id} />
              ))}
        </div>
        <div className="flex justify-between items-center mt-4 mx-2">
          <ResetCartButton />
          <p className="text-[1.3rem] font-[600]">
            Total: ${" "}
            {user
              ? handleCalcTotal(userCartProducts)
              : handleCalcTotal(productData)}
          </p>
        </div>
      </div>
      <CartPayment />
    </div>
  );
};

export default WithItemsCart;
