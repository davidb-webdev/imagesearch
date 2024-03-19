import { useAuth0 } from "@auth0/auth0-react";
import useFavorites from "../hooks/useFavorites";
import { deleteFavorite } from "../services/favoritesService";
import "../styles/FavoritesList.css";

const FavoritesList = () => {
  const favorites = useFavorites();
  const { user } = useAuth0();

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
                    if (!user || !user.sub) return false;
                    const data = await deleteFavorite(user.sub, image.url);
                    console.log(data);
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
