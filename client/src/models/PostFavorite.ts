class PostFavorite {
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

export default PostFavorite;