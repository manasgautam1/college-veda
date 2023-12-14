import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-sm-4 mb-sm-0 mb-4">
            <a className={`${styles.navbarBrand} navbar-brand`} href="#">
              <Image
                src="/assets/images/common/brand-logo.webp"
                width="0"
                height="0"
                className="w-50 h-auto"
                sizes="100vw"
                alt="brand-logo"
                draggable={false}
              />
            </a>
            <div className={`${styles.subText} w-75`}>
              Discover our passion for shaping educational dreams into reality
              at College Veda - where expertise meets personalized guidance.
            </div>
            <div
              className={`${styles.socialLinks} d-flex align-items-center justify-content-start`}
            >
              <div className={styles.iconContainer}>
                <i className="fab fa-facebook-f" />
              </div>
              <div className={styles.iconContainer}>
                <i className="fab fa-youtube" />
              </div>
              <div className={styles.iconContainer}>
                <i className="fab fa-twitter" />
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-sm-0 mb-4">
            <div className="row">
              <div className={`${styles.footerLinks} col-6`}>
                <div className={styles.footerLinksTitle}>Information</div>
                <div className={styles.footerLink}>About us</div>
                <div className={styles.footerLink}>Careers</div>
                <div className={styles.footerLink}>Customer</div>
                <div className={styles.footerLink}>Privacy</div>
                <div className={styles.footerLink}>Service</div>
              </div>
              <div className={`${styles.footerLinks} col-6`}>
                <div className={styles.footerLinksTitle}>Courses</div>
                <div className={styles.footerLink}>Masters degree</div>
                <div className={styles.footerLink}>Post graduation</div>
                <div className={styles.footerLink}>Under graduate</div>
                <div className={styles.footerLink}>Engineering</div>
                <div className={styles.footerLink}>PHD Degree</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.footerLinksTitle}>
              Sign Up for Our Newsletter
            </div>
            <div className={styles.subText2}>
              Receive weekly newsletter with educational, popular books and much
              more!
            </div>
            <div className={styles.newsletterContainer}>
              <div className="row mt-3">
                <div className="col-8 pe-0">
                  <input
                    type="text"
                    name="email"
                    id=""
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="col-4 ps-0">
                  <button type="submit" className="px-0 btn d-block w-100">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={`${styles.copyrightText} text-center mb-0`}>
          &copy; 2023 CollegeVeda, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
