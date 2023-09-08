import { useSelector } from "react-redux";
import { StateProps } from "@/types/types";
import { EmptyCart } from "@/components";
import Image from "next/image";
const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <section id="cart" className="bg-[#EAEDED] pt-[2rem]">
      {productData.length > 0 ? (
        <div className="bg-white p-[1rem]  w-[80rem] mx-auto ">
          <h2 className="text-[1.6rem] font-[600]">Shopping Cart</h2>
          <div className="w-[78rem] mx-auto h-[0.04rem] bg-[#d5d6d6]" />
          <div className="flex flex-col gap-10">
            {productData.map((product) => (
              <>
                <div key={product._id} className="flex mt-[1rem]">
                  <Image
                    src={product.image}
                    alt="product-image"
                    width={180}
                    height={180}
                  />
                  <div>
                    <h2 className="text-[1.3rem]">{product.title}</h2>
                    <p className="text-[1.3rem] font-[600]">${product.price}</p>
                    <p className="text-[1rem]">{product.description}</p>
                    <div>
                      APDLPadl |
                      Delete |
                      Save for later |
                      Share
                    </div>
                  </div>
                </div>
                <div className="w-[78rem] mx-auto h-[0.04rem] bg-[#d5d6d6]" />
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <EmptyCart />
        </div>
      )}
    </section>
  );
};

export default CartPage;
