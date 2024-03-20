import { useAuth0 } from "@auth0/auth0-react";
import useFavorites from "../hooks/useFavorites";
import { deleteFavorite } from "../services/favoritesService";
import "../styles/FavoritesList.css";
import Url from "../models/Url";

const FavoritesList = () => {
  const favorites = useFavorites();
  const { user } = useAuth0();

  const removeFavorite = async (url: Url) => {
    if (!user || !user.sub) return false;
    try {
      const data = await deleteFavorite(user.sub, url);
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
    // Pseudo: setFavorites(...favorites, splice out removed item));
  };

  return (
    <>
      {favorites && (
        <section className="favoritesList">
          {favorites.map((image) => {
            return (
              <div key={image.url}>
                <img key={image.url} src={image.url} alt={image.title} />
                <button
                  onClick={async () => {
                    removeFavorite(new Url(image.url));
                  }}
                >
                  Remove favorite
                </button>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default FavoritesList;
