import { MouseEvent, useState } from "react";
import ISearchResponse from "../models/ISearchResponse";
import Favorite from "../models/Favorite";
import "../styles/ImageSearch.css";
import { useAuth0 } from "@auth0/auth0-react";

const ImageSearch = () => {
  const { user } = useAuth0();
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>();
  const [query, setQuery] = useState("");

  const search = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    optionalQueryParam?: string
  ) => {
    e.preventDefault();
    const url =
      import.meta.env.VITE_GCS_BASE_URL +
      "&key=" +
      import.meta.env.VITE_GCS_KEY +
      "&cx=" +
      import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
      "&q=" +
      (optionalQueryParam ? optionalQueryParam : query);
    const response = await fetch(url);
    const data: ISearchResponse = await response.json();
    console.log(data);
    setSearchResponse(data);
  };

  const addFavorite = async (
    title: string,
    byteSize: number,
    imageUrl: string
  ) => {
    if (!user || !user.sub) return false;
    const url = import.meta.env.VITE_BACKEND_BASE_URL + "/favorites/add";
    const body = new Favorite(user.sub, [
      {
        title,
        byteSize,
        url: imageUrl,
      },
    ]);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <form>
        <input
          type="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button onClick={search}>Search</button>
      </form>

      {searchResponse?.searchInformation && (
        <p>
          Found {searchResponse.searchInformation.formattedTotalResults} results
          in {searchResponse.searchInformation.formattedSearchTime} seconds
        </p>
      )}

      {searchResponse?.spelling && (
        <p>
          Did you mean{" "}
          <button
            onClick={(e) => {
              setQuery(searchResponse.spelling!.correctedQuery);
              search(e, searchResponse.spelling!.correctedQuery);
            }}
          >
            {searchResponse.spelling.correctedQuery}
          </button>
          ?
        </p>
      )}

      <div className="searchResults">
        {searchResponse?.items.map((result) => {
          return (
            <div key={result.link} className="resultDiv">
              <img src={result.link} alt={result.title} />
              <button
                onClick={() => {
                  addFavorite(result.title, result.image.byteSize, result.link);
                }}
              >
                Save to favorites
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSearch;
