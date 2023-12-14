import React from "react";
import styles from "./WhoSection.module.scss";
import Link from "next/link";
import Image from "next/image";

const WhoSection = () => {
  return (
    <div className={styles.whoSection}>
      <div className="container-lg pt-sm-5 mt-5">
        <div className="row">
          <div className="col-sm-5 order-sm-1 order-2 mt-sm-0 mt-4">
            <Image
              src="/assets/images/home/colleges/college-cover.webp"
              width="0"
              height="0"
              className="w-100 h-100"
              sizes="100vw"
              alt="brand-logo"
              draggable={false}
            />
          </div>
          <div className="col-sm-7 order-sm-2 order-1 p-sm-5">
            <div className={styles.content}>
              <span>WHO WE ARE</span>
              <div className={styles.title}>
                Unlocking the Ancient Wisdom of Ayurveda!
              </div>
              <div className={styles.desc}>
                Compellingly procrastinate equity invested markets with
                efficient process improvements. Collaboratively actualize
                mission-critical partnerships with integrated portals.
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.iconContainer}>
                    <i className="fa fa-check" />
                  </span>
                  Collegeveda for Students
                </div>
                <div className={styles.listItem}>
                  <span className={styles.iconContainer}>
                    <i className="fa fa-check" />
                  </span>
                  Collegeveda for Instituitions
                </div>
                <div className={styles.listItem}>
                  <span className={styles.iconContainer}>
                    <i className="fa fa-check" />
                  </span>
                  Collegeveda for Parents.
                </div>
              </div>
              <Link href="/colleges" className={`${styles.button} btn`}>
                Explore colleges <i className="fa fa-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoSection;
