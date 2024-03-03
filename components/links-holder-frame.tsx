import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./links-holder-frame.module.css";

const LinksHolderFrame: NextPage = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='letUsHelpYou']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.linksHolderFrame}>
      <div className={styles.btlogolongRectangle}>
        <div className={styles.footerBottomFrame}>
          <div className={styles.mainContentFrame}>
            <div className={styles.carpentryInfo}>
              <div className={styles.carpentry}>CARPENTRY</div>
              <h1 className={styles.decksPatios}>{`DECKS & PATIOS`}</h1>
              <div className={styles.upperFrame}>
                <div className={styles.atBuildingTraditionContainer}>
                  <p className={styles.atBuildingTradition}>
                    At Building Tradition, we specialize in creating stunning
                    decks that seamlessly blend with your home's architecture
                    while providing the perfect space for relaxation and
                    entertainment. Our deck construction services are tailored
                    to your needs, ensuring a result that exceeds your
                    expectations.
                  </p>
                  <p className={styles.weUnderstandThat}>
                    We understand that your patio is more than just an outdoor
                    space – it's an extension of your home where memories are
                    made. That's why we offer expert patio design and
                    installation services to help you create the perfect outdoor
                    retreat.
                  </p>
                </div>
                <div className={styles.navBarButton}>
                  <button className={styles.button} onClick={onButtonClick}>
                    <div className={styles.learnMore}>READ MORE</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.lowerPart}>
              <div className={styles.customDeckDesigns}>
                CUSTOM DECK DESIGNS
              </div>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            alt=""
            src="/adobestock-471485886-1-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.createYourPerfectPatio}>
        <h1 className={styles.createYourPerfect}>
          Create your perfect outdoor retreat
        </h1>
      </div>
    </section>
  );
};

export default LinksHolderFrame;
