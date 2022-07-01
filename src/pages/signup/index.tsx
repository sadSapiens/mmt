import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import SignUp from "./signup/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <NavBar />
      <SignUp />
      <Footer />
    </div>
  );
};

export default SignUpPage;
