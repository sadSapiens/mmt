import React from "react";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/MyNavbar";
import BlogDetail from "./BlogDetail";

const BlogIndex = () => {
  return (
    <div>
      <NavBar />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default BlogIndex;
