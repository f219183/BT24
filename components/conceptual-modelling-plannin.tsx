import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./conceptual-modelling-plannin.module.css";

const ConceptualModellingPlannin: NextPage = () => {
  const router = useRouter();

  const onDesignConceptual1Click = useCallback(() => {
    router.push("/design-page");
  }, [router]);

  return (
    <section className={styles.conceptualModellingPlannin}>
      <div className={styles.titileAndButton}>
        <h1
          className={styles.designConceptualModelling}
        >{`Design: Conceptual Modelling & Planning`}</h1>
        <button className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </button>
      </div>
      <div className={styles.photoHolder}>
        <img
          className={styles.designConceptual1}
          alt=""
          src="/design-conceptual-1@2x.png"
          onClick={onDesignConceptual1Click}
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </section>
  );
};

export default ConceptualModellingPlannin;
