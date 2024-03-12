import ImageSearch from "../components/ImageSearch";
import PromptLogin from "../components/PromptLogin";

const Search = () => {
  document.title = "ImageSearch";

  return (
    <>
      <PromptLogin>
        <ImageSearch />
      </PromptLogin>
    </>
  );
};

export default Search;
