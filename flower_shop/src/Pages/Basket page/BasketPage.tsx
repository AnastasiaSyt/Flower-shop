import './BasketPage.scss';
import image from '../../assets/flowers-green-leaves.jpg';
import ShoppingCartTable from '../../components/ShoppingCartTable/ShoppingCartTable';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import Promo from '../../components/Promo/Promo';

function BasketPage() {
  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="basket" id="basketPage">
        <ShoppingCartTable />
        <div>
          <TotalPrice />
          <Promo />
        </div>
      </div>
    </div>
  );
}
export default BasketPage;
