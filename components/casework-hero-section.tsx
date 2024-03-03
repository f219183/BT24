import type { NextPage } from "next";
import styles from "./casework-hero-section.module.css";

const CaseworkHeroSection: NextPage = () => {
  return (
    <section className={styles.caseworkHeroSection}>
      <div className={styles.horizontalLineDivider}>
        <div className={styles.horizontalLine}>
          <img className={styles.horizontalLineIcon} loading="lazy" alt="" />
        </div>
        <div className={styles.customCasework}>
          <b className={styles.superiorCraftsmanship}>SUPERIOR CRAFTSMANSHIP</b>
          <div className={styles.cabinetsClosetsCaseworkWrapper}>
            <h1 className={styles.cabinetsClosetsCaseworkContainer}>
              <p className={styles.cabinetsClosets}>Cabinets, Closets,</p>
              <p className={styles.caseworkMore}>{`Casework & More
`}</p>
              <p className={styles.storageSolutions}>Storage Solutions</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseworkHeroSection;
