import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
