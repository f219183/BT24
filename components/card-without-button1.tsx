import type { NextPage } from "next";
import styles from "./card-without-button1.module.css";

export type CardWithoutButton1Type = {
  photoPlaceholder?: string;
  design?: string;
  aVirtualCanvasForYourDrea?: string;

  /** Action props */
  onCardWithoutButton1Click?: () => void;
};

const CardWithoutButton1: NextPage<CardWithoutButton1Type> = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
  onCardWithoutButton1Click,
}) => {
  return (
    <div
      className={styles.cardWithoutButton}
      onClick={onCardWithoutButton1Click}
    >
      <img
        className={styles.photoPlaceholderIcon}
        loading="lazy"
        alt=""
        src={photoPlaceholder}
      />
      <div className={styles.mainText}>
        <h3 className={styles.design}>{design}</h3>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.aVirtualCanvas}>{aVirtualCanvasForYourDrea}</div>
      </div>
    </div>
  );
};

export default CardWithoutButton1;
