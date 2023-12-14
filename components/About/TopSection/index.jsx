import React from "react";
import styles from "./TopSetion.module.scss";

const TopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className="container-lg py-5">
        <div className={`${styles.title} mb-2`}>
          College Veda: Your Trusted Guide to a Successful Career in Ayurvedic
          Medicine
        </div>
        <div className={styles.content}>
          <p>
            Navigating the path to a fulfilling career in medicine can be
            challenging, but you don't have to go it alone. At College Veda, we
            understand the complexities of securing admission into top BAMS
            colleges in India, and we're here to simplify the process for you.
            Our dedicated team of experienced admission consultants and career
            counselors is passionate about helping students achieve their
            academic and professional goals. We offer personalized support,
            tailored advice, and comprehensive guidance every step of the way.
          </p>
          <p>
            What sets us apart?
            <ul>
              <li>
                Personalized Support: We take the time to understand your
                individual aspirations, strengths, and interests to create a
                customized plan for success.
              </li>
              <li>
                Extensive Expertise: Our team possesses in-depth knowledge of
                BAMS colleges, admission procedures, and career opportunities in
                medicine.
              </li>
              <li>
                Unwavering Integrity: We prioritize ethical practices and
                provide honest, accurate information to ensure you make informed
                decisions.
              </li>
              <li>
                Proven Track Record: With years of experience and countless
                success stories, College Veda has established itself as a
                trusted name in the field.
              </li>
            </ul>
          </p>
          <p>
            Join us at College Veda and embark on a transformative journey
            towards your dream career in medicine. We are here to empower you,
            guide you, and witness your success.
          </p>
          <p className="mb-0">
            Ready to unlock your potential? Reach out to us today and let
            College Veda be your guiding light.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
