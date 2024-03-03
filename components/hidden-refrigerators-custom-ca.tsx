import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hidden-refrigerators-custom-ca.module.css";

const HiddenRefrigeratorsCustomCa: NextPage = () => {
  const router = useRouter();

  const onInnovativeDesignTextClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <section className={styles.hiddenRefrigeratorsCustomCa}>
      <div className={styles.automatedLightingConceptual}>
        <div className={styles.text}>
          <h2 className={styles.designsThatSizzle}>
            Designs that sizzle, Kitchens that shine
          </h2>
        </div>
        <div className={styles.boxcontainer}>
          <div className={styles.leftBox}>
            <b
              className={styles.innovativeDesign}
              onClick={onInnovativeDesignTextClick}
            >{`Innovative Design `}</b>
            <div className={styles.embraceTheFuture}>
              Embrace the future of kitchen technology with our smart solutions,
              offering convenience, efficiency, and connectivity at your
              fingertips for a modern culinary experience.
            </div>
          </div>
          <div className={styles.middleBox}>
            <b className={styles.customizedCreations}>Customized Creations</b>
            <div className={styles.tailoredToYour}>
              Tailored to your unique lifestyle, our kitchens are meticulously
              designed to reflect your personal taste and meet your specific
              needs
            </div>
          </div>
          <div className={styles.rightBox}>
            <b className={styles.timelessAppeal}>Timeless Appeal</b>
            <div className={styles.withAFocus}>
              With a focus on classic design elements and enduring aesthetics,
              our kitchens exude timeless charm, promising a space that remains
              stylish and relevant for years to come
            </div>
          </div>
        </div>
      </div>
      <div className={styles.photo}>
        <img
          className={styles.adobestock8930896311}
          loading="lazy"
          alt=""
          src="/adobestock-89308963-1-11@2x.png"
        />
      </div>
    </section>
  );
};

export default HiddenRefrigeratorsCustomCa;
