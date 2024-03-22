import styled from "styled-components";

interface ISearchFormProps {
  query: string;
  updateQuery: (newQuery: string) => void;
  submitSearch: (newQuery: string) => void;
}

const SearchFormContainer = styled.form`
  display: flex;
  gap: var(--spacing-half);

  input {
    flex-grow: 1;
  }
`;

const SearchForm = ({
  query,
  updateQuery,
  submitSearch
}: ISearchFormProps) => {
  return (
    <SearchFormContainer
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        target.querySelector("input")?.blur();
        submitSearch(query);
      }}
    >
      <input
        type="search"
        onChange={(e) => {
          updateQuery(e.target.value);
        }}
        value={query}
      />
      <button>🔍</button>
    </SearchFormContainer>
  );
};

export default SearchForm;
