import CheckboxList from './CheckboxList/CheckboxList';
import ColorList from './ColorList/ColorList';
import RangeSlider from './RangeSlider/RangeSlider';
import './Filter.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../Redux/filterSlice';
import FILTER from '../../constants/filtersTitles';

export default function Filter() {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="filter">
      <CheckboxList items={FILTER.kindOfGift} title="тип" />
      <CheckboxList items={FILTER.occasion} title="повод" />
      <ColorList title="цвет" />
      <CheckboxList items={FILTER.flowers} title="цветок" />
      <RangeSlider minValue={0} maxValue={160} title="стоимость" />
      <RangeSlider minValue={20} maxValue={80} title="высота" />
      <Button buttonType="solid" size="medium" onClick={handleClearFilters}>
        СБРОСИТЬ ФИЛЬТРЫ
      </Button>
    </div>
  );
}
