import React from "react";
import BreadcrumbSection from "../About/BreadcrumbSection";
import styles from "./AllIndiaCounselling.module.scss";
import Image from "next/image";
import Link from "next/link";

const AllIndiaCounsellingComponent = () => {
  return (
    <div className={styles.cutoffSection}>
      <BreadcrumbSection title="All India Couselling" />
      <div className="container-lg py-5">
        <div className={styles.content}>
          <div className="mb-4">
            <h1 className={styles.title}>
              Online Counseling for Allotment of All India Quota(AIQ)-Under
              Graduate (BAMS) Seats
            </h1>
            <p>
              All the eligible candidates who qualified in NEET(UG)-2024
              examination and aspiring for admission in Under Graduate
              (BAMS/BSMS/BUMS/BHMS) courses are hereby informed that Counselling
              for All India Quota seats under Government, Government Aided,
              Deemed Universities, Central Universities, and National Institutes
              for the session 2024-25 will be conducted by Ayush Admissions
              Central Counseling Committee (AACCC), Ministry of Ayush,
              Government of India.
            </p>
            <ol type="1">
              <li>
                For participation in AACCC-UG Counseling, the candidates are
                required to register themselves at the official website of AACCC{" "}
                <Link href="https://aaccc.gov.in/" target="_blank">
                  (www.aaccc.gov.in)
                </Link>
                . 2. Kindly note that Non-Refundable registration fees and
                Refundable Security deposits have to be paid by the candidates
                at the time of registration as per their category.
              </li>
              <li>
                Kindly note that Non-Refundable registration fees and Refundable
                Security deposits have to be paid by the candidates at the time
                of registration as per their category.
              </li>
              <li>
                The Refundable Security Deposit will be forfeited if a candidate
                resigned from the seat/institute allotted during the 2nd Round.
                Further, the Refundable Security Deposit will be forfeited, if
                the candidate does not join/exit the allotted seats in Round-3
                or Stray Vacancy Round.
              </li>
            </ol>
            <Image
              src="/assets/images/common/allIndiaCounselling.webp"
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

export default AllIndiaCounsellingComponent;
