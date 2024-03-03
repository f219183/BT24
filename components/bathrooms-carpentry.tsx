import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bathrooms-carpentry.module.css";

const BathroomsCarpentry: NextPage = () => {
  const router = useRouter();

  const onPhotoImageClick = useCallback(() => {
    router.push("/bathrooms");
  }, [router]);

  return (
    <section className={styles.bathroomsCarpentry}>
      <div className={styles.text}>
        <div className={styles.carpentry}>Carpentry</div>
        <h1 className={styles.bathroomsByBuildingContainer}>
          <p className={styles.bathrooms}>Bathrooms</p>
          <p className={styles.byBuildingTradition}>by Building Tradition</p>
        </h1>
        <div className={styles.cTAName}>
          <button className={styles.button}>
            <div className={styles.learnMore}>LEARN MORE</div>
          </button>
        </div>
        <h1 className={styles.dreamDesignBathe}>Dream. Design. Bathe.</h1>
      </div>
      <img
        className={styles.photoIcon}
        loading="lazy"
        alt=""
        src="/photo@2x.png"
        onClick={onPhotoImageClick}
      />
    </section>
  );
};

export default BathroomsCarpentry;
