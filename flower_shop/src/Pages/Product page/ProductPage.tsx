import React, { useState } from 'react';
import image from '../../assets/flowers-green-leaves.jpg';
import './ProductPage.scss';
import { useLocation } from 'react-router-dom';
import ProductsCounter from './ProductsCounter/ProductsCounter';
import Button from '../../components/Button/Button';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FlowerTag from '../../components/FlowerTag/FlowerTag';

function ProductPage() {
  const location = useLocation();
  const cardData = location.state && location.state.cardData;

  const [selectedImage, setSelectedImage] = useState(
    cardData && cardData.images && cardData.images[0]
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div id="cardProductPage" className="card_product wrapper">
        <Breadcrumbs category={cardData.category} title={cardData.title} />
        <div className="card_product_content">
          <div className="card_product_images">
            <div className="card_product_small_img">
              {cardData &&
                cardData.images &&
                cardData.images.map((image: string, index: number) => (
                  <img
                    key={index}
                    className="small_img"
                    src={image}
                    alt={`product image ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
            </div>
            {cardData && cardData.images && (
              <div className="big_image_container">
                <img
                  className="card_product_big_img image"
                  src={selectedImage}
                  alt="main product image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            )}
          </div>

          <div className="card_product_text">
            <p className="card_product_title">{cardData.title}</p>
            <div className="card_product_tags">
              {cardData.flower.map((item: string, index: number) => (
                <FlowerTag key={index} text={item} />
              ))}
            </div>
            <p className="card_product_description">{cardData.description}</p>
            <p className="card_product_sort">В наличии: {cardData.stock} шт</p>
            <div className="card_product_color">
              Цвет:
              {cardData.color.map((item: string, index: number) => (
                <div
                  key={index}
                  className="card_product_color_circle"
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
            <p className="card_product_price">${cardData.price}</p>
            <div className="card_product_buttons">
              <Button className="card_product_buttons_cart">добавить в корзину</Button>
              <ProductsCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
