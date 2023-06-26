import CopyButton from './CopyButton/CopyButton';
import SearchInput from './SearchInput/SearchInput';
import ToggleView from './ToggleView/ToggleView';

function SearchContainer() {
  return (
    <div className="search_container">
      <SearchInput />
      <CopyButton />
      <ToggleView />
    </div>
  );
}

export default SearchContainer;
