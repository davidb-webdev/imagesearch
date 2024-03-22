import { FavoritesContext } from "../contexts/FavoritesContext";
import { useContext } from "react";
import Mosaic from "./Mosaic";
import MosaicItem from "./MosaicItem";

const FavoritesList = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <>
      <Mosaic>
        {favorites?.map((favorite) => {
          return (
            <MosaicItem
              key={favorite.url}
              itemId={favorite.url}
              itemTitle={favorite.title}
              buttonLabel="x"
              buttonClickHandler={() => {
                removeFavorite(favorite.url);
              }}
            />
          );
        })}
      </Mosaic>
    </>
  );
};

export default FavoritesList;
