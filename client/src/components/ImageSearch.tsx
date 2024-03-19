import { MouseEvent, useState } from "react";
import ISearchResponse from "../models/ISearchResponse";
import Favorite from "../models/Favorite";
import "../styles/ImageSearch.css";
import { useAuth0 } from "@auth0/auth0-react";
import { postFavorite } from "../services/favoritesService";

const ImageSearch = () => {
  const { user } = useAuth0();
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>();
  const [query, setQuery] = useState("");

  const search = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    queryParameter?: string
  ) => {
    e.preventDefault();
    const url =
      import.meta.env.VITE_GCS_BASE_URL +
      "&key=" +
      import.meta.env.VITE_GCS_KEY +
      "&cx=" +
      import.meta.env.VITE_GCS_SEARCH_ENGINE_ID +
      "&q=" +
      (queryParameter ? queryParameter : query);
    const response = await fetch(url);
    const data: ISearchResponse = await response.json();
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
                onClick={async () => {
                  if (!user || !user.sub) return false;
                  const favorite = new Favorite(result.title, result.image.byteSize, result.link);
                  const data = await postFavorite(user.sub, favorite);
                  console.log(data);
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
