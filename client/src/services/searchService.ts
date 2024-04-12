import ISearchResponse from "../models/ISearchResponse";
import { fetchData } from "./serviceBase";

export const getSearchResponse = async (query: string) => {
  const url =
    "https://customsearch.googleapis.com/customsearch/v1?searchType=image" +
    "&key=" +
    import.meta.env.VITE_GCS_KEY +
    "&cx=" +
    import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
    "&q=" +
    query;
  try {
    const data = await fetchData<ISearchResponse>("GET", url);
    return data;
  } catch (error) {
    throw error;
  }
};
