import { useState } from "react";
import IFavorite from "../models/IFavorite";
import { useAuth0 } from "@auth0/auth0-react";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const {user} = useAuth0();

  const getFavorites = async () => {
    const url = import.meta.env.VITE_FAVORITES_BASE_URL + user?.sub;
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
