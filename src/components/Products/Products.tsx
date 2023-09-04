import React from "react";
import { ProductProps } from "../../types/types";
import Product from "../Product/Product";
interface Props {
  productData: ProductProps[];
}

const Products = ({ productData }: Props) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  z-50">
      {productData.map((product: ProductProps) => {
        return <Product product={product} key={product._id}/>;
      })}
    </div>
  );
};

export default Products;
