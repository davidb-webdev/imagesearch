import Favorite from "../models/Favorite";
import Url from "../models/Url";
import { fetchData } from "./serviceBase";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getFavorites = async (user: string) => {
  const url = baseUrl + "/favorites/";
  const headers = { "user-id": user };

  try {
    const data = await fetchData<Favorite[]>("GET", url, headers);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postFavorite = async (user: string, favorite: Favorite) => {
  const url = baseUrl + "/favorites/add";
  const headers = { "Content-Type": "application/json", "user-id": user };
  const body = JSON.stringify(favorite);

  try {
    const data = await fetchData<string>("POST", url, headers, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavorite = async (user: string, imageUrl: Url) => {
  const url = baseUrl + "/favorites/remove";
  const headers = { "Content-Type": "application/json", "user-id": user };
  const body = JSON.stringify(imageUrl);

  try {
    const data = await fetchData<string>("DELETE", url, headers, body);
    return data;
  } catch (error) {
    throw error;
  }
};
