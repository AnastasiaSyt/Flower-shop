import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./constants/routes";
import Layout from "./components/Layout/Layout";
import ShopPage from "./Pages/Shop page/ShopPage";
import BasketPage from "./Pages/Basket page/BasketPage";
import ErrorPage from "./Pages/Error page/ErrorPage";
import ProductPage from "./Pages/Product page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path={ROUTES.shop} element={<ShopPage />} />
          <Route path={`${ROUTES.product}/:id`} element={<ProductPage />} />
          <Route path={ROUTES.basket} element={<BasketPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
