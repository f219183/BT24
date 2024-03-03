import type { NextPage } from "next";
import styles from "./photo-frame.module.css";

const PhotoFrame: NextPage = () => {
  return (
    <section className={styles.photoFrame}>
      <div className={styles.footerTextSection}>
        <div className={styles.titleSection}>
          <div className={styles.cardSection}>
            <h3 className={styles.carpentry}>Carpentry</h3>
            <h1 className={styles.additionRenovations}>{`Addition &
Renovations`}</h1>
            <div className={styles.craftingYourDream}>
              Crafting your dream home from concept to completion with expert
              precision and attention to detail
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.learnMore}>LEARN MORE</div>
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

export default PhotoFrame;
