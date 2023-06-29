import CheckboxList from './CheckboxList/CheckboxList';
import ColorList from './ColorList/ColorList';
import RangeSlider from './RangeSlider/RangeSlider';
import './Filter.scss';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import FILTER from '../../constants/filtersTitles';
import {
  clearFilters,
  setPriceRange,
  setSizeRange,
  addSelectedCriteria,
  removeSelectedCriteria,
  clearSelectedCriteria,
} from '../../Redux/filterSlice';
import { RootState } from '../../Redux/store';

export default function Filter() {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
    dispatch(clearSelectedCriteria());
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const inputCheckbox = checkbox as HTMLInputElement;
      inputCheckbox.checked = false;
    });
  };

  const priceRange = useSelector((state: RootState) => state.filters.priceRange);
  const sizeRange = useSelector((state: RootState) => state.filters.sizeRange);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      dispatch(addSelectedCriteria(value));
    } else {
      dispatch(removeSelectedCriteria(value));
    }
  };

  return (
    <div className="filter">
      <CheckboxList items={FILTER.kindOfGift} title="тип" onChange={handleCheckboxChange} />
      <CheckboxList items={FILTER.occasion} title="повод" onChange={handleCheckboxChange} />
      <ColorList title="цвет" />
      <CheckboxList items={FILTER.flowers} title="цветок" onChange={handleCheckboxChange} />
      <RangeSlider
        minValue={0}
        maxValue={160}
        title="стоимость"
        range={priceRange}
        setFilter={setPriceRange}
      />

      <RangeSlider
        minValue={20}
        maxValue={80}
        title="высота"
        range={sizeRange}
        setFilter={setSizeRange}
      />

      <Button
        buttonType="solid"
        size="medium"
        onClick={handleClearFilters}
        className="filter_button"
      >
        СБРОСИТЬ ФИЛЬТРЫ
      </Button>
    </div>
  );
}
