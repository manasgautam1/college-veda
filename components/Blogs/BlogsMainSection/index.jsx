import React from "react";
import styles from "./BlogsMainSection.module.scss";
import Image from "next/image";
import Link from "next/link";

const BlogsMainSection = () => {
  return (
    <div className={styles.blogsContainer}>
      {[1, 2, 3].map((item) => (
        <div className={`${styles.blogContainer} mb-4`}>
          <Image
            src={"/assets/images/home/colleges/college-cover.webp"}
            width="0"
            height="0"
            className="w-100 h-auto"
            sizes="100vw"
            alt="brand-logo"
            draggable={false}
          />
          <div className="py-4">
            <div
              className={`${styles.blogDetails} d-flex align-items-center justify-content-start gap-4 mb-4`}
            >
              <div className={styles.detailContainer}>
                <i class="far fa-calendar-check me-1" /> July 21, 2024
              </div>
              <div className={`${styles.detailContainer} text-uppercase`}>
                <i class="far fa-user me-1" /> samrat
              </div>
              <div className={styles.detailContainer}>
                <i class="far fa-comments me-1" /> 2 Comments
              </div>
            </div>
            <div className={`${styles.blogTitle} mb-3`}>
              The Challenge Of Global Learning In Public Education
            </div>
            <div className={`${styles.blogData} mb-3`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat
            </div>
            <Link
              href="/"
              className={`${styles.readMoreButton} btn btn-primary`}
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsMainSection;
