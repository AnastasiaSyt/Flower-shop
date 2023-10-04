import './MainPage.scss';
import backgroundImage from '../../assets/flowers_bg.png';
import arrows from '../../assets/arrows.svg';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="text-container">
        <p className="main_title">FLORARIO</p>
        <p className="main_title_small">Flowers shop</p>
        <img src={arrows} alt="arrows" />
      </div>
      <div className="main_content">
        <div className="main_cards">
          <Link to="category/flowers">Цветы</Link>
          <Link to="category/bouquets">Букеты</Link>
          <Link to="category/compositions">Композиции</Link>
          <Link to="category/all-categories">Все категории</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
