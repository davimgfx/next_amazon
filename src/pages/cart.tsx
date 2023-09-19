import { useSelector } from "react-redux";
import { StateProps } from "@/types/types";
import { EmptyCart, WithItemsCart } from "@/components";
import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";

const CartPage = () => {
  const { productData} = useSelector((state: StateProps) => state.next);
  const { userCartProducts } = useContext(ProductsContext);

  return (
    <section id="cart" className="bg-[#EAEDED] py-[2rem]">
      {userCartProducts.length > 0 ||  productData.length > 0 ? <WithItemsCart /> : <EmptyCart />}
     
    </section>
  );
};

export default CartPage;
