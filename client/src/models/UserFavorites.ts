import IFavorite from "./IFavorite";

export default class UserFavorites {
	constructor(
		public user: string,
		public favoriteImages: IFavorite[]
	) {}
}