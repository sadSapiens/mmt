import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import ListBlog from "./listBlog/ListBlog";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <ListBlog />
      <Footer />
    </div>
  );
};

export default Blog;
