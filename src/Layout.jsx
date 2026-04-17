
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import WhatsAppButton from "./pages/whatsappbutton";

const Layout = () => {
  return (
    <>
      <Navbar />
      
      
      <Outlet />   {/* 🔥 Dynamic page yaha render hoga */}
      

      <Footer />
      <WhatsAppButton/>
      
    </>
  );
};

export default Layout;