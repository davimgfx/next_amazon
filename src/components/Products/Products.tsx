import React from "react";
import { ProductProps } from "../../types/types";
import Image from "next/image";
interface Props {
  productData: ProductProps[];
}

const Products = ({ productData }: Props) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6   z-40">
      {productData.map((product) => {
        const {
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
          title,
          _id,
        } = product;

        return (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
            <h2>{title}</h2>
            <div className="w-full">
              <Image alt="productImage" src={image} width={300} height={300} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
