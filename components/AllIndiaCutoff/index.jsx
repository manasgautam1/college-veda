import React from "react";
import styles from "./AllIndiaCutoff.module.scss";
import BreadcrumbSection from "../About/BreadcrumbSection";
import CommonTable from "../common/common-table";

const AllIndiaCutoffComponent = () => {
  const tableData = {
    tableName: "NEET cutoff 2024",
    columns: [
      {
        name: "Category",
      },
      {
        name: "NEET 2024 Cut-off Percentile",
      },
      {
        name: "NEET Cut Off 2024",
      },
    ],
    rows: [
      ["General", "50th percentile", "720-164"],
      ["General-PH", "45th percentile", "163-146"],
      ["SC/ST/OBC", "40th percentile", "163-129"],
      ["SC/OBC-PH", "40th percentile", "145-129"],
      ["ST-PH", "40th percentile", "141-129"],
    ],
  };
  return (
    <div className={styles.cutoffSection}>
      <BreadcrumbSection
        title="NEET Cut Off 2024 Out"
        subtitle="NEET Cut Off 2024 has been released by NTA category wise."
      />

      <div className="container-lg py-5">
        <div className={styles.content}>
          <div className="mb-4">
            <h1 className={styles.title}>NTA NEET Cut Off 2024 Out</h1>
            <p>
              <strong>
                NEET Cut Off 2024 has been released by the National Testing
                Agency on its official website www.neet.nta.nic.in along with
                NEET UG Result 2024.
              </strong>{" "}
              The cut off scores have been released separately for the
              candidates belonging to different categories. This year, a total
              of 56.21% of candidates have cleared the NEET Exam. The NEET
              cut-off is the minimum score required for admission to medical or
              dental colleges in India. The cut off is set by the National
              Testing Agency (NTA), which conducts the NEET exam. The cut-off
              varies from year to year and from college to college. To prepare
              for the NEET 2024, Students need to check the last year cut off.
            </p>
          </div>
          <div className="mb-4">
            <h2 className={styles.title}>NEET UG Cut Off 2024</h2>
            <p>
              The Category-wise cut off marks range and percentile score for the
              NTA NEET UG exam 2024 have been released by the National Testing
              Agency (NTA). The range of qualifying marks this year increased as
              compared to last year.{" "}
              <strong>
                The NEET cut off 2024 for unreserved (UR) category students has
                increased from 720-137 in NEET UG last year to 720-164.
              </strong>{" "}
              The NEET cut off 2024 for general category candidates is the 50th
              percentile. The NEET cut off for other categories has also been
              increased this year. Let's have a look at the category-wise NEET
              UG cut off 2024.
            </p>
          </div>
          <CommonTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default AllIndiaCutoffComponent;
