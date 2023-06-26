import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from '../../../Redux/cardViewSlice';
import view_list_selected from '../../../assets/icon_list_red.svg';
import view_list_unselected from '../../../assets/icon_list_gray.svg';
import view_card_selected from '../../../assets/icon_card_red.svg';
import view_card_unselected from '../../../assets/icon_card_gray.svg';
import { RootState } from '../../../Redux/store';
import './ToggleView.scss';

function ToggleView() {
  const dispatch = useDispatch();
  const cardView = useSelector((state: RootState) => state.cardView.view);

  const handleToggle = () => {
    dispatch(toggleView());
  };

  return (
    <div className="icons_container">
      <div className={`icon_cards ${cardView === 'cards' ? 'active' : ''}`}>
        <img
          src={cardView === 'cards' ? view_card_selected : view_card_unselected}
          onClick={handleToggle}
        />
      </div>
      <div className={`icon_list ${cardView === 'list' ? 'active' : ''}`}>
        <img
          src={cardView === 'list' ? view_list_selected : view_list_unselected}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}

export default ToggleView;
