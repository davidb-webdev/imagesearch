import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: var(--spacing-default);
  height: 100%;

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: color var(--timing-quick);

    &:hover,
    &.active {
      color: var(--color-accent);
    }
  }
`;

const Navigation = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <NavigationContainer>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">
        Favorites
        {favorites && favorites.length > 0 && <> ({favorites.length})</>}
      </NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </NavigationContainer>
  );
};

export default Navigation;
