import "./SearchInput.scss";
import search_icon from "../../../assets/Search.svg";

function SearchInput() {
  return (
    <form method="get" className="search_form">
      <input
        className="search_field"
        placeholder="Искать здесь..."
        type="search"
      />
      <button className="search_button" type="submit">
        <img className="search_button_img" src={search_icon} />
      </button>
    </form>
  );
}

export default SearchInput;
