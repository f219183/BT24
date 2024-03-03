import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./renovation-details.module.css";

const RenovationDetails: NextPage = () => {
  const router = useRouter();

  const onAccessibleWashroomsTextClick = useCallback(() => {
    router.push("/accessible-construction");
  }, [router]);

  return (
    <section className={styles.renovationDetails}>
      <div className={styles.photo}>
        <img
          className={styles.adobestock56586049611}
          loading="lazy"
          alt=""
          src="/adobestock-565860496-1-1@2x.png"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.textSecond}>
          <div className={styles.accessibleWashroomsText}>
            <h1
              className={styles.accessibleWashrooms}
              onClick={onAccessibleWashroomsTextClick}
            >
              Accessible washrooms
            </h1>
            <div className={styles.prioritizeInclusivityAnd}>
              {" "}
              – Prioritize inclusivity and convenience with our expertly crafted
              accessible washrooms, designed to ensure comfort and ease of use
              for all.
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.learnMore}>LEARN MORE</div>
            </button>
          </div>
        </div>
        <div className={styles.textThird}>
          <h1 className={styles.luxuriousUpgrades}>Luxurious Upgrades</h1>
          <div className={styles.indulgeInA}>
            {" "}
            – Indulge in a spa-like retreat with our luxurious bathroom
            renovations, where modern amenities and elegant design come together
            to elevate your daily routine.
          </div>
        </div>
        <div className={styles.textFourth}>
          <h1 className={styles.functionalElegance}>Functional Elegance</h1>
          <div className={styles.thePerfectBlend}>
            {" "}
            –The perfect blend of functionality and style with our meticulously
            planned bathroom renovations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationDetails;
