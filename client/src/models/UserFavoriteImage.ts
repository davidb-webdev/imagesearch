import { FavoriteImage } from "./FavoriteImage";

export interface UserFavoriteImage {
	user: string;
	favoriteImages: FavoriteImage[];
}