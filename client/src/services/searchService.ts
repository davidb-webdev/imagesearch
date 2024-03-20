import ISearchResponse from "../models/ISearchResponse";
import { fetchData } from "./serviceBase";

export const getSearchResponse = async (query: string) => {
  const url =
    import.meta.env.VITE_GCS_BASE_URL +
    "&key=" +
    import.meta.env.VITE_GCS_KEY +
    "&cx=" +
    import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
    "&q=" +
    query;
  const data = await fetchData<ISearchResponse>("GET", url);
  return data;
};
