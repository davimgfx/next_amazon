import magnifyingGlassIcon from "../../assets/magnifying-glassIcon.png";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="group w-[100%] flex items-center  rounded-e-[0.8rem]">
      <input
        type="text"
        className="w-[100%] h-[2.3rem] indent-3 font-[400] text-[#6F7373] text-[1.1rem] outline-none border-y-2 border-l-2 border-transparent focus-visible:border-amazon_yellow"
        placeholder="Search Amazon.com"
      />
      <div className="p-[0.56rem] bg-[#FEBD69] rounded-e-md">
        <Image
          src={magnifyingGlassIcon}
          alt="magnifying-glass-icon"
          className="w-5 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
