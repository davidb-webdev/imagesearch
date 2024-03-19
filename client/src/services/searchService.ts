import ISearchResponse from "../models/ISearchResponse";

export const getSearchResponse = async (query: string) => {
  const url =
    import.meta.env.VITE_GCS_BASE_URL +
    "&key=" +
    import.meta.env.VITE_GCS_KEY +
    "&cx=" +
    import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
    "&q=" +
    query;
  const response = await fetch(url);
  const data: ISearchResponse = await response.json();
  return data;
};
