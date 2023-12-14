import React from "react";
import styles from "./CounterSection.module.scss";

const CounterSection = () => {
  return (
    <section className={`${styles.counterSection} text-center`}>
      <div className={styles.heading}>
        Our Many years of Experience in Numbers
      </div>
      <div
        className={`${styles.counters} d-flex align-items-center justify-content-center`}
      >
        <div className={styles.counter}>
          <div className={styles.count}>1386+</div>
          <div className={styles.subtitle}>Success Stories</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.count}>620+</div>
          <div className={styles.subtitle}>Success Stories</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.count}>530+</div>
          <div className={styles.subtitle}>Success Stories</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.count}>2000+</div>
          <div className={styles.subtitle}>Success Stories</div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
