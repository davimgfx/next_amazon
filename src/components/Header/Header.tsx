import React from "react";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cartIcon.png";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  const customBorderClasses =
    "border border-transparent hover:border-white p-2 h-[3rem] flex flex-col justify-center";
  const customBorderClassesCart =
  "border border-transparent hover:border-white p-2 h-[3rem] flex justify-center"
  return (
    <header className="w-full h-[3.4rem] bg-amazon_blue text-white z-50 flex items-center cursor-pointer text-[0.8rem] font-[700] gap-[1rem] px-5">
      <div className={customBorderClasses}>
        <Image
          src={logo}
          alt="logo_amazon"
          className="w-[9rem]  object-cover"
        />
      </div>

      <div className={`${customBorderClasses} w-[13rem]`}>
        <span className="font-[400]"> Hello</span>
        <h2>Select your address</h2>
      </div>
      <SearchBar />

      <div className={`${customBorderClasses} w-[12rem]`}>
        <span className="font-[400]">Hello, sign in</span>
        <h2>Account & Lists</h2>
      </div>
      <div className={`${customBorderClasses} w-[8rem]`}>
        <span className="font-[400]">Returns</span>
        <h2>& Orders</h2>
      </div>
      <div
        className={`${customBorderClassesCart} flex w-[10rem] relative`}>
        <Image src={cartIcon} alt="logo_amazon" className="w-8" />
        <span className="absolute translate-x-[-1.1rem] translate-y-[-0.4rem] z-50 text-amazon_yellow font-[600] text-[1.2rem]">
          1
        </span>
        <h2 className="translate-y-[0.8rem] translate-x-1.5">Basket</h2>
      </div>
    </header>
  );
};

export default Header;
