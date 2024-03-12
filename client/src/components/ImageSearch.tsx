import { MouseEvent, useState } from "react";
import SearchResponse from "../models/SearchResponse";
import "../styles/ImageSearch.css";

const ImageSearch = () => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const [query, setQuery] = useState("");

  const search = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    optionalQueryParam?: string
  ) => {
    e.preventDefault();
    const url =
      "https://customsearch.googleapis.com/customsearch/v1?searchType=image&key=" +
      import.meta.env.VITE_GCS_KEY +
      "&cx=" +
      import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
      "&q=" +
      (optionalQueryParam ? optionalQueryParam : query);
    const response = await fetch(url);
    const data: SearchResponse = await response.json();
    console.log(data);
    setSearchResponse(data);
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
              setQuery(searchResponse.spelling.correctedQuery);
              search(e, searchResponse.spelling.correctedQuery);
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
              <img
                src={result.link}
                alt={result.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSearch;
