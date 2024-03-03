import type { NextPage } from "next";
import styles from "./right-box.module.css";

const RightBox: NextPage = () => {
  return (
    <section className={styles.rightBox}>
      <div className={styles.boxcontainer}>
        <div className={styles.leftBox}>
          <h2 className={styles.tailoredDesignProcess}>
            Tailored Design Process
          </h2>
          <div className={styles.frameStayInformedAndInvolv}>
            <div className={styles.everyHomeIs}>
              Every home is a reflection of your unique taste and lifestyle.
            </div>
          </div>
        </div>
        <div className={styles.middleBox}>
          <h2 className={styles.expertCraftsmanship}>Expert Craftsmanship</h2>
          <div className={styles.withDecadesOfExperienceOuWrapper}>
            <div className={styles.withDecadesOf}>
              With decades of experience, our builders bring unmatched skill to
              every project.
            </div>
          </div>
        </div>
        <div className={styles.rightBox1}>
          <h2 className={styles.transparentCommunication}>
            Transparent Communication
          </h2>
          <div className={styles.stayInformedAndInvolvedAtWrapper}>
            <div className={styles.stayInformedAnd}>
              Stay informed and involved at every stage of your home's
              development.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightBox;
