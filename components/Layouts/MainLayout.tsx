import React from "react";
import CustomNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#CBBBA0] text-white w-full h-screen">
      <CustomNavbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
