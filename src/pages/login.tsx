import { LoginLayout } from "@/components";
import logo from "@/assets/logov2.png";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <section className="flex justify-center flex-col items-center my-5">
      <Link href={"../"}>
        <Image src={logo} alt="logo-amazon" className="w-[9rem]" />
      </Link>
      <div className="w-[25rem] border-2 border-[#DDDDDD] p-6 mt-2 rounded-xl">
        <h2 className="text-[1.5rem]">Sign in</h2>
        <LoginLayout />
        <p className="text-[0.7rem] mt-2">
          By creating an account, you agree that you have read and accepted our
          Conditions of Use and Privacy Notice.
        </p>
        <div className="text-[0.9rem] border-2 border-[#DDDDDD] p-2 mt-2 rounded-lg">
          <h2 className="text-[1.1rem] font-[500]">Test Account:</h2>
          <p>Email: test@test.com</p>
          <p>Password: test123</p>
        </div>
      </div>
      <div className=" text-[0.9rem] flex items-center gap-2 justify-center flex-col mt-4 mb-1">
        <div className="flex items-center flex-col">
          <div className="w-[25rem] mx-auto h-[0.04rem] bg-[#d5d6d6] relative bottom-[-0.8rem] z-1" />
          <p className=" bg-[#ffffff]  h-[2rem] px-2 z-2  relative text-[#979797]">
            New to Amazon ?
          </p>
        </div>
        <Link href="../register">
          <button className="py-[0.2rem] px-[0.6rem] w-[25rem]  border-2 border-[#DDDDDD] rounded-xl font-[400]">
            Create your amazon account
          </button>
        </Link>
      </div>
      <div className=" text-[0.9rem]">
        <div className="flex items-center gap-8 justify-center mt-10 mb-2">
          <p className="text-[#486c72]">Conditions of Use</p>
          <p className="text-[#486c72]">Privacy Notice</p>
          <p className="text-[#486c72]">Help</p>
        </div>
        <p className="text-center">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </section>
  );
};

export default Login;
