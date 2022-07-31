import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/MyNavbar";
import store from "../store";
import About from "./aboutus";
import Basket from "./basket";
import CartFull from "./basket/cart/cartFull/CartFull";
// import CartModal from "./basket/cart/cartModal/CartModal";
import Blog from "./blog";
import BlogIndex from "./blog/blogDetail";
import CatalogPage from "./catalog/index";
import CatalogDetailsHiidea from "./catalog/catalogDetailsHiidea/CatalogDetails";
import CatalogDetailsOasis from "./catalog/catalogDetailsOasis/CatalogDetails";
import Home from "./home";
import Profile from "./profile";
import HistoryOrder from "./profile/orderHistory";
import Redirect from "./redirectPage";
import SignInPage from "./signin";
import SignUpPage from "./signup";
import Portfolio from "./portfolio";
import Recovery from "./recovery";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cart" element={<Basket />} />
            <Route path="/cartfull" element={<CartFull />} />
            {/* <Route path="/cartmodal" element={<CartModal />} /> */}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route
              path="/catalogdetailoasis"
              element={<CatalogDetailsOasis />}
            />
            <Route
              path="/catalogdetailhiidea"
              element={<CatalogDetailsHiidea />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetail" element={<BlogIndex />} />
            <Route path="/historyorder" element={<HistoryOrder />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
