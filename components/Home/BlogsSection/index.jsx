import React from "react";
import styles from './BlogsSection.module.scss';
import CustomSlick from "@/components/common/CustomSlick";
import Image from "next/image";

const blogsData = [
  {
    id: 1,
    img: "/assets/images/home/testimonial/testimonial-1.webp",
    title:
      "Collegeveda was my guiding light throughout my MBA journey.",
    date: "February 13, 2022",
    tag: "Marketing"
    
  },
  {
    id: 2,
    img: "/assets/images/home/testimonial/testimonial-2.webp",
    title:
      "As a high school student, I was overwhelmed by the options for BBA programs.",
      date: "February 13, 2022",
      tag: "Marketing"
  },
  {
    id: 3,
    img: "/assets/images/home/testimonial/testimonial-3.webp",
    title:
      "Applying for PGDM programs was a complex process, but Collegeveda simplified it.",
      date: "February 13, 2022",
      tag: "Marketing"
  },
  {
    id: 2,
    img: "/assets/images/home/testimonial/testimonial-2.webp",
    title:
      "As a high school student, I was overwhelmed by the options for BBA programs.",
      date: "February 13, 2022",
      tag: "Marketing"
  },
  {
    id: 3,
    img: "/assets/images/home/testimonial/testimonial-3.webp",
    title:
      "Applying for PGDM programs was a complex process, but Collegeveda simplified it.",
      date: "February 13, 2022",
      tag: "Marketing"
  },
];

const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  gap: 40,
  arrows:false,
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
            src={data.img}
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
        <div className={`${styles.topContainer} d-flex align-items-center justify-content-between`}>
          <div className={styles.date}>
            {data.date}
          </div>
          <div className={styles.tag}>
            {data.tag}
          </div>
        </div>
        <div className={styles.title}>{data.title}</div>
        </div>
        <button className={`${styles.btn} btn d-flex align-items-center justify-content-start px-0`}>Read more <i className="fa fa-arrow-right ms-2"/></button>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  return <section>
  <div className="container-lg py-sm-5 my-5">
    <div className={styles.blogsSection}>
      <div className="section-title mb-2">Latest News & Blogs</div>
      <div className="section-subtitle">
      Explore the world of education through our news and blogs at College Veda.
      </div>
      <div className={`${styles.blogsList} mt-sm-5`}>
        <CustomSlick overrideConfiguration = {...slickSettings}>
          {blogsData.map((item, index) => (
            <BlogCard
              data={item}
              key={`testimonial-card-${index}`}
            />
          ))}
        </CustomSlick>
      </div>
    </div>
  </div>
</section>;
};

export default BlogsSection;
