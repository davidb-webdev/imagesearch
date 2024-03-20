import { useEffect, useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteFavorite, getFavorites } from "../services/favoritesService";
import Url from "../models/Url";
import IFavoritesContext from "../models/IFavoritesContext";

const FavoritesContextContainer = ({ children }: any) => {
  document.title = "Favorites – ImageSearch";
  const { user } = useAuth0();

  const [favoritesState, setFavoritesState] = useState<IFavoritesContext>({
    favorites: undefined,
    removeFavorite: () => {}
  });

  useEffect(() => {
    if (!user || !user.sub || favoritesState.favorites) return;

    const getData = async () => {
      const data = await getFavorites(user.sub!);
      if (shouldUpdate)
        setFavoritesState({
          ...favoritesState,
          favorites: data
        });
    };
    let shouldUpdate = true;
    getData();
    return () => {
      shouldUpdate = false;
    };
  });

  favoritesState.removeFavorite = async (url: string) => {
    try {
      const urlObject = new Url(url);
      if (!user || !user.sub) return false;
      const data = await deleteFavorite(user.sub, urlObject);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setFavoritesState({
      ...favoritesState,
      favorites: favoritesState.favorites?.filter((favorite) => {
        return favorite.url !== url;
      })
    });
  };

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextContainer;
