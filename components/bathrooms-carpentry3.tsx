import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./bathrooms-carpentry3.module.css";

const BathroomsCarpentry3: NextPage = () => {
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeAccessibilityTaxCredit']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.bathroomsCarpentry}>
      <div className={styles.text}>
        <div className={styles.carpentry}>Carpentry</div>
        <b className={styles.bathroomsByBuildingContainer}>
          <p className={styles.bathrooms}>Bathrooms</p>
          <p className={styles.byBuildingTradition}>by Building Tradition</p>
        </b>
        <div className={styles.button}>
          <div className={styles.button1} onClick={onButtonContainerClick}>
            <b className={styles.learnMore}>LEARN MORE</b>
          </div>
        </div>
        <b className={styles.dreamDesignBathe}>Dream. Design. Bathe.</b>
      </div>
      <div className={styles.photo}>
        <img
          className={styles.adobestock47148588611}
          alt=""
          src="/adobestock-471485886-1-1@2x.png"
        />
      </div>
    </section>
  );
};

export default BathroomsCarpentry3;
