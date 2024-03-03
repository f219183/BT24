import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import LeftBox from "./left-box";
import styles from "./box-container.module.css";

const BoxContainer: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton3Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section className={styles.boxcontainer}>
      <LeftBox
        culinaryHavensForEveryTas="Culinary havens for every taste and style"
        onButton1Click={onButtonClick}
      />
      <LeftBox
        culinaryHavensForEveryTas="Transform your kitchen into a soulful sanctuary"
        propGap="10px 0px"
        onButton1Click={onButton2Click}
      />
      <div className={styles.leftBox}>
        <b className={styles.aSpaceWhere}>
          A space where every meal is a celebration of life and love
        </b>
        <div className={styles.leftBox1}>
          <button className={styles.button} onClick={onButton3Click}>
            <div className={styles.learnMore}>READ MORE</div>
          </button>
        </div>
      </div>
      <div className={styles.leftBox2}>
        <div className={styles.leftBox3}>
          <b className={styles.sustainableSolutionsWithContainer}>
            <p className={styles.sustainableSolutions}>Sustainable solutions</p>
            <p className={styles.withEnergyEfficientFeatures}>
              with energy-efficient features
            </p>
          </b>
        </div>
        <div className={styles.leftBox4}>
          <button className={styles.button1} onClick={onButton1Click}>
            <div className={styles.learnMore1}>READ MORE</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoxContainer;
