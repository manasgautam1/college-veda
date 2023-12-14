import React from "react";
import styles from "./BreadcrumbSection.module.scss";

const BreadcrumbSection = ({ title, subtitle }) => {
  return (
    <section
      className={styles.breadcrumbSection}
      style={{
        background: `url('/assets/images/common/breadcrumb-bg.webp') no-repeat center center/cover`,
      }}
    >
      <div className="container-lg d-flex align-items-start justify-content-center flex-column h-100">
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
