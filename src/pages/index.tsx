import { CarouselBanner, Products } from "@/components";
import { ProductProps } from "../types/types"

interface Props {
  productData: ProductProps[]
}

export default function Home({productData} : Props) {
  return (
    <section id="home" className="max-w-screen-2xl mx-auto">
      <CarouselBanner />
      <Products productData={productData} />
    </section>
  );
}

export const getServerSideProps = async () =>{
  const response = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await response.json();
  return { props: {productData} };

}