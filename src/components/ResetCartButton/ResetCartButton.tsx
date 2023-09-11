import React from "react";
import { useDispatch } from "react-redux";
import { resetTheCart } from "@/store/nextSlice";

const ResetCartButton = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your cart?"
    );
    if (confirmReset) {
      dispatch(resetTheCart());
    }
  };

  return (
    <button onClick={handleResetCart} className="py-[0.2rem] px-[0.6rem] bg-amazon_yellow_light rounded-xl font-[400]">
      Reset Cart
    </button>
  );
};

export default ResetCartButton;
