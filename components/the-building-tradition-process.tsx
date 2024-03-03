import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./the-building-tradition-process.module.css";

const TheBuildingTraditionProcess: NextPage = () => {
  const router = useRouter();

  const onConceptualModelPlanClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onConstructionDesignTextClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onFinishingTouchesTextClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onReadyToGetClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <section
      className={styles.theBuildingTraditionProcess}
      data-scroll-to="theBuildingTraditionProcess"
    >
      <div className={styles.title}>
        <h2 className={styles.theBuildingTradition}>
          The Building Tradition Process
        </h2>
      </div>
      <div className={styles.showers}>
        <div className={styles.photo}>
          <img
            className={styles.adobestock10702882711}
            loading="lazy"
            alt=""
            src="/adobestock-107028827-1-1@2x.png"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.textFirst}>
            <b className={styles.initialConsultation}>Initial Consultation</b>
          </div>
          <div className={styles.textFirst1}>
            <b
              className={styles.conceptualModelPlan}
              onClick={onConceptualModelPlanClick}
            >
              Conceptual Model Plan Package
            </b>
            <div
              className={styles.designPlanning}
            >{` – Design & Planning `}</div>
          </div>
          <div className={styles.textFirst2}>
            <b
              className={styles.constructionDesign}
              onClick={onConstructionDesignTextClick}
            >
              Construction Design
            </b>
            <div className={styles.detailedPlanningAnd}>
              {" "}
              – Detailed planning and 3D modelling to visualize your project
            </div>
          </div>
          <div className={styles.textSecond}>
            <b className={styles.constructionManagement}>
              Construction Management
            </b>
            <div className={styles.precisionLedBuildingWith}>
              {" "}
              – Precision-led building with regular updates and milestones
            </div>
          </div>
          <div className={styles.textThird}>
            <b
              className={styles.guaranteedServiceContract}
            >{`Guaranteed Service Contract `}</b>
            <div className={styles.ourGuaranteedService}>
              {" "}
              –Our guaranteed service contract offers peace of mind and
              reliability
            </div>
          </div>
          <div className={styles.textFourth}>
            <b
              className={styles.finishingTouches}
              onClick={onFinishingTouchesTextClick}
            >{`Finishing Touches `}</b>
            <div className={styles.customInteriorFinishes}>
              {" "}
              – Custom interior finishes to make your space truly yours.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.title1}>
        <h2
          className={styles.letsCreateSomething}
        >{`Let's Create Something Extraordinary Together `}</h2>
      </div>
      <div className={styles.imagePlaceHolder}>
        <img
          className={styles.adobestock57537969521}
          loading="lazy"
          alt=""
          src="/adobestock-575379695-2-1@2x.png"
        />
      </div>
      <footer className={styles.title2}>
        <h2 className={styles.readyToGet} onClick={onReadyToGetClick}>
          Ready to get started? Reach out to us now and let's build together!
        </h2>
      </footer>
    </section>
  );
};

export default TheBuildingTraditionProcess;
