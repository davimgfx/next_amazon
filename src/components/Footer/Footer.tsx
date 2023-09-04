import Image from "next/image";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="text-white text-[0.8rem]">
      <div className="h-[3rem] w-full bg-amazon_blue_more_light flex justify-center items-center ">
        <span className="text-[0.8rem] font-[500]">Back to top</span>
      </div>
      <div className="bg-amazon_blue_light">
        <div>
          <h2>Get to Know Us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Corporate Information</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full h-[0.04rem] bg-amazon_blue_more_light" />
      <div className="bg-amazon_blue_light flex justify-center items-center pt-[2rem]">
        <Image src={logo} className="w-[6.3rem]" />
      </div>
      <div className="w-full bg-amazon_blue_light py-[1rem]">
        <ul className="flex gap-[1rem] justify-center items-center w-[70rem] flex-wrap mx-auto">
          <li>Brazil</li>|
          <li>Canada</li>|
          <li>France</li>|
          <li>Germany</li>|
          <li>India</li>|
          <li>Italy</li>|
          <li>Japan</li>|
          <li>Mexico</li>|
          <li>Netherlands</li>|
          <li>Poland</li>|
          <li>Singapore</li>|
          <li>Spain</li>|
          <li>Turkey</li>|
          <li>United Arab Emirates</li>|
          <li>United Kingdom</li>|
          <li>United States</li>
        </ul>
      </div>

      <div className="bg-amazon_blue flex justify-center items-center flex-col pt-[0.7rem] pb-[3rem]">
        <div className="flex gap-[1.5rem]">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads Notice</p>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
