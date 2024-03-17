import IFavorite from "./IFavorite";

export default class Favorite {
	constructor(
		public user: string,
		public favoriteImages: IFavorite[]
	) {}
}