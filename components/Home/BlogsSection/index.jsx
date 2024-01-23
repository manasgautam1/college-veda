import React, { useEffect, useState } from "react";
import styles from "./BlogsSection.module.scss";
import CustomSlick from "@/components/common/CustomSlick";
import Image from "next/image";
import { getBlogs } from "@/api";
import Loader from "@/components/common/Loader";
import moment from "moment";
import Link from "next/link";

const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  gap: 40,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BlogCard = ({ data }) => {
  return (
    <div className="p-sm-2 py-4 px-sm-auto px-2 h-100">
      <div className={`${styles.blogCard}`}>
        <div className={styles.blogImg}>
          <Image
            src={data?.blogPic}
            width="0"
            height="0"
            className="w-100 h-auto"
            sizes="100vw"
            alt="brand-logo"
            draggable={false}
          />
        </div>
        <div className="p-4 d-flex align-items-start flex-column justify-content-between">
          <div>
            <div
              className={`${styles.topContainer} d-flex align-items-center justify-content-between`}
            >
              <div className={styles.date}>
                {moment(data?.createdAt)?.format("LLLL")}
              </div>
            </div>
            <div className={styles.title}>{data?.title}</div>
          </div>
          <Link
            href={`blogs/${data?.slug}`}
            className={`${styles.btn} btn d-flex align-items-center justify-content-start px-0`}
          >
            Read more <i className="fa fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  const [loading, setLoading] = useState(false);
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBlogsList();
  }, []);

  const getBlogsList = async () => {
    try {
      const res = await getBlogs();
      setBlogsList([...res?.data?.data]);
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <section>
      <div className="container-lg py-sm-5 my-5">
        <div className={styles.blogsSection}>
          <div className="section-title mb-2">Latest News & Blogs</div>
          <div className="section-subtitle">
            Explore the world of education through our news and blogs at College
            Veda.
          </div>
          <div className={`${styles.blogsList} mt-sm-5`}>
            {loading ? (
              <Loader />
            ) : (
              <CustomSlick overrideConfiguration={{ ...slickSettings }}>
                {blogsList?.map((item, index) => (
                  <BlogCard data={item} key={`testimonial-card-${index}`} />
                ))}
              </CustomSlick>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
