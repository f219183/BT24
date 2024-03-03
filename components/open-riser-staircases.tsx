import type { NextPage } from "next";
import styles from "./open-riser-staircases.module.css";

export type OpenRiserStaircasesType = {
  frame25?: string;
  openRiserStaircases?: string;
  elevateYourHomeWithOurExq?: string;
};

const OpenRiserStaircases: NextPage<OpenRiserStaircasesType> = ({
  frame25,
  openRiserStaircases,
  elevateYourHomeWithOurExq,
}) => {
  return (
    <section className={styles.openRiserStaircases}>
      <img
        className={styles.openRiserStaircasesChild}
        loading="lazy"
        alt=""
        src={frame25}
      />
      <div className={styles.frameGroup}>
        <div
          className={styles.customizableOptions}
        >{`CUSTOMIZABLE OPTIONS `}</div>
        <b className={styles.openRiserStaircases1}>{openRiserStaircases}</b>
        <div className={styles.elevateYourHome}>
          {elevateYourHomeWithOurExq}
        </div>
      </div>
    </section>
  );
};

export default OpenRiserStaircases;
