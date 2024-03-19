import { useEffect, useState } from "react";
import IFavorite from "../models/IFavorite";
import { useAuth0 } from "@auth0/auth0-react";
import { getFavorites } from "../services/favoritesService";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>();
  const { user } = useAuth0();
  if (!user || !user.sub) return;

  useEffect(() => {
    if (favorites) return;

    const getData = async () => {
      const data = await getFavorites(user.sub!);
      if (shouldUpdate) setFavorites(data);
    };

    let shouldUpdate = true;
    getData();

    return () => {
      shouldUpdate = false;
    };
  });
  return favorites;
};

export default useFavorites;
