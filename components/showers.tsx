import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./showers.module.css";

const Showers: NextPage = () => {
  const router = useRouter();

  const onPhotoImageClick = useCallback(() => {
    router.push("/bathrooms");
  }, [router]);

  return (
    <section className={styles.showers}>
      <img
        className={styles.photoIcon}
        alt=""
        src="/photo-1@2x.png"
        onClick={onPhotoImageClick}
      />
      <div className={styles.text}>
        <div className={styles.textFirst}>
          <h1 className={styles.steamRoomShowers}>Steam Room Showers</h1>
          <div className={styles.indulgeInThe}>
            Indulge in the Ultimate Relaxation
          </div>
        </div>
        <div className={styles.textSecond}>
          <h1 className={styles.accessibleWashrooms}>Accessible washrooms</h1>
          <div className={styles.inclusiveDesignsFor}>
            Inclusive Designs for Every Need
          </div>
        </div>
        <div className={styles.textThird}>
          <h1 className={styles.bathroomAdditions}>Bathroom additions</h1>
          <div className={styles.expandYourComfort}>
            Expand Your Comfort with Seamless Additions
          </div>
        </div>
        <div className={styles.textFourth}>
          <h1 className={styles.sustainableSolutions}>Sustainable solutions</h1>
          <div
            className={styles.energyEfficiency}
          >{`Energy Efficiency & Eco-Friendliness`}</div>
        </div>
      </div>
    </section>
  );
};

export default Showers;
