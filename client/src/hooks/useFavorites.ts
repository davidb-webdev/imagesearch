import { useEffect, useState } from "react";
import IFavorite from "../models/IFavorite";
import { useAuth0 } from "@auth0/auth0-react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<IFavorite[] | undefined>();
  const { user } = useAuth0();
  if (!user || !user.sub) return;
  const url = import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/";
  const payload = { headers: { "user-id": user.sub } };

  useEffect(() => {
    if (favorites) return;

    const getData = async () => {
      const response = await fetch(url, payload);
      const data: IFavorite[] = await response.json();
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
