import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Navigation = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <nav>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">
        Favorites
        {favorites && favorites.length > 0 && <> ({favorites.length})</>}
      </NavLink>
    </nav>
  );
};

export default Navigation;
