import React from "react";
import styles from "./AllIndiaCutoff.module.scss";
import BreadcrumbSection from "../About/BreadcrumbSection";
import CommonTable from "../common/common-table";

const AllIndiaCutoffComponent = () => {
  const tableData = {
    tableName: "NEET UG Cut Off 2023",
    columns: [
      {
        name: "Category",
      },
      {
        name: "Qualifying Criteria",
      },
      {
        name: "NEET Cut Off 2023",
      },
    ],
    rows: [
      ["UR/EWS", "50th percentile", "720-137"],
      ["OBC, SC, ST", "40th percentile", "136-107"],
      ["UR / EWS & PH", "45th percentile", "136-121"],
      ["OBC & PH", "40th percentile", "120-107"],
      ["ST & PH", "40th percentile", "120-108"],
    ],
  };
  return (
    <div className={styles.cutoffSection}>
      <BreadcrumbSection
        title="NEET Cut Off 2023 Out"
        subtitle="NEET Cut Off 2023 has been released by NTA category wise."
      />

      <div className="container-lg py-5">
        <div className={styles.content}>
          <div className="mb-4">
            <div className={styles.title}>NTA NEET Cut Off 2023 Out</div>
            <div>
              <strong>
                NEET Cut Off 2023 has been released by the National Testing
                Agency on its official website www.neet.nta.nic.in along with
                NEET UG Result 2023.
              </strong>{" "}
              The cut off scores have been released separately for the
              candidates belonging to different categories. This year, a total
              of 56.21% of candidates have cleared the NEET Exam. The NEET
              cut-off is the minimum score required for admission to medical or
              dental colleges in India. The cut off is set by the National
              Testing Agency (NTA), which conducts the NEET exam. The cut-off
              varies from year to year and from college to college. To prepare
              for the NEET 2024, Students need to check the last year cut off.
            </div>
          </div>
          <div className="mb-4">
            <div className={styles.title}>NEET UG Cut Off 2023</div>
            <div>
              The Category-wise cut off marks range and percentile score for the
              NTA NEET UG exam 2023 have been released by the National Testing
              Agency (NTA). The range of qualifying marks this year increased as
              compared to last year.{" "}
              <strong>
                The NEET cut off 2023 for unreserved (UR) category students has
                increased from 715-117 in NEET UG last year to 720-137.
              </strong>{" "}
              The NEET cut off 2023 for general category candidates is the 50th
              percentile. The NEET cut off for other categories has also been
              increased this year. Let's have a look at the category-wise NEET
              UG cut off 2023.
            </div>
          </div>
          <CommonTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default AllIndiaCutoffComponent;
