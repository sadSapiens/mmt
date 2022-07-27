import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import SignIn from "./signin/SignIn";

const SignInPage = () => {
  return (
    <div>
      <NavBar />
      <SignIn />
      <Footer />
    </div>
  );
};

export default SignInPage;
