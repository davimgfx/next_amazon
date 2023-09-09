import { useSelector } from "react-redux";
import { StateProps } from "@/types/types";
import { EmptyCart, WithItemsCart } from "@/components";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <section id="cart" className="bg-[#EAEDED] py-[2rem]">
      {productData.length > 0 ? <WithItemsCart /> : <EmptyCart />}
    </section>
  );
};

export default CartPage;
