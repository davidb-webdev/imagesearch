export default class Favorite {
	constructor(
		public user: string,
		public favoriteImages: [
			{
				title: string,
				byteSize: number,
				url: string
			}
		]
	) {}
}