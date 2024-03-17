import IFavorite from "./IFavorite";

export default class Favorite implements IFavorite {
  constructor(
    public title: string,
    public byteSize: number,
    public url: string
  ) {}
}
