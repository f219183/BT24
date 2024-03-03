import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./design-that-sizzles.module.css";

const DesignThatSizzles: NextPage = () => {
  const router = useRouter();

  const onAdobeStock8930896311Click = useCallback(() => {
    router.push("/kitchens");
  }, [router]);

  return (
    <section className={styles.designThatSizzles}>
      <div className={styles.designsThatSizzleKitchensWrapper}>
        <h1 className={styles.designsThatSizzleContainer}>
          <p className={styles.designsThatSizzle}>Designs that sizzle,</p>
          <p className={styles.kitchensThatShine}>Kitchens that shine</p>
        </h1>
      </div>
      <div className={styles.innovativeDesignParent}>
        <div className={styles.innovativeDesign}>
          <h3 className={styles.innovativeDesign1}>{`Innovative Design `}</h3>
          <div className={styles.embraceTheFuture}>
            Embrace the future of kitchen technology with our smart solutions,
            offering convenience, efficiency, and connectivity at your
            fingertips for a modern culinary experience.
          </div>
        </div>
        <div className={styles.customizedCreations}>
          <h3 className={styles.customizedCreations1}>Customized Creations</h3>
          <div className={styles.tailoredToYour}>
            Tailored to your unique lifestyle, our kitchens are meticulously
            designed to reflect your personal taste and meet your specific needs
          </div>
        </div>
        <div className={styles.timelessAppeal}>
          <h3 className={styles.timelessAppeal1}>Timeless Appeal</h3>
          <div className={styles.withAFocus}>
            With a focus on classic design elements and enduring aesthetics, our
            kitchens exude timeless charm, promising a space that remains
            stylish and relevant for years to come
          </div>
        </div>
      </div>
      <div className={styles.photoHolder}>
        <img
          className={styles.adobestock8930896311}
          loading="lazy"
          alt=""
          src="/adobestock-89308963-1-1@2x.png"
          onClick={onAdobeStock8930896311Click}
        />
      </div>
    </section>
  );
};

export default DesignThatSizzles;
