import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary no-scrollbar">
      <Nav />
      <div className="flex-1 no-scrollbar">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
