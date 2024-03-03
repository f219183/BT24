import type { NextPage } from "next";
import styles from "./bathrooms-carpentry2.module.css";

const BathroomsCarpentry2: NextPage = () => {
  return (
    <section className={styles.bathroomsCarpentry}>
      <div className={styles.text}>
        <div className={styles.headAndPara}>
          <h1 className={styles.cabinetry}>Cabinetry</h1>
          <div className={styles.experienceTheEpitomeContainer}>
            <p className={styles.experienceTheEpitome}>
              Experience the epitome of personalized luxury with our custom
              cabinetry,
            </p>
            <p
              className={styles.meticulouslyCraftedTo}
            >{`meticulously crafted to complement your unique style and elevate the functionality
of your living spaces. Whether you desire sleek modern designs or timeless classics, our custom cabinetry solutions offer unparalleled versatility to suit your every need. `}</p>
          </div>
        </div>
        <div className={styles.lowerPoints}>
          <b className={styles.materialSelectionsAndContainer}>
            <ul className={styles.materialSelectionsAndFinish}>
              <li>{`Material Selections and Finishes `}</li>
            </ul>
          </b>
          <b className={styles.collaborationWithDesignContainer}>
            <ul className={styles.collaborationWithDesignExpe}>
              <li>Collaboration with Design Experts</li>
            </ul>
          </b>
          <b className={styles.sustainableSolutions}>
            <ul className={styles.sustainableSolutions1}>
              <li>Sustainable Solutions</li>
            </ul>
          </b>
          <b className={styles.integrationWithExistingContainer}>
            <ul className={styles.integrationWithExistingDeco}>
              <li>Integration with Existing Decor</li>
            </ul>
          </b>
          <b className={styles.builtInLightingAndContainer}>
            <ul className={styles.builtInLightingAndAccessor}>
              <li>Built-In Lighting and Accessories</li>
            </ul>
          </b>
        </div>
      </div>
      <img
        className={styles.photoIcon}
        loading="lazy"
        alt=""
        src="/photo1@2x.png"
      />
    </section>
  );
};

export default BathroomsCarpentry2;
