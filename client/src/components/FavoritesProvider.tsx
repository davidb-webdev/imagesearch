import { useContext, useEffect, useState } from "react";
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
import { Outlet } from "react-router-dom";
import { ErrorMessageContext } from "../contexts/ErrorMessageContext";

const FavoritesProvider = () => {
  const { user } = useAuth0();
  const { setErrorMessage } = useContext(ErrorMessageContext);

  const [favoritesState, setFavoritesState] = useState<IFavoritesContext>({
    favorites: undefined,
    removeFavorite: () => {},
    addFavorite: () => {}
  });

  useEffect(() => {
    if (!user || !user.sub || favoritesState.favorites) return;

    const getData = async () => {
      try {
        const data = await getFavorites(user.sub!);
        if (shouldUpdate && data.length > 0)
          setFavoritesState({
            ...favoritesState,
            favorites: data
          });
      } catch (error) {
        console.error(error);
        setErrorMessage(String(error));
      }
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
      console.error(error);
      setErrorMessage(String(error));
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

      setFavoritesState({
        ...favoritesState,
        favorites: favoritesState.favorites
          ? favoritesState.favorites.concat(new Favorite(title, byteSize, url))
          : [new Favorite(title, byteSize, url)]
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(String(error));
    }
  };

  return (
    <FavoritesContext.Provider value={favoritesState}>
      <Outlet />
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
