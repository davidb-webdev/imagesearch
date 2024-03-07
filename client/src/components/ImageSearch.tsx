import { MouseEvent, useState } from "react";
import { SearchResult } from "../models/SearchResult.ts";
import { SearchInformation } from "../models/searchInformation.ts";

const ImageSearch = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInformation, setSearchInformation] =
    useState<SearchInformation>();
  const [query, setQuery] = useState("");

  const search = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url =
      "https://customsearch.googleapis.com/customsearch/v1?searchType=image&key=" +
      import.meta.env.VITE_GCS_KEY +
      "&cx=" +
      import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
      "&q=" +
      query;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setSearchInformation(data.searchInformation);
    setSearchResults(data.items);
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
      <p>
        {searchInformation &&
          `Found ${searchInformation.formattedTotalResults} results in ${searchInformation.formattedSearchTime} seconds`}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {searchResults.map((result) => {
          return (
            <div>
              <img
                src={result.link}
                alt={result.title}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "400px",
                  maxHeight: "200px",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSearch;
