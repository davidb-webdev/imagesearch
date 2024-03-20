import "../styles/FavoritesList.css";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useContext } from "react";

const FavoritesList = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <>
      <section className="favoritesList">
        {favorites?.map((favorite) => {
          return (
            <div key={favorite.url}>
              <img src={favorite.url} alt={favorite.title} />
              <button
                onClick={() => {
                  removeFavorite(favorite.url);
                }}
              >
                ❌
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FavoritesList;
