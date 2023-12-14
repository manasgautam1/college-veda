import React from "react";
import BlogsSidebarSection from "./BlogsSidebarSection";
import BlogsMainSection from "./BlogsMainSection";
import BreadcrumbSection from "../About/BreadcrumbSection";

const BlogsComponent = () => {
  return (
    <>
      <BreadcrumbSection title={"Blogs"} subtitle={"Home > Blogs"} />
      <div className="container-lg">
        <div className="row py-5 p-relative">
          <div className="col-lg-8">
            <BlogsMainSection />
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <BlogsSidebarSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComponent;
