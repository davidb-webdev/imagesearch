import { useState } from "react";
import IFavorite from "../models/IFavorite";
import { useAuth0 } from "@auth0/auth0-react";
import Url from "../models/Url";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const { user } = useAuth0();

  const getFavorites = async () => {
    if (!user || !user.sub) return false;
    const url = import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/";
    const payload = {headers: { "user-id": user.sub }};
    const response = await fetch(url, payload);
    const data: IFavorite[] = await response.json();
    setFavorites(data);
  };

  const removeFavorite = async (imageUrl: string) => {
    if (!user || !user.sub) return false;
    const url = import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/remove";
    const body = new Url(imageUrl);
    const payload = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "user-id": user.sub
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(url, payload);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>
        {favorites.map((image) => {
          return (
            <div key={image.url}>
              <img key={image.url} src={image.url} alt={image.title} />
              <button
                onClick={() => {
                  removeFavorite(image.url);
                }}
              >
                Remove favorite
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={getFavorites}>Get favorites</button>
    </>
  );
};

export default FavoritesList;
