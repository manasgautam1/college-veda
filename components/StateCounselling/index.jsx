import React from "react";
import BreadcrumbSection from "../About/BreadcrumbSection";
import styles from "./StateCounselling.module.scss";
import Image from "next/image";
import Link from "next/link";

const linksList = [
  {
    state: "Uttar Pradesh",
    link: "https://upayushcounseling.upsdc.gov.in/",
  },
  {
    state: "Punjab",
    link: "https://graupunjab.org/",
  },
  {
    state: "Uttrakhand",
    link: "https://uau.ac.in/",
  },
  {
    state: "Karnataka",
    link: "https://ayush.karnataka.gov.in/",
  },
  {
    state: "Madhya Pradesh",
    link: "https://mponline.gov.in/",
  },
  {
    state: "Bihar",
    link: "https://bceceboard.bihar.gov.in/",
  },
  {
    state: "Chattisgarh",
    link: "https://cgayush.admissions.nic.in/",
  },
  {
    state: "Haryana",
    link: "https://skau.ac.in/",
  },
];

const StateCounsellingComponent = () => {
  return (
    <div className={styles.cutoffSection}>
      <BreadcrumbSection
        imgURL="/assets/images/breadcrumbs/rank-predictor.webp"
        title="State Counselling"
      />
      <div className="container-lg py-5">
        <div className={styles.content}>
          <div className="mb-4">
            <p>
              Every state has a different website for AYUSH counseling. College
              Veda helps you in counseling. We mention the official website of
              the state so that it is easy for you to understand the counseling
              process -
            </p>
            <ol type="a">
              {linksList?.map((item, index) => (
                <li key={`state-link-${index}`}>
                  <Link href={item?.link} target="_blank">
                    {item?.state}
                  </Link>
                </li>
              ))}
            </ol>
            <Image
              src="/assets/images/common/state-counselling-img-1.webp"
              width="0"
              height="0"
              className="w-100 h-auto"
              sizes="100vw"
              alt="all india counselling chart"
              draggable={false}
            />
            <Image
              src="/assets/images/common/state-counselling-img-2.webp"
              width="0"
              height="0"
              className="w-100 h-auto"
              sizes="100vw"
              alt="all india counselling chart"
              draggable={false}
            />
            <Image
              src="/assets/images/common/state-counselling-img-3.webp"
              width="0"
              height="0"
              className="w-100 h-auto"
              sizes="100vw"
              alt="all india counselling chart"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCounsellingComponent;
