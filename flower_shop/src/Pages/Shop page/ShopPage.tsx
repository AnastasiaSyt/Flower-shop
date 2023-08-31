import './ShopPage.scss';
import Filter from '../../components/Filter/Filter';
import image from '../../assets/flowers-green-leaves.jpg';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import SortingContainer from '../../components/SortingContainer/SortingContainer';
import CardsContainer from '../../components/Cards/CardsContainer';
import { useGetFlowersQuery } from '../../services/api';

function ShopPage() {
  const { isLoading, error } = useGetFlowersQuery(9);

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
          {isLoading ? (
            'Loading...'
          ) : error ? (
            <div className="text_red">Error occurred while fetching data.</div>
          ) : (
            <CardsContainer />
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
