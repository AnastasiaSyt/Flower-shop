import Filter from "../../components/Filter/Filter";
import image from "../../assets/flowers-green-leaves.jpg";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

function ShopPage() {
  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="wrapper">
        <Filter />
        <SearchContainer />
      </div>
    </div>
  );
}

export default ShopPage;
