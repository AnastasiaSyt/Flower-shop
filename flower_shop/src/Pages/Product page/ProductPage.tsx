import React, { useState, useEffect } from 'react';
import image from '../../assets/flowers-green-leaves.jpg';
import './ProductPage.scss';
import { useLocation } from 'react-router-dom';
import ProductsCounter from './ProductsCounter/ProductsCounter';
import Button from '../../components/Button/Button';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FlowerTag from '../../components/FlowerTag/FlowerTag';
import { addItem } from '../../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

function ProductPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cardData = location.state && location.state.cardData;

  const [selectedImage, setSelectedImage] = useState(
    cardData && cardData.images && cardData.images[0]
  );

  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isMessageVisible, setMessageVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Добавить в корзину');

  useEffect(() => {
    const isItemInCart = cartItems.some((item) => item.productId === cardData?.id);

    if (isItemInCart) {
      setButtonText('Добавить еще');
    } else {
      setButtonText('Добавить в корзину');
    }
  }, [cartItems, cardData]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    if (cardData) {
      const { id, title, color, price, stock, thumbnail } = cardData;
      dispatch(
        addItem({
          productId: id,
          title: title,
          color: color,
          quantity: quantity,
          price: price,
          stock: stock,
          image: thumbnail,
        })
      );
      setButtonText('Товар добавлен');
      setMessageVisible(true);

      setTimeout(() => {
        setMessageVisible(false);
        const isItemInCart = cartItems.some((item) => item.productId === cardData.id);
        if (isItemInCart) {
          setButtonText('Добавить еще');
        } else {
          setButtonText('Добавить в корзину');
        }
      }, 2000);
    }
  };

  return (
    <div className="content">
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
            <p className="card_product_sort">В наличии: {cardData.stock - quantity} шт</p>
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
              {isMessageVisible && <div className="popup-message">Товар добавлен в корзину</div>}
              <Button
                className="card_product_buttons_cart"
                onClick={handleAddToCart}
                disabled={isMessageVisible}
              >
                {buttonText}
              </Button>
              <ProductsCounter
                quantity={quantity}
                onQuantityChange={setQuantity}
                stock={cardData.stock}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
