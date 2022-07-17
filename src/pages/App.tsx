import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../store";
import About from "./aboutus";
import Basket from "./basket";
import Blog from "./blog";
import BlogIndex from "./blog/blogDetail";
import CatalogPage from "./catalog";
import CatalogDetailsPage from "./catalog/catalogDetails";
import Home from "./home";
import Portfolio from "./portfolio";
import Profile from "./profile";
import HistoryOrder from "./profile/orderHistory";
import SignInPage from "./signin";
import SignUpPage from "./signup";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalogdetail" element={<CatalogDetailsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogIndex />} />
          <Route path="/historyorder" element={<HistoryOrder />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
