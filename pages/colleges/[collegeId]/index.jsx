import React from "react";
import Header from "@/components/common/Header/index";
import Footer from "@/components/common/Footer";
import CollegeDetailsComponent from "@/components/CollegeDetails";

const CollegeDetailsPage = () => {
  return (
    <>
      <Header />
      <CollegeDetailsComponent />
      <Footer />
    </>
  );
};

export default CollegeDetailsPage;
