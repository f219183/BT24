import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./construction-design.module.css";

const ConstructionDesign: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='materialAndMethodConsiderat']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <div className={styles.constructionDesign}>
      <section className={styles.mainFrame}>
        <div className={styles.carpentryStaircasesCasework}>
          <div className={styles.conceptualPlanning}>
            <div className={styles.masterDesignFrame}>
              <h3 className={styles.design}>Design</h3>
              <h1 className={styles.masteringConstructionDesignContainer}>
                <p className={styles.masteringConstructionDesign}>
                  Mastering Construction Design:
                </p>
                <p className={styles.buildingTraditionsSignature}>
                  Building Tradition's Signature Approach
                </p>
              </h1>
              <div className={styles.atBuildingTraditionContainer}>
                <p className={styles.atBuildingTradition}>
                  At Building Tradition, we redefine construction design by
                  blending meticulous planning with cutting-edge construction
                  methodologies. Our unique offering extends beyond aesthetic
                  appeal, focusing on strategic material and method selection,
                  innovative solutions to logistical challenges, and the
                  adaptability to implement cost-effective changes.
                </p>
                <p className={styles.withTheAdded}>
                  With the added benefit of offering localized, tailor-made
                  expertise to maximize efficiency and reduce costs, Building
                  Tradition is your trusted partner in constructing not just
                  buildings, but legacies. Experience firsthand this unique
                  offering from our team.
                </p>
                <p className={styles.embraceTheFuture}>
                  Embrace the future of construction design with Building
                  Tradition, where innovation meets tradition to save you money
                  and elevate your project.
                </p>
              </div>
            </div>
            <div className={styles.emptyFrame}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.learnMore}>READ MORE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            loading="lazy"
            alt=""
            src="/adobestock-471485886-1-12@2x.png"
          />
        </div>
      </section>
      <section className={styles.textComponentPhotoHolder}>
        <h1 className={styles.beyondPlanning}>
          Beyond Planning - The Art of Construction Design
        </h1>
        <div className={styles.photoHolder}>
          <img
            className={styles.adobestock27854565521}
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-12@2x.png"
          />
        </div>
      </section>
      <section className={styles.designProjectStaircase}>
        <div className={styles.costEffectiveMaterials}>
          <h3 className={styles.innovativePlanningAnd}>
            Innovative Planning and Design
          </h3>
          <div className={styles.yourVisionOurContainer}>
            <p className={styles.yourVisionOur}>Your vision, our precision</p>
            <p className={styles.buildingExcellenceTogether}>
              – building excellence together.
            </p>
          </div>
          <div className={styles.beyondAestheticsContainer}>
            <p className={styles.beyondAesthetics}>Beyond aesthetics:</p>
            <p className={styles.shapeFinishAnd}>
              – Shape, finish, and efficiency.
            </p>
            <p className={styles.tailoringBeautyWith}>
              – Tailoring beauty with practicality.
            </p>
          </div>
        </div>
        <div className={styles.qualityWithoutCuttingCorner}>
          <h3
            className={styles.strategicMaterial}
          >{`Strategic Material & Method Selection `}</h3>
          <div className={styles.optimizeCostsEnhance}>
            – Optimize costs, enhance efficiency.
          </div>
          <div className={styles.smartChoicesFor}>
            – Smart choices for lasting structures.
          </div>
          <div className={styles.seamlessIncorporationOf}>
            – Seamless incorporation of universal design principles to promote
            inclusivity and functionality
          </div>
        </div>
        <div className={styles.costEffectiveMaterials1}>
          <h3 className={styles.solvingLogisticalChallenges}>
            Solving Logistical Challenges
          </h3>
          <div className={styles.creativeSolutionsFor}>
            – Creative solutions for material delivery anywhere.
          </div>
          <div className={styles.adaptableToSiteSpecific}>
            – Adaptable to site-specific constraints and considerations.
          </div>
        </div>
      </section>
      <section className={styles.designProjectStaircase1}>
        <div className={styles.text}>
          <div className={styles.staircasesByBuilding}>
            Staircases by Building Tradition
          </div>
          <h1 className={styles.designProject}>Design Project</h1>
          <div className={styles.ensureYourNext}>
            Ensure your next build goes smoothly by using our extensive
            experience with staircase design, which is an integral part of our
            conceptual modelling. We also provide pre-finished, ready to
            assemble staircases for your next project.
          </div>
          <div className={styles.buttonHolder}>
            <button className={styles.button1} onClick={onButton1Click}>
              <div className={styles.learnMore1}>READ MORE</div>
            </button>
          </div>
        </div>
        <div className={styles.photo1}>
          <img
            className={styles.adobestock471485886111}
            alt=""
            src="/photo1@2x.png"
          />
        </div>
      </section>
      <section className={styles.materialMethodConsideration}>
        <div
          className={styles.materialAndMethodConsiderat}
          data-scroll-to="materialAndMethodConsiderat"
        >
          <div className={styles.text1}>
            <h1 className={styles.materialAndMethod}>
              Material and Method Consideration: A Strategic Choice
            </h1>
          </div>
          <div className={styles.contant}>
            <div className={styles.photo2}>
              <img
                className={styles.bath51Icon}
                loading="lazy"
                alt=""
                src="/bath5-11@2x.png"
              />
            </div>
            <div className={styles.text2}>
              <div className={styles.textFourth}>
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
              <div className={styles.textFourth1}>
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
              <div className={styles.textFourth2}>
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
      </section>
      <section className={styles.futureOfConstruction}>
        <h1 className={styles.unveilingTheFuture}>
          Unveiling the Future of Construction with Building Tradition
        </h1>
        <div className={styles.atBuildingTradition1}>
          At Building Tradition, we redefine construction design by blending
          meticulous planning with cutting-edge construction methodologies. Our
          unique service extends beyond aesthetic appeal, focusing on strategic
          material and method selection, innovative solutions to logistical
          challenges, and the adaptability to implement cost-effective changes.
          With the added benefit of offering localized, tailor-made expertise to
          maximize efficiency and reduce costs, Building Tradition is your
          trusted partner in constructing not just buildings, but legacies.
          Embrace the future of construction design with Building Tradition,
          where innovation meets tradition to save you money and elevate your
          project.
        </div>
      </section>
      <section className={styles.photoHolder1}>
        <img
          className={styles.adobestock278545655211}
          alt=""
          src="/adobestock-278545655-2-1-1@2x.png"
        />
      </section>
    </div>
  );
};

export default ConstructionDesign;
