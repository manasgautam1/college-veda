import React from "react";
import styles from "./AboutSection.module.scss";
import Image from "next/image";

const infoContent = [
  {
    icon: "/assets/images/home/about/about-icon-1.svg",
    title: "350",
    subtitle: "FINISHED WEBINARS",
  },
  {
    icon: "/assets/images/home/about/about-icon-2.svg",
    title: "100%",
    subtitle: "SATISFACTION RATE",
  },
  {
    icon: "/assets/images/home/about/about-icon-3.svg",
    title: "656",
    subtitle: "ONLINE SESSIONS",
  },
];

const AboutSection = () => {
  return (
    <section>
      <div className="container-lg">
        <div className={styles.aboutSection}>
          <div className="row align-items-center">
            <div className="col-sm-4 order-sm-1 order-2">
              <Image
                src="/assets/images/home/about/about-img.webp"
                width="0"
                height="0"
                className={`${styles.aboutImg} w-100 h-auto`}
                sizes="100vw"
                alt="about img"
                draggable={false}
              />
            </div>
            <div
              className={`${styles.aboutContent} col-sm-8  order-sm-2 order-1`}
            >
              <span className="text-uppercase">More about us</span>
              <div className={`${styles.title} mb-3`}>
                Unlocking Your Potential in Ayurvedic Medicine
              </div>
              <div className={styles.subtitle}>
                We are your one-stop solution for direct admission to top
                Bachelor of Ayurvedic Medicine and Surgery (BAMS) colleges in
                India, expert guidance, and comprehensive career counselling. We
                understand that choosing the right career path can be
                challenging. That's why we offer personalized career counseling
                services to help you discover your passions and identify the
                right BAMS specialization for you.
              </div>
              <div className={`${styles.infoContainer} row`}>
                {infoContent.map((item, index) => (
                  <div
                    key={`info-container-${index}`}
                    className={`${styles.info} col-4`}
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <Image
                          src={item.icon}
                          width="0"
                          height="0"
                          className={`${styles.infoImg} w-100 h-auto`}
                          sizes="100vw"
                          alt="about img"
                          draggable={false}
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className={styles.infoTitle}>{item.title}</div>
                        <div
                          className={`${styles.infoSubtitle} text-uppercase`}
                        >
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
