import { SearchItem } from "./SearchItem";

export interface SearchResponse {
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