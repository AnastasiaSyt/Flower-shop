import CheckboxList from './CheckboxList/CheckboxList';
import ColorList from './ColorList/ColorList';
import RangeSlider from './RangeSlider/RangeSlider';
import './Filter.scss';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import FILTER from '../../constants/filtersTitles';
import { clearFilters, setPriceRange, setSizeRange } from '../../Redux/filterSlice';
import { RootState } from '../../Redux/store';

export default function Filter() {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const inputCheckbox = checkbox as HTMLInputElement;
      inputCheckbox.checked = false;
    });
  };

  const priceRange = useSelector((state: RootState) => state.filters.priceRange);
  const sizeRange = useSelector((state: RootState) => state.filters.sizeRange);

  return (
    <div className="filter">
      <CheckboxList items={FILTER.kindOfGift} title="тип" />
      <CheckboxList items={FILTER.occasion} title="повод" />
      <ColorList title="цвет" />
      <CheckboxList items={FILTER.flowers} title="цветок" />
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
