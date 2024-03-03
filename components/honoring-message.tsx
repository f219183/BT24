import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import CardWithoutButton1 from "./card-without-button1";
import styles from "./honoring-message.module.css";

const HonoringMessage: NextPage = () => {
  const router = useRouter();

  const onCardWithoutButton1Click = useCallback(() => {
    router.push("/kitchens");
  }, [router]);

  return (
    <section className={styles.honoringMessage}>
      <div className={styles.honoringTraditionEmbracingI}>
        <div className={styles.titleSection2}>
          <h1
            className={styles.honoringTraditionEmbracing}
          >{`Honoring tradition, embracing innovation `}</h1>
        </div>
        <div className={styles.cardsSections2}>
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-4@2x.png"
            design="Sunroom Extentions"
            aVirtualCanvasForYourDrea="Looking to add on to your home to increase productivity zones or perhaps to create an outdoor oasis? Our custom home additions are the perfect solution for you"
          />
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-5@2x.png"
            design="Kitchen Renovations "
            aVirtualCanvasForYourDrea="Create a space where cooking and gathering become a joyous experience for the whole family"
            onCardWithoutButton1Click={onCardWithoutButton1Click}
          />
          <CardWithoutButton1
            photoPlaceholder="/photo-placeholder-6@2x.png"
            design="House Additions"
            aVirtualCanvasForYourDrea="Extend the comfort and longevity of your cherished home with a tailored addition, designed to meet your current and future needs"
          />
        </div>
      </div>
    </section>
  );
};

export default HonoringMessage;
