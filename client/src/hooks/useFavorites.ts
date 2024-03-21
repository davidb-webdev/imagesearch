import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getFavorites } from "../services/favoritesService";
import Favorite from "../models/Favorite";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { user } = useAuth0();
  if (!user || !user.sub) return [];

  useEffect(() => {
    if (favorites.length > 0) return;

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
  console.log(favorites);
  return favorites;
};

export default useFavorites;
