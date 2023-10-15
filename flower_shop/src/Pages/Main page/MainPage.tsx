import './MainPage.scss';
import backgroundImage from '../../assets/flowers_bg.png';
import arrows from '../../assets/arrows.svg';
import { Link } from 'react-router-dom';
import CardLink from '../../components/CardLink/CardLink';
import CATEGORY from '../../constants/categories';

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
          {Object.values(CATEGORY).map((category) => (
            <Link to={category.link} key={category.link}>
              <CardLink cardData={category} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
