import { useContext, useState } from "react";
import ISearchResponse from "../models/ISearchResponse";
import { getSearchResponse } from "../services/searchService";
import "../styles/ImageSearch.css";
import { FavoritesContext } from "../contexts/FavoritesContext";

const ImageSearch = () => {
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>();
  const [query, setQuery] = useState<string>("");
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="ImageSearch">
      <form
        className="searchForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          console.log(target.querySelector("input")?.blur());
          const data = await getSearchResponse(query);
          console.log(data);
          setSearchResponse(data);
        }}
      >
        <input
          type="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button>🔍</button>
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

                {favorites?.some((favorite) => favorite.url === result.link) ? (
                  <button
                    onClick={() => {
                      removeFavorite(result.link);
                    }}
                  >
                    ♥
                  </button>
                ) : (
                  <button
                    onClick={async () => {
                      addFavorite(
                        result.title,
                        result.image.byteSize,
                        result.link
                      );
                    }}
                  >
                    ♡
                  </button>
                )}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ImageSearch;
