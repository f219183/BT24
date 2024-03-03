import type { NextPage } from "next";
import PhotoFrame from "../components/photo-frame";
import HonoringMessage from "../components/honoring-message";
import RenovationDetails from "../components/renovation-details";
import styles from "./addition-renovations.module.css";

const AdditionRenovations: NextPage = () => {
  return (
    <div className={styles.additionRenovations}>
      <PhotoFrame />
      <HonoringMessage />
      <section className={styles.cardSectionFrame}>
        <div className={styles.bathroomRenoText}>
          <h3 className={styles.carpentry}>Carpentry</h3>
          <h1
            className={styles.bathroomRenovations}
          >{`Bathroom Renovations `}</h1>
        </div>
      </section>
      <RenovationDetails />
      <footer className={styles.newCta}>
        <h1
          className={styles.readyToTransform}
        >{`Ready to transform your space? `}</h1>
        <h3 className={styles.withOurExpertise}>
          With our expertise and dedication, let's bring your home addition or
          renovation project to life. Contact us today to begin your journey!
        </h3>
        <button className={styles.button}>
          <div className={styles.learnMore}>CALL US</div>
        </button>
      </footer>
    </div>
  );
};

export default AdditionRenovations;
