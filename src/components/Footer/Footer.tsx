import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-white text-[0.8rem]">
      <div className="h-[3rem] w-full bg-amazon_blue_more_light flex justify-center items-center ">
        <span className="text-[0.8rem] font-[500]">Back to top</span>
      </div>
      <div className="bg-amazon_blue_light flex  justify-center gap-[5rem] py-[2rem] text-[0.9rem]">
        <div>
          <h2 className="pb-[0.6rem] font-[700] cursor-pointer">
            Get to Know Us
          </h2>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Corporate Information</p>
          <p className="cursor-pointer">Press Releases</p>
          <p className="cursor-pointer">Amazon Science</p>
        </div>
        <div>
          <h2 className="pb-[0.6rem] font-[700]">Make Money with Us</h2>
          <p className="cursor-pointer">Protect and build your brand</p>
          <p className="cursor-pointer">Independently Publish with Us</p>
          <p className="cursor-pointer">Sell on Amazon</p>
          <p className="cursor-pointer">Fulfilment by Amazon</p>
          <p className="cursor-pointer">Drive with Amazon Flex</p>
          <p className="cursor-pointer">Advertise Your Products</p>
          <p className="cursor-pointer">Associates Program</p>
          <p className="cursor-pointer">Host an Amazon Hub</p>
        </div>
        <div>
          <h2 className="pb-[0.6rem] font-[700]">Let Us Help You</h2>
          <p className="cursor-pointer">COVID-19 and Amazon</p>
          <p className="cursor-pointer">Your Account</p>
          <p className="cursor-pointer">Your Orders</p>
          <p className="cursor-pointer">Delivery Rates & Policies</p>
          <p className="cursor-pointer">Returns & Replacements</p>
          <p className="cursor-pointer">Manage Your Content and Devices</p>
          <p className="cursor-pointer">Help</p>
        </div>
      </div>
      <div className="w-full h-[0.04rem] bg-amazon_blue_more_light" />
      <Link
        className="bg-amazon_blue_light flex justify-center items-center pt-[2rem]"
        href={"../"}>
        <Image src={logo} className="w-[6.3rem]" alt="logo_amazon" />
      </Link>
      <div className="w-full bg-amazon_blue_light py-[1rem]">
        <ul className="flex gap-[1rem] justify-center items-center w-[70rem] flex-wrap mx-auto">
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
