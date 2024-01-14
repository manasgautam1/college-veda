import React, { useEffect, useState } from "react";
import styles from "./CollegeList.module.scss";
import { collegeTypes } from "@/constants/collegeTypes";
import { statesList } from "@/constants/states";
import Image from "next/image";
import Link from "next/link";
import { getCollegesWithFilters } from "@/api";
import { GetFirstParaFromRichText, stringToUrl } from "@/utils/helper";
import { useRouter } from "next/router";
import Loader from "@/components/common/Loader";
import Pagination from "@/components/common/Pagination";

const CollegeList = () => {
  const router = useRouter();
  const { query } = router;

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    collegeType: "",
    state: "",
    city: "",
    fullName: "",
  });

  useEffect(() => {
    if (router.isReady && query) {
      const { course, state, collegeType } = query;
      setFilters({
        ...filters,
        course: course || "",
        state: state || "",
        collegeType: collegeType || "",
        page: currentPage || 1,
      });
      setLoading(true);
      fetchColleges({
        ...filters,
        course: course || "",
        state: state || "",
        collegeType: collegeType || "",
        page: currentPage || 1,
      });
    }
  }, [query, currentPage]);

  const fetchColleges = async (filters) => {
    try {
      const res = await getCollegesWithFilters(filters);
      setColleges([...res?.data?.data]);
      setCurrentPage(res?.data?.currentPage);
      setTotalPages(res?.data?.totalPages);
      setTotalCount(res?.data?.totalCount);
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchColleges(filters);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilterBtnClick = () => {
    setLoading(true);
    fetchColleges(filters);
  };

  const handleResetBtnClick = () => {
    setFilters({
      page: 1,
      collegeType: "",
      state: "",
      city: "",
      fullName: "",
    });
    setLoading(true);
    fetchColleges({
      page: 1,
      collegeType: "",
      state: "",
      city: "",
      fullName: "",
    });
  };

  return (
    <section>
      <div className={styles.filterSection}>
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-9">
              <div className={`${styles.filters} d-flex align-items-center`}>
                <input
                  type="text"
                  className="form-control"
                  id="usr"
                  placeholder="Search college"
                  name="fullName"
                  onChange={handleChange}
                />
                <select
                  className={`form-select ${styles.inputSelect}`}
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="state"
                  value={filters.state}
                >
                  <option value="">Select state</option>
                  {Object.keys(statesList)?.map((item, index) => (
                    <option key={`option-${index}`} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  className={`form-select ${styles.inputSelect}`}
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="city"
                  value={filters.city}
                >
                  <option value="">Select city</option>
                  {statesList[filters.state]?.map((item, index) => (
                    <option key={`option-${index}`} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  className={`form-select ${styles.inputSelect}`}
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="collegeType"
                  value={filters.collegeType}
                >
                  <option value="">Select Type</option>
                  {collegeTypes.map((item, index) => (
                    <option key={`option-${index}`} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-3 d-flex gap-3">
              <button
                onClick={handleResetBtnClick}
                className={`${styles.resetButton} btn w-50 text-center`}
              >
                Reset
              </button>
              <button
                className={`${styles.applyButton} btn w-50 text-center`}
                onClick={handleApplyFilterBtnClick}
              >
                Apply filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div
          className={`${styles.breadcrumb} d-sm-flex align-items-center justify-content-between`}
        >
          <span>Home {`>`} Discover College for you</span>
          <p className="mb-0">
            {totalCount} Results | BAMS Colleges in{" "}
            {filters.state === "" ? "India" : filters.state}
          </p>
          <span>
            Showing Page {currentPage} of {totalPages}
          </span>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className={`${styles.collegesList} row`}>
            {colleges.length === 0 ? (
              <p>No college found</p>
            ) : (
              <>
                {colleges?.map((item, index) => (
                  <div
                    key={`college-card-${index}`}
                    className="col-lg-4 col-md-6 mb-4"
                  >
                    <div className={styles.collegeCard}>
                      <Image
                        src={item?.coverpic}
                        width="0"
                        height="0"
                        className={`${styles.collegeImage} w-100`}
                        sizes="100vw"
                        alt="brand-logo"
                        draggable={false}
                      />
                      <div
                        className={`${styles.collegeCardContent} p-4 d-flex align-items-start flex-column justify-content-between`}
                      >
                        <div>
                          <div className="d-flex align-items-center justify-content-start">
                            <span className={styles.tag}>BAMS</span>
                            <div
                              className={`${styles.collegeType} d-flex align-items-center justify-content-center`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="me-1"
                              >
                                <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                              </svg>
                              {item?.collegeType} College
                            </div>
                            <div
                              className={`${styles.reviews} ms-auto d-flex align-items-center flex-column justify-content-center`}
                            >
                              Rating
                              <div
                                className={`${styles.ratings} d-flex align-items-center justify-content-start`}
                              >
                                {[1, 2, 3, 4].map((index) => (
                                  <i
                                    className="fas fa-star"
                                    key={`start-${index}`}
                                  />
                                ))}
                                <i className="far fa-star" />
                              </div>
                            </div>
                          </div>
                          <div className={styles.title}>{item?.fullName}</div>
                          <div className={styles.description}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: GetFirstParaFromRichText(
                                  item?.description
                                )?.substring(0, 145),
                              }}
                            ></span>
                            {GetFirstParaFromRichText(item?.description)
                              .length > 145 && <>...</>}
                          </div>
                        </div>
                        <div
                          className={`${styles.buttonsContainer} d-flex align-items-center justify-content-start mt-3`}
                        >
                          <Link
                            href={`/colleges/${item?.slug || item?._id}`}
                            className={`${styles.primaryButton} btn`}
                          >
                            Read more
                          </Link>
                          <button className={`${styles.secondaryButton} btn`}>
                            Apply now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={totalCount}
                  pageSize={15}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollegeList;
