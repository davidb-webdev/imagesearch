import Favorite from "./Favorite";

export default interface IFavoritesContext {
  favorites: Favorite[] | undefined;
	removeFavorite: (url: string) => void;
}