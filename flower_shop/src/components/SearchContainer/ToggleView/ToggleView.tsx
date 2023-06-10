import view_list from "../../../assets/icon_list_gray.svg";
import view_card from "../../../assets/icon_card_red.svg";
import "./ToggleView.scss";

function ToggleView() {
  return (
    <div className="icons_container">
      <div className="icon_cards">
        <img src={view_card} className="cards" />
      </div>
      <div className="icon_list">
        <img src={view_list} className="list" />
      </div>
    </div>
  );
}

export default ToggleView;
