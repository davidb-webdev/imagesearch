import { useState } from "react";
import ISearchResponse from "../models/ISearchResponse";
import Favorite from "../models/Favorite";
import { useAuth0 } from "@auth0/auth0-react";
import { postFavorite } from "../services/favoritesService";
import { getSearchResponse } from "../services/searchService";
import "../styles/ImageSearch.css";

const ImageSearch = () => {
  const { user } = useAuth0();
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>();
  const [query, setQuery] = useState<string>("");

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
        <button
          onClick={async (e) => {
            e.preventDefault();
            const data = await getSearchResponse(query);
            console.log(data);
            setSearchResponse(data);
          }}
        >
          Search
        </button>
      </form>

      {searchResponse?.searchInformation && (
        <section>
          Found {searchResponse.searchInformation.formattedTotalResults} results
          in {searchResponse.searchInformation.formattedSearchTime} seconds
        </section>
      )}

      {searchResponse?.spelling && (
        <section>
          Did you mean{" "}
          <button
            onClick={async () => {
              const data = await getSearchResponse(
                searchResponse.spelling!.correctedQuery
              );
              setQuery(data.queries.request[0].searchTerms);
              setSearchResponse(data);
            }}
          >
            {searchResponse.spelling.correctedQuery}
          </button>
          ?
        </section>
      )}

      {searchResponse && (
        <section className="searchResults">
          {searchResponse.items.map((result) => {
            return (
              <div key={result.link}>
                <img src={result.link} alt={result.title} />
                <button
                  onClick={async () => {
                    if (!user || !user.sub) return false;
                    const data = await postFavorite(
                      user.sub,
                      new Favorite(
                        result.title,
                        result.image.byteSize,
                        result.link
                      )
                    );
                    console.log(data);
                  }}
                >
                  Save to favorites
                </button>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ImageSearch;
