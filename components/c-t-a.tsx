import type { NextPage } from "next";
import styles from "./c-t-a.module.css";

const CTA: NextPage = () => {
  return (
    <section className={styles.cta}>
      <img
        className={styles.adobestock8930896311}
        loading="lazy"
        alt=""
        src="/adobestock-89308963-1-1-2@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.displayCasesParent}>
          <div className={styles.displayCases}>
            <h1 className={styles.getCookingIn}>Get cooking in style!</h1>
          </div>
          <div className={styles.accessibleConstructions}>
            <b className={styles.letsBringYour}>
              Let's bring your kitchen renovation project to life. Contact us
              today to begin your culinary journey!
            </b>
          </div>
        </div>
        <div className={styles.inlaysDecal}>
          <button className={styles.button}>
            <b className={styles.learnMore}>CALL US</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
