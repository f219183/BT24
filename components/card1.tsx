import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card1.module.css";

export type Card1Type = {
  photoPlaceholder?: string;
  design?: string;
  aVirtualCanvasForYourDrea?: string;

  /** Style props */
  buttonFrameLeft?: CSSProperties["left"];
  buttonFrameTop?: CSSProperties["top"];
  lEARNMOREAlignSelf?: CSSProperties["alignSelf"];
  lEARNMOREPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
};

const Card1: NextPage<Card1Type> = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
  buttonFrameLeft,
  buttonFrameTop,
  lEARNMOREAlignSelf,
  lEARNMOREPadding,
  propFlex,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      left: buttonFrameLeft,
      top: buttonFrameTop,
    };
  }, [buttonFrameLeft, buttonFrameTop]);

  const mainText1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: lEARNMOREAlignSelf,
      padding: lEARNMOREPadding,
    };
  }, [lEARNMOREAlignSelf, lEARNMOREPadding]);

  const designStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.card} style={card1Style}>
      <img
        className={styles.photoPlaceholderIcon}
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div className={styles.mainText} style={mainText1Style}>
        <h3 className={styles.design} style={designStyle}>
          {design}
        </h3>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.aVirtualCanvas}>{aVirtualCanvasForYourDrea}</div>
      </div>
      <div className={styles.buttonFrame}>
        <div className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
