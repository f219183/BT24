import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./left-box.module.css";

export type LeftBoxType = {
  culinaryHavensForEveryTas?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];

  /** Action props */
  onButton1Click?: () => void;
};

const LeftBox: NextPage<LeftBoxType> = ({
  culinaryHavensForEveryTas,
  propGap,
  onButton1Click,
}) => {
  const leftBoxStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.leftBox} style={leftBoxStyle}>
      <div className={styles.leftBox1}>
        <b className={styles.culinaryHavensFor}>{culinaryHavensForEveryTas}</b>
      </div>
      <div className={styles.leftBox2}>
        <button className={styles.button} onClick={onButton1Click}>
          <div className={styles.learnMore}>READ MORE</div>
        </button>
      </div>
    </div>
  );
};

export default LeftBox;
