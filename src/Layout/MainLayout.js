import Footer from "@/Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import React from "react";
import { Montserrat } from "@next/font/google";
import CustomCursor from "@/Components/Shared/CustomCursor/CustomCursor";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


const MainLayout = ({ children }) => {
  return (
    <div className={montserrat.className}>
      <div className="max-w-[1520px] min-h-screen mx-auto transition-all duration-300 ease-in-out transform">
        <Header />
        {/* <CustomCursor/> */}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
