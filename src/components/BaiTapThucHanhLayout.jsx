import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import PageContent from "./PageContent";
import Footer from "./Footer";

export default function BaiTapThucHanhLayout() {
  return (
    <div>
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
