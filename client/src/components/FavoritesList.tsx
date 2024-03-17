import { useState } from "react";
import IFavorite from "../models/IFavorite";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  const getFavorites = async () => {
    const user = "numberOne";
    const url = import.meta.env.VITE_FAVORITES_BASE_URL + user;
    const response = await fetch(url);
    const data: IFavorite[] = await response.json();
    setFavorites(data);
  };

  return (
    <>
      <div>
        {favorites.map((image) => {
          return <img key={image.url} src={image.url} alt={image.title} />;
        })}
      </div>
      <button onClick={getFavorites}>Get favorites</button>
    </>
  );
};

export default FavoritesList;
