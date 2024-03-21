import { NavLink } from "react-router-dom";
import LoginCheck from "./LoginCheck";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Navigation = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <LoginCheck>
        <NavLink to="/favorites">
          Favorites
          {favorites && <> ({favorites.length})</>}
        </NavLink>
      </LoginCheck>
    </nav>
  );
};

export default Navigation;
