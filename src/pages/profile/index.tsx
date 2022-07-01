import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import Room from "./room/Room";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <Room />
      <Footer />
    </div>
  );
};

export default Profile;
