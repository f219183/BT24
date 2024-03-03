import type { NextPage } from "next";
import styles from "./card-without-button.module.css";

export type CardWithoutButtonType = {
  photoPlaceholder?: string;
  design?: string;
  aVirtualCanvasForYourDrea?: string;
};

const CardWithoutButton: NextPage<CardWithoutButtonType> = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
}) => {
  return (
    <div className={styles.cardWithoutButton}>
      <img
        className={styles.photoPlaceholderIcon}
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

export default CardWithoutButton;
