import type { NextPage } from "next";
import CardWithoutButton from "./card-without-button";
import styles from "./honoring-tradition-embracing-i.module.css";

const HonoringTraditionEmbracingI: NextPage = () => {
  return (
    <section className={styles.honoringTraditionEmbracingI}>
      <div className={styles.titleSection2}>
        <h1
          className={styles.honoringTraditionEmbracing}
        >{`Honoring tradition, embracing innovation `}</h1>
      </div>
      <div className={styles.cardsSections2}>
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-4@2x.png"
          design="Sunroom Extentions"
          aVirtualCanvasForYourDrea="Looking to add on to your home to increase productivity zones or perhaps to create an outdoor oasis? Our custom home additions are the perfect solution for you"
        />
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-5@2x.png"
          design="Kitchen Renovations "
          aVirtualCanvasForYourDrea="Create a space where cooking and gathering become a joyous experience for the whole family"
        />
        <CardWithoutButton
          photoPlaceholder="/photo-placeholder-6@2x.png"
          design="House Additions"
          aVirtualCanvasForYourDrea="Extend the comfort and longevity of your cherished home with a tailored addition, designed to meet your current and future needs"
        />
      </div>
      <div className={styles.readMoreButton}>
        <button className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </button>
      </div>
    </section>
  );
};

export default HonoringTraditionEmbracingI;