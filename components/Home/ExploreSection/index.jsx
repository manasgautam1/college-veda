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
  arrows:false,
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

const popularStates= [
  {
    id: 1,
    name: "Delhi",
  },
  {
    id: 2,
    name: "Uttar Pradesh"
  }, 
  {
    id: 3,
    name: "Maharashtra"
  },
  {
    id: 4,
    name: "Gujarat",
  },
  {
    id: 5,
    name: "Uttarakhand"
  },
  {
    id: 6,
    name: "Punjab"
  }
]

const ExploreStatesCard = ({data}) => {
  return (
    <div className={`${styles.exportStateCard} d-flex flex-column align-items-center justify-content-center`}>
      <div className={styles.img}>
      <Image
        src="/assets/images/home/colleges/college-cover.webp"
        width="0"
        height="0"
        className="w-100 h-auto"
        sizes="100vw"
        alt="brand-logo"
        draggable={false}
      />
      </div>
      <div className={styles.title}>
        {data.name}
      </div>
      <Link href="/colleges" className={`${styles.exploreBtn} btn`}>Explore College <i className="fa fa-arrow-right ms-1" /></Link>
    </div>
  )
}

const ExploreSection = () => {
  return (
    <section>
      <div className="container-lg py-sm-5 my-5">
        <div className={styles.exploreSection}>
          <div className="section-title mb-2">Explore States</div>
          <div className="section-subtitle">
          Each region presents a unique blend of academic excellence, cultural heritage, and specialized learning environments.
          </div>
          <div className={`${styles.collegesList} mt-4`}>
          <CustomSlick overrideConfiguration = {...slickSettings}>
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
