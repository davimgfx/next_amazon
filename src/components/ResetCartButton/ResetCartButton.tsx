import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTheCart } from "@/store/nextSlice";
import { resetProductFromShoppingCart } from "@/utils/firebase/firebase"
import { StateProps } from "@/types/types";

const ResetCartButton = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateProps) => state.next);

  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your cart?"
    );
    if (confirmReset) {
      user ?  resetProductFromShoppingCart(user.uid) : dispatch(resetTheCart())
    }
  };

  return (
    <button onClick={handleResetCart} className="py-[0.2rem] px-[0.6rem] bg-amazon_yellow_light rounded-xl font-[400]">
      Reset Cart
    </button>
  );
};

export default ResetCartButton;
