import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import PromptLogin from "../components/PromptLogin";
import "../styles/Layout.css";
import LogoutButton from "../components/LogoutButton";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        <PromptLogin>
          <Profile />
          <LogoutButton />
        </PromptLogin>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
