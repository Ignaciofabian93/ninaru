import React from "react";
import Image from "next/image";
import { Logo } from "@/constants/images";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-[100px] items-center">
      <Image src={Logo} alt="logo" width={100} height={100} />
      <small>Joyería & Decoración</small>
    </footer>
  );
};

export default Footer;
