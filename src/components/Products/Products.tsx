import React from "react";
import { ProductProps } from "@/types/types";
import Product from "../Product/Product";
interface Props {
  productData: ProductProps[];
}

const Products = ({ productData }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-20 z-50 mt-[-20rem]">
      {productData.map((product: ProductProps) => {
        return <Product product={product} key={product._id}/>;
      })}
    </div>
  );
};

export default Products;
