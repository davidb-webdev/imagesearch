import SearchItem from "./SearchItem";

interface SearchResponse {
	items: SearchItem[];
	searchInformation: {
		formattedSearchTime: string;
		formattedTotalResults: string;
		searchTime: number;
		totalResults: string;
	  };
	spelling: {
		correctedQuery: string;
		htmlCorrectedQuery: string;
	};
}

export default SearchResponse;