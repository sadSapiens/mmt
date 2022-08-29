import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/MyNavbar";
import store from "../store";
import About from "./aboutus";
import Basket from "./basket";
import CartFull from "./basket/cart/cartFull/CartFull";
import Blog from "./blog";
import BlogDetail from "./blog/blogDetail";
import CatalogPage from "./catalog/index";
import CatalogDetailsHiidea from "./catalog/catalogDetailsHiidea";
import CatalogDetailsOasis from "./catalog/catalogDetailsOasis";
import Home from "./home";
import Profile from "./profile";
import Redirect from "./redirectPage";
import SignInPage from "./signin";
import SignUpPage from "./signup";
import Portfolio from "./portfolio";
import Recovery from "./signin/Recovery";
import Confirmation from "./signup/confirmation/Confirmation";
import OrderHistory from "./profile/OrderHistory";
import EditProfile from "./profile/editProfile/EditProfile";
import Congratulation from "./signup/Congratulation/Congratulation";
import NewPassword from "./signup/newPassword/NewPassword";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cart" element={<Basket />} />
            <Route path="/cartfull" element={<CartFull />} />
            {/* <Route path="/cartmodal" element={<CartModal />} /> */}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/nice" element={<Congratulation />} />
            <Route path="/new-password" element={<NewPassword />} />

            <Route
              path="/catalog-detailoasis/:id"
              element={<CatalogDetailsOasis />}
            />
            <Route
              path="/catalog-detailhiidea/:id"
              element={<CatalogDetailsHiidea />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            {/* <Route path="*" element={<Redirect />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
