import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-white text-[0.8rem]">
      <div className="h-[3rem] w-full bg-amazon_blue_more_light flex justify-center items-center ">
        <span className="text-[0.8rem] font-[500]">Back to top</span>
      </div>
      <div className="bg-amazon_blue_light flex justify-center gap-[5rem] pt-[2.5rem] text-[0.9rem]">
        <div>
          <h2 className="pb-[0.6rem] font-[700] cursor-pointer  text-[1rem]">
            Get to Know Us
          </h2>
          <p className="cursor-pointer mb-1">About Us</p>
          <p className="cursor-pointer my-1 ">Careers</p>
          <p className="cursor-pointer my-1">Corporate Information</p>
          <p className="cursor-pointer my-1">Press Releases</p>
          <p className="cursor-pointer my-1">Amazon Science</p>
        </div>
        <div>
          <h2 className="pb-[0.6rem] font-[700] text-[1rem]">
            Make Money with Us
          </h2>
          <p className="cursor-pointer mb-1">Protect and build your brand</p>
          <p className="cursor-pointer my-1">Independently Publish with Us</p>
          <p className="cursor-pointer my-1">Sell on Amazon</p>
          <p className="cursor-pointer my-1">Fulfilment by Amazon</p>
          <p className="cursor-pointer my-1">Drive with Amazon Flex</p>
          <p className="cursor-pointer my-1">Advertise Your Products</p>
          <p className="cursor-pointer my-1">Associates Program</p>
          <p className="cursor-pointer my-1">Host an Amazon Hub</p>
        </div>
        <div>
          <h2 className="pb-[0.6rem] font-[700] text-[1rem]">
            Let Us Help You
          </h2>
          <p className="cursor-pointer mb-1">COVID-19 and Amazon</p>
          <p className="cursor-pointer my-1">Your Account</p>
          <p className="cursor-pointer my-1">Your Orders</p>
          <p className="cursor-pointer my-1">Delivery Rates & Policies</p>
          <p className="cursor-pointer my-1">Returns & Replacements</p>
          <p className="cursor-pointer my-1">Manage Your Content and Devices</p>
          <p className="cursor-pointer my-1">Help</p>
        </div>
      </div>
      <div className="w-full h-[0.04rem] bg-amazon_blue_more_light" />
      <Link
        className="bg-amazon_blue_light flex justify-center items-center pt-[2rem]"
        href={"../"}>
        <Image src={logo} className="w-[6.3rem]" alt="logo_amazon" />
      </Link>
      <div className="w-full bg-amazon_blue_light pt-[1rem]">
        <ul className="flex gap-[0.6rem] justify-center items-center w-[58rem] flex-wrap mx-auto">
          <li className="cursor-pointer">Brazil</li>|
          <li className="cursor-pointer">Canada</li>|
          <li className="cursor-pointer">France</li>|
          <li className="cursor-pointer">Germany</li>|
          <li className="cursor-pointer">India</li>|
          <li className="cursor-pointer">Italy</li>|
          <li className="cursor-pointer">Japan</li>|
          <li className="cursor-pointer">Mexico</li>|
          <li className="cursor-pointer">Netherlands</li>|
          <li className="cursor-pointer">Poland</li>|
          <li className="cursor-pointer">Singapore</li>|
          <li className="cursor-pointer">Spain</li>|
          <li className="cursor-pointer">Turkey</li>|
          <li className="cursor-pointer">United Arab Emirates</li>|
          <li className="cursor-pointer">United Kingdom</li>|
          <li className="cursor-pointer">United States</li>
        </ul>
      </div>
      <div className="w-full bg-amazon_blue_light items-center flex justify-center flex-col">
        <h2>And don't forget:</h2>
        <div>
          <ul className="flex gap-[0.6rem] justify-center items-center w-[70rem] flex-wrap mx-auto pb-3">
            <li className="cursor-pointer">Amazon Advertising</li>|
            <li className="cursor-pointer">Amazon Web Services</li>|
            <li className="cursor-pointer">goodreads</li>|
            <li className="cursor-pointer">Shopbop</li>
          </ul>
        </div>
      </div>
      <div className="bg-amazon_blue flex justify-center items-center flex-col pt-[0.7rem] pb-[3rem]">
        <div className="flex gap-[1.5rem]">
          <p className="cursor-pointer">Conditions of Use & Sale</p>
          <p className="cursor-pointer">Privacy Notice</p>
          <p className="cursor-pointer">Interest-Based Ads Notice</p>
        </div>
        <p className="cursor-pointer">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
        <p className="cursor-pointer">
          This website is a simulated representation and not an actual Amazon
          site. All rights are reserved by Amazon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
