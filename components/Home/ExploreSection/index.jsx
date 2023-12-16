import React from "react";
import styles from "./ExploreSection.module.scss";
import CustomSlick from "@/components/common/CustomSlick";
import Image from "next/image";
import Link from "next/link";

const slickSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  gap: 40,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.25,
      },
    },
  ],
};

const popularStates = [
  {
    id: 1,
    name: "Delhi",
    imageUrl: "/assets/images/home/states/delhi.webp",
  },
  {
    id: 2,
    name: "Uttar Pradesh",
    imageUrl: "/assets/images/home/states/uttar-pradesh.webp",
  },
  {
    id: 3,
    name: "Punjab",
    imageUrl: "/assets/images/home/states/punjab.webp",
  },
  {
    id: 4,
    name: "Haryana",
    imageUrl: "/assets/images/home/states/haryana.webp",
  },
  {
    id: 5,
    name: "Uttarakhand",
    imageUrl: "/assets/images/home/states/uttrakhand.webp",
  },
];

const ExploreStatesCard = ({ data }) => {
  return (
    <div
      className={`${styles.exportStateCard} d-flex flex-column align-items-center justify-content-center`}
    >
      <div className={styles.img}>
        <Image
          src={data.imageUrl}
          width="0"
          height="0"
          className="w-100 h-auto"
          sizes="100vw"
          alt="brand-logo"
          draggable={false}
        />
      </div>
      <div className={styles.title}>{data.name}</div>
      <Link
        href={`/colleges?state=${data.name}`}
        className={`${styles.exploreBtn} btn`}
      >
        Explore College <i className="fa fa-arrow-right ms-1" />
      </Link>
    </div>
  );
};

const ExploreSection = () => {
  return (
    <section>
      <div className="container-lg py-sm-5 my-5">
        <div className={styles.exploreSection}>
          <div className="section-title mb-2">Explore States</div>
          <div className="section-subtitle">
            Each region presents a unique blend of academic excellence, cultural
            heritage, and specialized learning environments.
          </div>
          <div className={`${styles.collegesList} mt-4`}>
            <CustomSlick overrideConfiguration={{ ...slickSettings }}>
              {popularStates?.map((item, index) => (
                <ExploreStatesCard
                  data={item}
                  key={`testimonial-card-${index}`}
                />
              ))}
            </CustomSlick>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
