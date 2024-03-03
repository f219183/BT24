import type { NextPage } from "next";
import LinksHolderFrame from "../components/links-holder-frame";
import LetUsHelpYou from "../components/let-us-help-you";
import Material from "../components/material";
import styles from "./d-e-c-k-s-p-a-t-i-o-s.module.css";

const DECKSPATIOS: NextPage = () => {
  return (
    <div className={styles.decksPatios}>
      <LinksHolderFrame />
      <section className={styles.renovationDetails}>
        <div className={styles.photo}>
          <img
            className={styles.adobestock56586049611}
            loading="lazy"
            alt=""
            src="/adobestock-565860496-1-11@2x.png"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.textSecond}>
            <h3 className={styles.tailoredPatioSolutions}>
              Tailored Patio Solutions
            </h3>
            <div className={styles.fromCozyCorners}>
              From cozy corners to spacious entertaining areas, choose from a
              variety of materials and finishes to suit your style.
            </div>
          </div>
          <div className={styles.textSecond1}>
            <h3
              className={styles.qualityMaterials}
            >{`Quality Materials & Craftsmanship`}</h3>
            <div className={styles.usingPremiumMaterials}>
              Using premium materials, our skilled craftsmen deliver exceptional
              results that stand the test of time.
            </div>
          </div>
          <div className={styles.textSecond2}>
            <h3 className={styles.builtInFeatures}>Built-In Features</h3>
            <div className={styles.enhanceFunctionalityAnd}>
              Enhance functionality and beauty with custom seating, planters,
              lighting, and much more.
            </div>
          </div>
          <div className={styles.textSecond3}>
            <h3 className={styles.customFeatures}>{`Custom Features `}</h3>
            <div className={styles.elevateYourPatio}>
              Elevate your patio with fire pits, outdoor kitchens, pergolas, and
              more, creating an outdoor space as unique as you are.
            </div>
          </div>
        </div>
      </section>
      <LetUsHelpYou />
      <Material />
      <section className={styles.qualityCraftsmanshipFrame}>
        <h1 className={styles.qualityCraftsmanshipLasting}>
          Quality Craftsmanship, Lasting Results
        </h1>
        <footer className={styles.atBuildingTradition}>
          At Building Tradition we take pride in our attention to detail and
          commitment to quality craftsmanship. Using only the highest quality
          materials and industry-leading techniques, our skilled artisans will
          bring your patio vision to life with precision and care. The result? A
          stunning outdoor space that you'll enjoy for years to come.
        </footer>
      </section>
    </div>
  );
};

export default DECKSPATIOS;
