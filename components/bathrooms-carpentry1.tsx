import type { NextPage } from "next";
import styles from "./bathrooms-carpentry1.module.css";

const BathroomsCarpentry1: NextPage = () => {
  return (
    <section className={styles.bathroomsCarpentry}>
      <img
        className={styles.photoIcon}
        loading="lazy"
        alt=""
        src="/photo1@2x.png"
      />
      <div className={styles.text}>
        <h1 className={styles.closetSolutions}>Closet Solutions</h1>
        <div className={styles.tailoredToYour}>
          Tailored to your unique preferences and lifestyle, our custom
          solutions redefine the way you store and showcase your wardrobe. From
          maximizing space efficiency to integrating personalized storage
          features, our expert designers ensure every inch of your closet
          reflects functionality and elegance. Say goodbye to clutter and hello
          to effortless organization as our custom closets elevate your home
          with unparalleled style and sophistication.
        </div>
        <div className={styles.buttonFrame}>
          <button className={styles.button}>
            <div className={styles.learnMore}>LEARN MORE</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BathroomsCarpentry1;
