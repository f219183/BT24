import type { NextPage } from "next";
import DesignProjectStaircase from "../components/design-project-staircase";
import HiddenRefrigeratorsCustomCa from "../components/hidden-refrigerators-custom-ca";
import BoxContainer from "../components/box-container";
import FrameComponent from "../components/frame-component";
import CTA from "../components/c-t-a";
import styles from "./kitchens.module.css";

const Kitchens: NextPage = () => {
  return (
    <div className={styles.kitchens}>
      <DesignProjectStaircase />
      <HiddenRefrigeratorsCustomCa />
      <section className={styles.text}>
        <h2 className={styles.igniteYourPassion}>
          Ignite your passion for cooking and creativity
        </h2>
      </section>
      <BoxContainer />
      <section
        className={styles.personlizedServices}
        data-scroll-to="personlizedServices"
      >
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            alt=""
            src="/adobestock-471485886-1-1@2x.png"
          />
        </div>
        <div className={styles.text1}>
          <div className={styles.commitmentGuaranteed}>
            COMMITMENT GUARANTEED
          </div>
          <h2 className={styles.personalizedService}>Personalized Service</h2>
          <div className={styles.fromInitialConsultation}>
            From initial consultation to final installation, our dedicated team
            provides personalized attention and expertise, guiding you through
            every step of the journey to achieve your dream kitchen vision.
          </div>
        </div>
      </section>
      <section className={styles.footerBottom}>
        <div className={styles.text2}>
          <h2 className={styles.withOurGuaranteed}>
            With our guaranteed service contract, and our quality-ensured
            warranty; you and your family are protected.
          </h2>
        </div>
        <div className={styles.adobeStockFrame}>
          <img
            className={styles.adobestock8930896311}
            loading="lazy"
            alt=""
            src="/adobestock-89308963-1-1-1@2x.png"
          />
        </div>
      </section>
      <FrameComponent />
      <CTA />
    </div>
  );
};

export default Kitchens;
