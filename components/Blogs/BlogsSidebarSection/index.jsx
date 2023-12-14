import React from "react";
import styles from "./BlogsSidebarSection.module.scss";
import Image from "next/image";
import Link from "next/link";

const BlogsSidebarSection = () => {
  return (
    <div className={`${styles.sidebar} p-4`}>
      <div className={`${styles.title} mb-3`}>Recent Post</div>
      <div className={styles.sidebarList}>
        {[1, 2, 3].map((item) => (
          <div className={`${styles.sidebarItem} mb-3`}>
            <div className="row align-items-stretch">
              <div className="col-4">
                <Image
                  src={"/assets/images/home/colleges/college-cover.webp"}
                  width="0"
                  height="0"
                  className="w-100 h-auto"
                  sizes="100vw"
                  alt="brand-logo"
                  draggable={false}
                />
              </div>
              <div className="col-8">
                <div className={`${styles.date} mb-0`}>4 MARCH. 2022</div>
                <Link href="/" className={`${styles.blogTitle}`}>
                  Don’t Underestimate The Software Administration UX
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSidebarSection;
