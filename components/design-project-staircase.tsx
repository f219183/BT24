import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./design-project-staircase.module.css";

const DesignProjectStaircase: NextPage = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='personlizedServices']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.designProjectStaircase}>
      <div className={styles.text}>
        <div className={styles.carpentry}>CARPENTRY</div>
        <div className={styles.middleButtonConceptualModel}>
          <h2 className={styles.kitchens}>Kitchens</h2>
          <b className={styles.byBuildingTradition}>by Building Tradition</b>
          <div className={styles.atBuildingTradition}>
            At Building Tradition, we understand that the kitchen is the heart
            of the home, where cherished memories are made and culinary
            creations come to life. Our team of skilled craftsmen and designers
            work tirelessly to bring your vision to reality, whether you seek a
            modern, sleek aesthetic or a timeless, traditional charm. From
            custom cabinetry to state-of-the-art appliances, we meticulously
            craft every detail to ensure both functionality and beauty. With
            Building Tradition, your dream kitchen is within reach, promising
            not only a space of culinary inspiration but also a gathering place
            for family and friends to create lasting memories.
          </div>
        </div>
        <div className={styles.carpentry1}>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.learnMore}>READ MORE</div>
          </button>
        </div>
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

export default DesignProjectStaircase;
