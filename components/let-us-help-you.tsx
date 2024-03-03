import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./let-us-help-you.module.css";

const LetUsHelpYou: NextPage = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='materialContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.letUsHelpYou} data-scroll-to="letUsHelpYou">
      <h1 className={styles.letUsHelp}>
        Let us help you create the perfect patio for relaxing, entertaining, and
        making memories with family and friends.
      </h1>
      <div className={styles.decksPatiosParent}>
        <div className={styles.decksPatios}>
          <div className={styles.yourOutdoorHavenFrame}>
            <div className={styles.patiosYourOutdoor}>
              PATIOS: YOUR OUTDOOR HAVEN
            </div>
            <div className={styles.consultationCallToAction}>
              <h1 className={styles.readyToTransform}>
                Ready to transform your outdoor space?
              </h1>
              <div className={styles.connectWithUs}>
                Connect with us today to schedule a consultation with our team
                and start planning your dream patio. Whether you're looking to
                create a cozy retreat for quiet evenings at home or an expansive
                entertainment area for hosting family and friends, we're here to
                help you bring your vision to life. Let's make your outdoor
                haven a reality!
              </div>
            </div>
            <div className={styles.learnMoreButton}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.learnMore}>READ MORE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            alt=""
            src="/photo1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default LetUsHelpYou;
