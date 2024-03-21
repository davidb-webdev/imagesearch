import { Outlet } from "react-router-dom";
import Profile from "../components/Profile";
import "../styles/Layout.css";
import LogoutButton from "../components/LogoutButton";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />

        <div className="userLinks">
          <Profile />
          <LogoutButton />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
