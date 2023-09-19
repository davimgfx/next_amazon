import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, deleteProduct } from "@/store/nextSlice";
import { StateProps, StoreProduct } from "@/types/types";
import { removeProductFromShoppingCart, increaseQuantityFromShoppingCart, decreaseQuantityFromShoppingCart } from "@/utils/firebase/firebase";

interface ProductItemProps {
  product: StoreProduct;
  user?: boolean;
}

const ProductItemCart: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateProps) => state.next);
  
  const handleAction = (actionType: "decrease" | "increase" | "delete") => {
    if (user) {
     
      switch (actionType) {
        case "decrease":
          decreaseQuantityFromShoppingCart(user.uid, product._id);
          break;
        case "increase":
          increaseQuantityFromShoppingCart(user.uid, product._id);
          break;
        case "delete":
          removeProductFromShoppingCart(user.uid, product._id);
          break;
        default:
          break;
      }
    } else {
      
      const actionMap = {
        decrease: () => dispatch(decreaseQuantity({ _id: product._id })),
        increase: () => dispatch(increaseQuantity({ _id: product._id })),
        delete: () => dispatch(deleteProduct(product._id)),
      };

      const actionFunction = actionMap[actionType];
      if (actionFunction) {
        actionFunction();
      }
    }
  };

  return (
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
          <p className="text-[1.3rem] font-[600]">$ {product.price} </p>
          <p className="text-[1rem]">{product.description}</p>
          <div className="mt-1 font-[600] text-[0.9rem] text-[#486c72] flex gap-2">
            <div className="flex items-center gap-2">
              <div className="cursor-pointer" onClick={() => handleAction("decrease")}>
                <LuMinus />
              </div>
              <span>{product.quantity}</span>
              <div className="cursor-pointer" onClick={() => handleAction("increase")}>
                <LuPlus />
              </div>
            </div>
            <span className="text-[#cccccc8f]">|</span>
            <span className="cursor-pointer" onClick={() => handleAction("delete")}>Delete</span>
            <span className="text-[#cccccc8f]">|</span>
            <span className="cursor-pointer">Save for later</span>
            <span className="text-[#cccccc8f]">|</span>
            <span className="cursor-pointer">Share</span>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <p className="text-[1.3rem] font-[600] ">$ {(product.price * product.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCart;
