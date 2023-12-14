import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { NAVLINKS } from "@/constants/navlinksData";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topHeader}>
        <div className="container-lg">
          <div
            className={`${styles.contactInfo} d-flex align-items-center py-2 text-white`}
          >
            <div className="me-4">
              <i className="fa fa-envelope me-2" />
              Email us: info@collegeVeda.com
            </div>
            <div className="ps-4">
              <i className="fa fa-phone me-2" />
              Hotline: 1234567890
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`${styles.mainNavbar} navbar navbar-expand-lg navbar-light bg-white`}
      >
        <div className="container-lg">
          <a className={`${styles.navbarBrand} navbar-brand`} href="/">
            <Image
              src="/assets/images/common/brand-logo.webp"
              width="0"
              height="0"
              className="w-100 h-auto"
              sizes="100vw"
              alt="brand-logo"
              draggable={false}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {NAVLINKS?.map((item, index) => (
                <li
                  key={`nav-link-${index}`}
                  className={`${styles.navItem} nav-item px-2`}
                >
                  <Link className="nav-link" href={item.url}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`${styles.consultationButton} btn btn-primary d-sm-flex align-items-center justify-content-center d-none`}
          >
            <span>Get consultation</span>
            <i className="fa fa-arrow-right d-block me-2" />
          </button>
        </div>
      </nav>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default Header;
