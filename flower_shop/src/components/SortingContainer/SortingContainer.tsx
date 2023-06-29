import Tag from './Tag/Tag';
import './SortingContainer.scss';
import SortDropdown from './SortDropdown/SortDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSortCriteria,
  sortByRating,
  sortByPriceCheap,
  sortByPriceExpensive,
  cancelSort,
} from '../../Redux/sortCardsSlice';
import { RootState } from '../../Redux/store';
import { removeSelectedCriteria } from '../../Redux/filterSlice';

function SortingContainer() {
  const selectedCriteria = useSelector((state: RootState) => state.filters.selectedFilters);

  const sortOptions = [
    { value: 'popular', label: 'Начать с популярных' },
    { value: 'expensive', label: 'Начать с дорогих' },
    { value: 'cheap', label: 'Начать с дешевых' },
  ];

  const dispatch = useDispatch();

  const handleSortChange = (value: string) => {
    dispatch(setSortCriteria(value));

    if (value === 'popular') {
      dispatch(sortByRating());
    } else if (value === 'cheap') {
      dispatch(sortByPriceCheap());
    } else if (value === 'expensive') {
      dispatch(sortByPriceExpensive());
    } else {
      dispatch(cancelSort());
    }
  };

  const handleTagClose = (criteria: string) => {
    dispatch(removeSelectedCriteria(criteria));
  };

  return (
    <div className="tags_container">
      <div className="tags">
        {selectedCriteria.map((criteria) => (
          <Tag key={criteria} label={criteria} onClose={() => handleTagClose(criteria)} />
        ))}
      </div>
      <SortDropdown options={sortOptions} onChange={handleSortChange} />
    </div>
  );
}
export default SortingContainer;
