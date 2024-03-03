import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ascent-to-elegance-where-sta.module.css";

const AscentToEleganceWhereSta: NextPage = () => {
  const router = useRouter();

  const onStaircaseByDesignClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <section className={styles.ascentToEleganceWhereSta}>
      <div className={styles.title}>
        <h1 className={styles.ascentToElegance}>
          Ascent to Elegance : Where Staircases Meet Artistry
        </h1>
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <div className={styles.buildingService}>Building Service</div>
          <h1
            className={styles.staircaseByDesign}
            onClick={onStaircaseByDesignClick}
          >
            Staircase by Design
          </h1>
          <div className={styles.collaborateWithBuildingContainer}>
            <p className={styles.collaborateWithBuilding}>
              Collaborate with Building Tradition, where partnering with us
              means more than just innovative staircase solutions
            </p>
            <p className={styles.itsACommitment}>
              – it's a commitment to crafting your vision.
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.learnMore}>LEARN MORE</div>
            </button>
          </div>
        </div>
        <img
          className={styles.photoHolderIcon}
          loading="lazy"
          alt=""
          src="/photo-holder@2x.png"
        />
      </div>
    </section>
  );
};

export default AscentToEleganceWhereSta;
