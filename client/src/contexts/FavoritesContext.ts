import { createContext } from "react";
import Favorite from "../models/Favorite";

export interface IFavoritesContext {
  favorites: Favorite[] | undefined;
	removeFavorite: (url: string) => void;
}

export const FavoritesContext = createContext<IFavoritesContext>({
	favorites: [],
	removeFavorite: () => {}
});
