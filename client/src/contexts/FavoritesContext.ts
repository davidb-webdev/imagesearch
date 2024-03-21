import { createContext } from "react";
import IFavoritesContext from "../models/IFavoritesContext";

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  removeFavorite: () => {}
});
