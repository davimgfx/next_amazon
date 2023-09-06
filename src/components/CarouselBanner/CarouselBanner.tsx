import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
const CarouselBanner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
        <div>
          <Image src={banner1} alt="banner1" />
        </div>
        <div>
          <Image src={banner2} alt="banner2" />
        </div>
        <div>
          <Image src={banner3} alt="banner3" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-500 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default CarouselBanner;
