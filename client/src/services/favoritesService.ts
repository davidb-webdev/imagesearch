import Favorite from "../models/Favorite";
import Url from "../models/Url";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getFavorites = async (user: string) => {
  const url = baseUrl + "/favorites/";
  const payload = { headers: { "user-id": user } };
  const response = await fetch(url, payload);
  const data: Favorite[] = await response.json();
  return data;
};

export const postFavorite = async (user: string, favorite: Favorite) => {
  const url = baseUrl + "/favorites/add";
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-id": user
    },
    body: JSON.stringify(favorite)
  };
  const response = await fetch(url, payload);
  const data: string = await response.json();
  return data;
};

export const deleteFavorite = async (user: string, imageUrl: string) => {
  const url = baseUrl + "/favorites/remove";
  const body = new Url(imageUrl);
  const payload = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "user-id": user
    },
    body: JSON.stringify(body)
  };
  const response = await fetch(url, payload);
  const data: string = await response.json();
  return data;
};
