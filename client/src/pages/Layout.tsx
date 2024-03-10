import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import LoginOrOut from "../components/LoginOrOut";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        <Profile />
        <LoginOrOut />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
