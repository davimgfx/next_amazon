import React from "react";
import logo from "@/assets/logov2.png";
import Image from "next/image";

const login = () => {
  return (
    <section className="flex flex-col items-center">
      <Image src={logo} alt="amazon_logo" />
      <div>
        <h2>Sign In</h2>
        <button>Entrar com GitHub</button>
      </div>
    </section>
  );
};

export default login;
