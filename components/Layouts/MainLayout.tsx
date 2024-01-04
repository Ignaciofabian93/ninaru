import React from "react";
import CustomNavbar from "../Navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#CAC37A] w-full h-screen">
      <CustomNavbar />
      {children}
    </main>
  );
};

export default MainLayout;
