import { useContext, useState } from "react";
import ISearchResponse from "../models/ISearchResponse";
import { getSearchResponse } from "../services/searchService";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Mosaic from "./Mosaic";
import MosaicItem from "./MosaicItem";
import SearchForm from "./SearchForm";

const SearchApp = () => {
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>();
  const [query, setQuery] = useState<string>("");
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <>
      <SearchForm
        query={query}
        updateQuery={(newQuery) => {
          setQuery(newQuery);
        }}
        submitSearch={async () => {
          const data = await getSearchResponse(query);
          console.log(data);
          setSearchResponse(data);
        }}
      />

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
          </button>{" "}
          ?
        </section>
      )}

      {searchResponse &&
        (searchResponse.items ? (
          <Mosaic>
            {searchResponse.items.map((result) => {
              const checkIfFavorite = favorites?.some(
                (favorite) => favorite.url === result.link
              );
              return (
                <MosaicItem
                  key={result.link}
                  itemId={result.link}
                  itemTitle={result.title}
                  buttonLabel={checkIfFavorite ? "♥" : "♡"}
                  buttonClickHandler={() => {
                    checkIfFavorite
                      ? removeFavorite(result.link)
                      : addFavorite(
                          result.title,
                          result.image.byteSize,
                          result.link
                        );
                  }}
                />
              );
            })}
          </Mosaic>
        ) : (
          <p>No results</p>
        ))}
    </>
  );
};

export default SearchApp;
