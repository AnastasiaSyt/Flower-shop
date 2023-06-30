import image from '../../assets/flowers-green-leaves.jpg';
import './ProductPage.scss';
import { useLocation } from 'react-router';
import ProductsCounter from './ProductsCounter/ProductsCounter';
import Button from '../../components/Button/Button';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

function ProductPage() {
  const location = useLocation();
  const cardData = location.state && location.state.cardData;

  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div id="cardProductPage" className="card_product wrapper">
        <Breadcrumbs category={cardData.category} title={cardData.title} />
        <div className="card_product_content">
          <div className="card_product_images">
            <div className="card_product_small_img">
              {cardData && cardData.images && cardData.images[0] && (
                <img className="small_img" src={cardData.images[0]} />
              )}
              {cardData && cardData.images && cardData.images[1] && (
                <img className="small_img" src={cardData.images[1]} />
              )}
              {cardData && cardData.images && cardData.images[2] && (
                <img className="small_img" src={cardData.images[2]} />
              )}
            </div>
            {cardData && cardData.thumbnail && (
              <img className="card_product_big_img" src={cardData.thumbnail} />
            )}
          </div>

          <div className="card_product_text">
            <p className="card_product_title">{cardData.title}</p>
            <div className="card_product_tags">
              <div className="colored_tag">
                <p className="tag_text">{cardData.flower}</p>
              </div>
            </div>
            <p className="card_product_description">{cardData.description}</p>
            <p className="card_product_sort">В наличии: {cardData.stock} шт</p>
            <p className="card_product_color">Цвет: Красный</p>
            <p className="card_product_price">$2</p>
            <div className="card_product_buttons">
              <Button>добавить в корзину</Button>
              <ProductsCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
