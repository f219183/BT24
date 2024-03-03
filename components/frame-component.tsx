import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  const router = useRouter();

  const onCustomCabinetryTextClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  return (
    <section className={styles.upper2Parent}>
      <div className={styles.upper2}>
        <h2
          className={styles.customCabinetry}
          onClick={onCustomCabinetryTextClick}
        >
          Custom cabinetry
        </h2>
        <h2 className={styles.hiddenRefrigerators}>Hidden refrigerators</h2>
      </div>
      <div className={styles.middleButton}>
        <div className={styles.conceptualModelPlanning}>
          <h2 className={styles.conceptualModelDesignContainer}>
            <p className={styles.conceptualModel}>Conceptual Model</p>
            <p className={styles.designPlanning}>{`Design & Planning`}</p>
          </h2>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.learnMore}>READ MORE</div>
          </button>
        </div>
      </div>
      <div className={styles.lower2}>
        <h2 className={styles.underCounterVacuumPortsContainer}>
          <p className={styles.underCounter}>Under-counter</p>
          <p className={styles.vacuumPorts}>vacuum ports</p>
        </h2>
        <h2 className={styles.automatedLighting}>Automated lighting</h2>
      </div>
    </section>
  );
};

export default FrameComponent;
