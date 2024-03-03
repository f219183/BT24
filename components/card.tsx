import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card.module.css";

export type CardType = {
  photoPlaceholder?: string;
  conceptual?: string;
  modelling?: string;
  aVirtualCanvasForYourDrea?: string;

  /** Style props */
  modellingOverflow?: CSSProperties["overflow"];
  aVirtualCanvasPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];

  /** Action props */
  onMainTextContainerClick?: () => void;
  onDesignText2Click?: () => void;
};

const Card: NextPage<CardType> = ({
  photoPlaceholder,
  conceptual,
  modelling,
  aVirtualCanvasForYourDrea,
  modellingOverflow,
  aVirtualCanvasPadding,
  propHeight,
  onMainTextContainerClick,
  onDesignText2Click,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      overflow: modellingOverflow,
    };
  }, [modellingOverflow]);

  const mainTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: aVirtualCanvasPadding,
    };
  }, [aVirtualCanvasPadding]);

  const aVirtualCanvasStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.card} style={cardStyle}>
      <img
        className={styles.photoPlaceholderIcon}
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div
        className={styles.mainText}
        onClick={onMainTextContainerClick}
        style={mainTextStyle}
      >
        <h3 className={styles.design} onClick={onDesignText2Click}>
          <p className={styles.conceptual}>{conceptual}</p>
          <p className={styles.modelling}>{modelling}</p>
        </h3>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.aVirtualCanvas} style={aVirtualCanvasStyle}>
          {aVirtualCanvasForYourDrea}
        </div>
      </div>
      <div className={styles.buttonFrame}>
        <div className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
