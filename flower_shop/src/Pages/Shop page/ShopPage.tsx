import Filter from "../../components/Filter/Filter";
import image from "../../assets/flowers-green-leaves.jpg";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import SortingContainer from "../../components/SortingContainer/SortingContainer";
import CardsContainer from "../../components/Cards/CardsContainer";
import { useEffect, useState } from "react";
import { ICards } from "../../types/ICards";
import "./ShopPage.scss";

function ShopPage() {
  const [defaultCards, setDefaultCards] = useState<ICards[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/flowers`)
      .then(async (result) => await result.json())
      .then(
        (data) => {
          setDefaultCards(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

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
          <CardsContainer cards={defaultCards} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
