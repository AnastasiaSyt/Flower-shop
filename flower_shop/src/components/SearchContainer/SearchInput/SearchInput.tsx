import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../Redux/searchSlice';
import './SearchInput.scss';
import search_icon from '../../../assets/Search.svg';

function SearchInput() {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <form method="get" className="search_form">
      <input
        className="search_field"
        placeholder="Искать здесь..."
        type="search"
        onChange={handleSearch}
      />
      <button className="search_button" type="submit">
        <img className="search_button_img" src={search_icon} alt="Search" />
      </button>
    </form>
  );
}

export default SearchInput;
