import { Outlet } from "react-router-dom";
import Profile from "../components/Profile";
import LoginCheck from "../components/LoginCheck";
import "../styles/Layout.css";
import LogoutButton from "../components/LogoutButton";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />

        <div className="userLinks">
          <LoginCheck promptLogin>
            <Profile />
            <LogoutButton />
          </LoginCheck>
        </div>
      </header>

      <main>
        <LoginCheck promptLogin>
          <Outlet />
        </LoginCheck>
      </main>
    </>
  );
};

export default Layout;
