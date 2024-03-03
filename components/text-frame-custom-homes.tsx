import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./text-frame-custom-homes.module.css";

const TextFrameCustomHomes: NextPage = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='theBuildingTraditionProcess']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.textFrameCustomHomes}>
      <div className={styles.carpentry}>
        <div className={styles.carpentry1}>CARPENTRY</div>
        <div className={styles.photoHolderFrame}>
          <h2 className={styles.customHomes}>Custom Homes</h2>
          <div className={styles.navBarUpperPart}>
            <div
              className={styles.atBuildingTradition}
            >{`At Building Tradition, we elevate the art of custom home creation, meticulously turning your dreams into tangible realities. Our approach is deeply collaborative, ensuring that every detail of your vision is understood and brought to life with unparalleled precision and care. Whether it’s transforming an existing space or constructing a bespoke dream home from the foundation up, our expertise is your guarantee. With us, you're not just building a house; you're crafting your future in a space designed for living beautifully. `}</div>
            <div className={styles.currentPageLink}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.learnMore}>LEARN MORE</div>
              </button>
            </div>
          </div>
        </div>
        <b className={styles.chooseBuildingTradition}>
          Choose Building Tradition, where your dream home becomes an exquisite
          reality.
        </b>
      </div>
      <div className={styles.photo}>
        <img
          className={styles.adobestock47148588611}
          alt=""
          src="/adobestock-471485886-1-1@2x.png"
        />
      </div>
    </section>
  );
};

export default TextFrameCustomHomes;
