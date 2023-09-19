import React, { useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "@/types/types";
import { ProductsContext } from "@/context/ProductsContext";
const CartPayment = () => {
  const { productData, user } = useSelector((state: StateProps) => state.next);
  const { userCartProducts } = useContext(ProductsContext);

  const handleCalcTotal = (array): number => {
    const arrayTotal = array.map(
      (product: StoreProduct) => product.price * product.quantity
    );
    return arrayTotal
      .reduce((sum: number, number: number) => sum + number, 0)
      .toFixed(2);
  };

  const handleCalcQuantity = (array): number => {
    return array.reduce(
      (totalQuantity: number, product: StoreProduct) =>
        totalQuantity + product.quantity,
      0
    );
  };

  return (
    <div className="bg-white p-[1rem] h-[9rem] ">
      <div className="flex items-start gap-2 flex-col">
        <div className="flex items-start gap-2">
          <AiFillCheckCircle className="bg-white text-[green] rounded-full text-[1.2rem]" />
          <p className="text-[0.8rem] text-[green]">
            Your order qualifies for FREE international
            <br /> delivery.
          </p>
        </div>
        <h2 className="text-[1.2rem] font-[400]">
          Subtotal ({user ? handleCalcQuantity(userCartProducts) : handleCalcQuantity(productData)}{" "}items{" "}):{" "}
          <span className="text-[1.3rem] font-[600]">
            ${user ? handleCalcTotal(userCartProducts) : handleCalcTotal(productData)}
          </span>
        </h2>

       <button className="py-[0.2rem] px-[0.6rem] bg-amazon_yellow_light rounded-xl font-[400] w-full">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPayment;
