import { useEffect, useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useAuth0 } from "@auth0/auth0-react";
import {
  deleteFavorite,
  getFavorites,
  postFavorite
} from "../services/favoritesService";
import Url from "../models/Url";
import IFavoritesContext from "../models/IFavoritesContext";
import Favorite from "../models/Favorite";

interface IFavoritesContextContainerProps {
  children: JSX.Element;
}

const FavoritesContextContainer = ({
  children
}: IFavoritesContextContainerProps) => {
  document.title = "Favorites – ImageSearch";
  const { user } = useAuth0();

  const [favoritesState, setFavoritesState] = useState<IFavoritesContext>({
    favorites: undefined,
    removeFavorite: () => {},
    addFavorite: () => {}
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
      if (!user || !user.sub) return false;
      const data = await deleteFavorite(user.sub, new Url(url));
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

  favoritesState.addFavorite = async (
    title: string,
    byteSize: number,
    url: string
  ) => {
    try {
      if (!user || !user.sub) return false;
      const data = await postFavorite(
        user.sub,
        new Favorite(title, byteSize, url)
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setFavoritesState({
      ...favoritesState,
      favorites: favoritesState.favorites!.concat(
        new Favorite(title, byteSize, url)
      )
    });
  };

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextContainer;
