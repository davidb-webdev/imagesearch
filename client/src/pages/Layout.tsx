import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
