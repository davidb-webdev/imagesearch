import Favorite from "../models/Favorite";
import Url from "../models/Url";
import { fetchData } from "./serviceBase";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getFavorites = async (user: string) => {
  const url = baseUrl + "/favorites/";
  const headers = { "user-id": user };

  const data = await fetchData<Favorite[]>("GET", url, headers);
  return data;
};

export const postFavorite = async (user: string, favorite: Favorite) => {
  const url = baseUrl + "/favorites/add";
  const headers = { "user-id": user };
  const body = JSON.stringify(favorite);

  const data = await fetchData<string>("POST", url, headers, body);
  return data;
};

export const deleteFavorite = async (user: string, imageUrl: Url) => {
  const url = baseUrl + "/favorites/remove";
  const headers = { "user-id": user };
  const body = JSON.stringify(imageUrl);

  const data = await fetchData<string>("DELETE", url, headers, body);
  return data;
};
