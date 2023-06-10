import { useEffect } from 'react';
import './ShopPage.scss';
import { useDispatch } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import image from '../../assets/flowers-green-leaves.jpg';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import SortingContainer from '../../components/SortingContainer/SortingContainer';
import CardsContainer from '../../components/Cards/CardsContainer';
import { setCards } from '../../Redux/cardsSlice';

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/flowers`)
      .then(async (result) => await result.json())
      .then(
        (data) => {
          dispatch(setCards(data));
        },
        (error) => {
          console.error(error);
        }
      );
  }, [dispatch]);

  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="wrapper shop_page">
        <Filter />
        <div className="shop_container">
          <div className="shop_container_sort">
            <SearchContainer />
            <SortingContainer />
          </div>
          <CardsContainer />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
