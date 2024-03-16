import { useState } from "react";
import { FavoriteImage } from "../models/FavoriteImage";

const FavoriteImagesList = () => {
  const [favoriteImages, setFavoriteImages] = useState<FavoriteImage[]>([]);

  const getFavoriteImages = async () => {
    const user = "numberOne";
    const url = import.meta.env.VITE_FAVORITES_BASE_URL + user;
    const response = await fetch(url);
    const data: FavoriteImage[] = await response.json();
    setFavoriteImages(data);
  };

  return (
    <>
      <div>
        {favoriteImages.map((image) => {
          return <img src={image.url} alt={image.title} />;
        })}
      </div>
      <button onClick={getFavoriteImages}>Get favorites</button>
    </>
  );
};

export default FavoriteImagesList;
