import { RegisterLayout } from "@/components";
import React from "react";
import logo from "@/assets/logov2.png";
import Image from "next/image";
import Link from "next/link";
const register = () => {
  return (
    <section className="flex justify-center flex-col items-center my-5">
      <Link href={"../"}>
        <Image src={logo} alt="logo-amazon" className="w-[9rem]" />
      </Link>
      <div className="w-[25rem] border-2 border-[#DDDDDD] p-6 mt-2 rounded-xl">
        <h2 className="text-[1.5rem]">Create account</h2>
        <RegisterLayout />
        <p className="text-[0.7rem] mt-2">
          By creating an account, you agree that you have read and accepted our
          Conditions of Use and Privacy Notice.
        </p>
        <p className="mt-8">
          Already have an account?{" "}
          <Link href="../login" className="text-[#486c72] font-[600]">
            Sign in
          </Link>
        </p>
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

export default register;
