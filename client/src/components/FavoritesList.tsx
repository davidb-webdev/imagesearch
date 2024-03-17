import { useState } from "react";
import IFavorite from "../models/IFavorite";
import { useAuth0 } from "@auth0/auth0-react";
import UserFavorites from "../models/UserFavorites";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const { user } = useAuth0();

  const getFavorites = async () => {
    const url =
      import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/" + user?.sub;
    const response = await fetch(url);
    const data: IFavorite[] = await response.json();
    setFavorites(data);
  };

  const removeFavorite = async (
    title: string,
    byteSize: number,
    imageUrl: string
  ) => {
    if (!user || !user.sub) return false;
    const url = import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/remove";
    const body = new UserFavorites(user.sub, [
      {
        title,
        byteSize,
        url: imageUrl
      }
    ]);

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>
        {favorites.map((image) => {
          return (
            <>
              <img key={image.url} src={image.url} alt={image.title} />
              <button
                onClick={() => {
                  removeFavorite("abc", 123, image.url);
                }}
              >
                Remove favorite
              </button>
            </>
          );
        })}
      </div>
      <button onClick={getFavorites}>Get favorites</button>
    </>
  );
};

export default FavoritesList;
