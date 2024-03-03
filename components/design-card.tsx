import type { NextPage } from "next";
import styles from "./design-card.module.css";

export type DesignCardType = {
  photoPlaceholder?: string;
  design?: string;
  aVirtualCanvasForYourDrea?: string;
};

const DesignCard: NextPage<DesignCardType> = ({
  photoPlaceholder,
  design,
  aVirtualCanvasForYourDrea,
}) => {
  return (
    <div className={styles.designCard}>
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
      <div className={styles.buttonFrame}>
        <div className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
