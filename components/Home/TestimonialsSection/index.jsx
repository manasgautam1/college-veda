import React from "react";
import styles from "./TestimonialsSection.module.scss";
import CustomSlick from "@/components/common/CustomSlick";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    img: "/assets/images/home/testimonial/testimonial-1.webp",
    review:
      "Collegeveda was my guiding light throughout my MBA journey. Their personalized recommendations led me to the perfect program that aligned with my goals. The application assistance and expert advice were invaluable. Thanks to Collegeveda, I'm now booming in my dream job.",
    name: "Rahul Singh",
    title: "MBA Graduate",
  },
  {
    id: 2,
    img: "/assets/images/home/testimonial/testimonial-2.webp",
    review:
      "As a high school student, I was overwhelmed by the options for BBA programs. Collegeveda's platform made it easy to explore and compare different universities. The user reviews helped me make an informed decision, and their scholarship information was a game-changer.",
    name: "Riya Aggarwal",
    title: "BBA Student",
  },
  {
    id: 3,
    img: "/assets/images/home/testimonial/testimonial-3.webp",
    review:
      "Applying for PGDM programs was a complex process, but Collegeveda simplified it. Their regular updates on deadlines and admission tests kept me on track. The expert guidance I received boosted my confidence during interviews. I'm grateful for Collegeveda's support",
    name: "Abhishek Sharma",
    title: "PGDM Applicant",
  },
  {
    id: 1,
    img: "/assets/images/home/testimonial/testimonial-1.webp",
    review:
      "Collegeveda was my guiding light throughout my MBA journey. Their personalized recommendations led me to the perfect program that aligned with my goals. The application assistance and expert advice were invaluable. Thanks to Collegeveda, I'm now booming in my dream job.",
    name: "Rahul Singh",
    title: "MBA Graduate",
  },
  {
    id: 2,
    img: "/assets/images/home/testimonial/testimonial-2.webp",
    review:
      "As a high school student, I was overwhelmed by the options for BBA programs. Collegeveda's platform made it easy to explore and compare different universities. The user reviews helped me make an informed decision, and their scholarship information was a game-changer.",
    name: "Riya Aggarwal",
    title: "BBA Student",
  },
  {
    id: 3,
    img: "/assets/images/home/testimonial/testimonial-3.webp",
    review:
      "Applying for PGDM programs was a complex process, but Collegeveda simplified it. Their regular updates on deadlines and admission tests kept me on track. The expert guidance I received boosted my confidence during interviews. I'm grateful for Collegeveda's support",
    name: "Abhishek Sharma",
    title: "PGDM Applicant",
  },
];

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

const TestimonialCard = ({ data }) => {
  return (
    <div className={`${styles.testimonialImg} px-sm-4 py-4 h-100`}>
      <div className={`${styles.testimonialCard} text-center`}>
        <div className={styles.testimonialImg}>
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
        <div
          className={`${styles.ratings} d-flex align-items-center justify-content-center`}
        >
          {[1, 2, 3, 4].map((index) => (
            <i className="fas fa-star" key={`start-${index}`} />
          ))}
          <i className="far fa-star" />
        </div>
        <div className={styles.description}>{data.review}</div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.title}>{data.title}</div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section>
      <div className="container-lg py-sm-5 my-5">
        <div className={styles.testimonialsSection}>
          <div className="section-title mb-2">What Our Students Says?</div>
          <div className="section-subtitle">
            At College Veda, our commitment to excellence is reflected in the
            success stories of our Students.
          </div>
          <div className={`${styles.testimonialsList} mt-sm-5`}>
            <CustomSlick overrideConfiguration={{ ...slickSettings }}>
              {testimonialData.map((item, index) => (
                <TestimonialCard
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

export default TestimonialsSection;
