import type { NextPage } from "next";
import styles from "./material.module.css";

const Material: NextPage = () => {
  return (
    <section className={styles.material}>
      <div className={styles.material1} data-scroll-to="materialContainer">
        <div className={styles.text}>
          <h1 className={styles.materialAndMethod}>
            Material and Method Consideration: A Strategic Choice
          </h1>
        </div>
        <div className={styles.strategicChoice}>
          <div className={styles.showers}>
            <div className={styles.photo}>
              <img
                className={styles.bath51Icon}
                loading="lazy"
                alt=""
                src="/bath5-1@2x.png"
              />
            </div>
            <div className={styles.textFourth}>
              <div className={styles.costEffectiveInnovations}>
                <h3 className={styles.costSavingInnovations}>
                  Cost Saving Innovations
                </h3>
                <div className={styles.leveragingTheLatestContainer}>
                  <p className={styles.leveragingTheLatest}>
                    {" "}
                    – Leveraging the latest in efficient building methods
                  </p>
                  <p className={styles.reducingCostsWith}>
                    {" "}
                    – Reducing costs with smarter construction strategies
                  </p>
                </div>
              </div>
              <div className={styles.costEffectiveInnovations1}>
                <h3 className={styles.materialOptimization}>
                  Material Optimization
                </h3>
                <div className={styles.selectingCostEffectiveMaterContainer}>
                  <p className={styles.selectingCostEffectiveMater}>
                    – Selecting cost-effective materials without sacrificing
                    quality
                  </p>
                  <p className={styles.tailoredMaterialChoices}>
                    – Tailored material choices for budget-friendly solutions
                  </p>
                </div>
              </div>
              <div className={styles.text1}>
                <div className={styles.textFirst}>
                  <h3 className={styles.localExpertiseGlobal}>
                    Local Expertise, Global Standards
                  </h3>
                  <div className={styles.customMethodsAndContainer}>
                    <p className={styles.customMethodsAnd}>
                      {" "}
                      – Custom methods and materials for your area.
                    </p>
                    <p className={styles.maximizeLocalEfficiency}>
                      – Maximize local efficiency, minimize expenses.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.textFirst1}>
                <h3 className={styles.expertiseMeetsInnovation}>
                  Expertise meets Innovation
                </h3>
                <div className={styles.experienceAndInnovationContainer}>
                  <p className={styles.experienceAndInnovation}>
                    {" "}
                    – Experience and innovation in every design
                  </p>
                  <p className={styles.cuttingEdgeTechniquesTailo}>
                    {" "}
                    – Cutting-edge techniques, tailored to you
                  </p>
                </div>
              </div>
              <div className={styles.textFourth1}>
                <h3 className={styles.efficiencyWithoutCompromise}>
                  Efficiency without Compromise
                </h3>
                <div className={styles.costEffectiveWithoutCuttinContainer}>
                  <p className={styles.costEffectiveWithoutCuttin}>
                    {" "}
                    –Cost-effective, without cutting corners.
                  </p>
                  <p className={styles.qualityAndValue}>
                    {" "}
                    –Quality and value in every detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
