import { NavLink, Outlet } from "react-router-dom";
import Profile from "../components/Profile";
import LoginCheck from "../components/LoginCheck";
import "../styles/Layout.css";
import LogoutButton from "../components/LogoutButton";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <LoginCheck>
            <NavLink to="/favorites">Favorites</NavLink>
          </LoginCheck>
        </nav>

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
