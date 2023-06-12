import { useState } from 'react';
import Tag from './Tag/Tag';
import './SortingContainer.scss';
import SortDropdown from './SortDropdown/SortDropdown';
import { useDispatch } from 'react-redux';
import {
  setSortCriteria,
  sortByRating,
  sortByPriceCheap,
  sortByPriceExpensive,
} from '../../Redux/sortCardsSlice';

function SortingContainer() {
  const [tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3']);

  const handleTagClose = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

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
    }
  };

  return (
    <div className="tags_container">
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onClose={() => handleTagClose(tag)} />
        ))}
      </div>
      <SortDropdown options={sortOptions} onChange={handleSortChange} />
    </div>
  );
}
export default SortingContainer;
