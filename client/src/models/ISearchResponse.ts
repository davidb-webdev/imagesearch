export default interface ISearchResponse {
  context: {
    title: string;
  };
  items: ISearchItem[];
  kind: string;
  queries: IQueries;
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
    searchTime: number;
    totalResults: string;
  };
  spelling?: {
    correctedQuery: string;
    htmlCorrectedQuery: string;
  };
  url: {
    template: string;
    type: string;
  };
}

interface ISearchItem {
  displayLink: string;
  fileFormat: string;
  htmlSnippet: string;
  htmlTitle: string;
  image: {
    byteSize: number;
    contextLink: string;
    height: number;
    thumbnailHeight: number;
    thumbnailLink: string;
    thumbnailWidth: number;
    width: number;
  };
  kind: string;
  link: string;
  mime: string;
  snippet: string;
  title: string;
}

interface IQueries {
  previousPage?: [
    {
      title: string;
      totalResults: string;
      searchTerms: string;
      count: number;
      startIndex: number;
      startPage: number;
      language: string;
      inputEncoding: string;
      outputEncoding: string;
      safe: string;
      cx: string;
      sort: string;
      filter: string;
      gl: string;
      cr: string;
      googleHost: string;
      disableCnTwTranslation: string;
      hq: string;
      hl: string;
      siteSearch: string;
      siteSearchFilter: string;
      exactTerms: string;
      excludeTerms: string;
      linkSite: string;
      orTerms: string;
      relatedSite: string;
      dateRestrict: string;
      lowRange: string;
      highRange: string;
      fileType: string;
      rights: string;
      searchType: string;
      imgSize: string;
      imgType: string;
      imgColorType: string;
      imgDominantColor: string;
    }
  ];
  request: [
    {
      title: string;
      totalResults: string;
      searchTerms: string;
      count: number;
      startIndex: number;
      startPage: number;
      language: string;
      inputEncoding: string;
      outputEncoding: string;
      safe: string;
      cx: string;
      sort: string;
      filter: string;
      gl: string;
      cr: string;
      googleHost: string;
      disableCnTwTranslation: string;
      hq: string;
      hl: string;
      siteSearch: string;
      siteSearchFilter: string;
      exactTerms: string;
      excludeTerms: string;
      linkSite: string;
      orTerms: string;
      relatedSite: string;
      dateRestrict: string;
      lowRange: string;
      highRange: string;
      fileType: string;
      rights: string;
      searchType: string;
      imgSize: string;
      imgType: string;
      imgColorType: string;
      imgDominantColor: string;
    }
  ];
  nextPage?: [
    {
      title: string;
      totalResults: string;
      searchTerms: string;
      count: number;
      startIndex: number;
      startPage: number;
      language: string;
      inputEncoding: string;
      outputEncoding: string;
      safe: string;
      cx: string;
      sort: string;
      filter: string;
      gl: string;
      cr: string;
      googleHost: string;
      disableCnTwTranslation: string;
      hq: string;
      hl: string;
      siteSearch: string;
      siteSearchFilter: string;
      exactTerms: string;
      excludeTerms: string;
      linkSite: string;
      orTerms: string;
      relatedSite: string;
      dateRestrict: string;
      lowRange: string;
      highRange: string;
      fileType: string;
      rights: string;
      searchType: string;
      imgSize: string;
      imgType: string;
      imgColorType: string;
      imgDominantColor: string;
    }
  ];
}
