import image from "../../assets/flowers-green-leaves.jpg";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import ProductsCounter from "./ProductsCounter/ProductsCounter";
import Button from "../../components/Button/Button";
import ICards from "../../types/ICards";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ cardData: ICards }>();
  const cardData = location.state && location.state.cardData;
  console.log(cardData);

  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="wrapper product_page">
        <p>Продукт {id}</p>
      </div>
      <div id="cardProductPage" className="card_product wrapper">
        <p className="breadcrumbs">Магазин &gt; цветы &gt; Красная роза</p>
        <div className="card_product_content">
          <div className="card_product_images">
            <div className="card_product_small_img">
              {cardData && cardData.images && cardData.images[1] && (
                <img className="small_img" src={cardData.images[1]} />
              )}
              {cardData && cardData.images && cardData.images[2] && (
                <img className="small_img" src={cardData.images[2]} />
              )}
              {cardData && cardData.images && cardData.images[3] && (
                <img className="small_img" src={cardData.images[3]} />
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
