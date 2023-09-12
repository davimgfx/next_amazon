import logo from "@/assets/logo.png";
import cartIcon from "@/assets/cartIcon.png";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "@/types/types";
import { useEffect } from "react";
import { auth } from "@/utils/firebase/firebase";
import { loginUser, setLoading } from "@/store/nextSlice";

const Header = () => {
  const { productData, favoriteData, user, isLoading } = useSelector(
    (state: StateProps) => state.next
  );
  const dispatch = useDispatch();

  useEffect(
    () =>
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(
            loginUser({
              uid: authUser.uid,
              username: authUser.displayName,
              email: authUser.email,
            })
          );
          dispatch(setLoading(false));
        } else {
          console.log("User not logged");
        }
      }),
    []
  );

  console.log(user);
  const customBorderClasses =
    "border border-transparent hover:border-white p-2 h-[3rem] flex flex-col justify-center";
  const customBorderClassesCart =
    "border border-transparent hover:border-white p-2 h-[3rem] flex justify-center";

  return (
    <header className="w-full h-[3.8rem] bg-amazon_blue text-white z-50 flex items-center cursor-pointer text-[0.8rem] font-[700] gap-[1rem] px-5">
      <Link className={customBorderClasses} href={"../"}>
        <Image
          src={logo}
          alt="logo_amazon"
          className="w-[9rem]  object-cover"
        />
      </Link>

      <div className={`${customBorderClasses} w-[13rem]`}>
        <span className="font-[400]"> Hello</span>
        <h2>Select your address</h2>
      </div>
      <SearchBar />
      
      {isLoading ? (
        <Link className={`${customBorderClasses} w-[12rem]`} href={"../login"}>
          <span className="font-[400]">Hello, sign in</span>
          <h2>Account & Lists</h2>
        </Link>
      ) : (
        <Link className={`${customBorderClasses} w-[12rem]`} href={"../cart"}>
          <span className="font-[400]">Hello, {user?.username}</span>
          <h2>Account & Lists</h2>
        </Link>
      )}

      <div className={`${customBorderClasses} w-[8rem] relative`}>
        <span className="font-[400]">Returns</span>
        <h2>& Favorites</h2>
        {favoriteData.length > 0 && (
          <span className="text-amazon_yellow absolute bottom-2 left-[5rem]">
            {favoriteData.length}
          </span>
        )}
      </div>

      <Link
        className={`${customBorderClassesCart} flex w-[10rem] relative`}
        href={"/cart"}>
        <Image src={cartIcon} alt="logo_amazon" className="w-8" />
        <span className="absolute translate-x-[-1.01rem] translate-y-[-0.6rem] z-50 text-amazon_yellow font-[600] text-[1.2rem]">
          {productData ? productData.length : 0}
        </span>
        <h2 className="translate-y-[0.8rem] translate-x-1.5">Basket</h2>
      </Link>
    </header>
  );
};

export default Header;
