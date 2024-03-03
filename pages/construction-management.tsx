import type { NextPage } from "next";
import styles from "./construction-management.module.css";

const ConstructionManagement: NextPage = () => {
  return (
    <div className={styles.constructionManagement}>
      <section className={styles.constructionHub}>
        <div className={styles.frameD}>
          <div className={styles.elevateYourProjectContainer}>
            <p className={styles.elevateYourProject}>
              Elevate your project experience with
            </p>
            <p className={styles.buildingTraditions}>Building Tradition's</p>
          </div>
          <h1 className={styles.constructionManagement1}>
            Construction Management
          </h1>
        </div>
      </section>
      <section className={styles.frameContainer}>
        <div className={styles.frameRow}>
          <div className={styles.tradesCollaborationFrame}>
            <div className={styles.qualityControlFrame}>
              <div className={styles.designElementFrame}>
                <div className={styles.photo}>
                  <div className={styles.bath51} />
                </div>
              </div>
              <h3 className={styles.design}>Design</h3>
            </div>
            <div className={styles.upperNavbarFrame}>
              <div className={styles.text}>
                <div className={styles.text1}>
                  <div className={styles.textFirst}>
                    <h3
                      className={styles.experienceExcellenceIn}
                    >{`Experience Excellence in Construction Management `}</h3>
                    <div className={styles.streamliningYourProject}>
                      Streamlining your project from start to finish with expert
                      planning, efficient execution, and cost-effective
                      solutions.
                    </div>
                  </div>
                </div>
                <div className={styles.textFirst1}>
                  <h3 className={styles.collaborateWithThe}>
                    Collaborate with the best tradespeople across the industry
                    meets Innovation
                  </h3>
                  <div className={styles.weEnsureThe}>
                    We ensure the highest quality and timely completion,
                    leveraging our vast network and in-house expertise.
                  </div>
                </div>
                <div className={styles.textFirst2}>
                  <h3 className={styles.saveYourProject}>
                    Save your project money and time
                  </h3>
                  <div className={styles.ourExperiencedTeam}>
                    {" "}
                    Our experienced team is dedicated to all your project's
                    details and timelines. We ensure seamless execution and
                    precise planning which will save valuable time and resources
                    and your project will be managed for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.unlockTheFull}>
            Unlock the Full Potential of Your Project
          </h1>
          <div className={styles.maximizeTheEfficiencyContainer}>
            <p className={styles.maximizeTheEfficiency}>
              Maximize the efficiency and quality of your project with Building
              Tradition's construction management expertise.
            </p>
            <p className={styles.discoverTheDifference}>
              Discover the difference professional management can make in
              achieving your project goals.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.successBase}>
        <div className={styles.yourPartnerForProjectSucce}>
          <div className={styles.text2}>
            <div className={styles.text3}>
              <div className={styles.textFirst3}>
                <h3 className={styles.yourPartnerFor}>
                  Your Partner for Project Success
                </h3>
                <div className={styles.trustUsHandle}>
                  – Trust us handle the complexities of construction management
                  while you focus on realizing your vision.
                </div>
              </div>
            </div>
            <div className={styles.textFirst4}>
              <h3 className={styles.investInPeace}>Invest in Peace of Mind</h3>
              <div className={styles.experienceAndInnovationContainer}>
                <p className={styles.experienceAndInnovation}>
                  {" "}
                  – Experience and innovation in every design
                </p>
                <p className={styles.cuttingEdgeRestAssured}>
                  {" "}
                  – Cutting-edge Rest assured knowing that your project is in
                  expert hands, delivering exceptional results every step of the
                  way.techniques, tailored to you
                </p>
              </div>
            </div>
            <div className={styles.textSecond}>
              <h3 className={styles.seamlessSolutions}>Seamless Solutions</h3>
              <div className={styles.noProjectIsContainer}>
                <p className={styles.noProjectIs}>
                  – No project is too big or too small
                </p>
                <p className={styles.letUsStreamline}>
                  – let us streamline your construction process for maximum
                  efficiency and quality.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.photo1}>
            <img
              className={styles.bath51Icon}
              loading="lazy"
              alt=""
              src="/bath5-12@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameSetter}>
          <div className={styles.constructionInfo}>
            <img
              className={styles.helicopterLumber1Icon}
              loading="lazy"
              alt=""
              src="/helicopter-lumber-1@2x.png"
            />
          </div>
          <div className={styles.understandingCM}>
            <div className={styles.understandingHeading}>
              <h1 className={styles.understandingConstructionMan}>
                Understanding Construction Management
              </h1>
            </div>
            <div className={styles.involvesDayToDayOperations}>
              Involves day-to-day operations management in construction or
              renovation projects. Requires quick decision-making and a vast
              network of operators for expertise.
            </div>
            <h3 className={styles.keyResponsibilitiesOf}>
              Key Responsibilities of Construction Management for your Project:
            </h3>
            <div className={styles.furtherLinks}>
              <div className={styles.decisionMakingBasedOnContainer}>
                <p className={styles.decisionMakingBasedOn}>
                  Decision-making based on evolving project factors
                </p>
                <p className={styles.coordinationOfContractors}>
                  Coordination of contractors and trades for seamless project
                  execution
                </p>
              </div>
              <h3 className={styles.executionOfDesign}>
                Execution of Design and Planning Phases:
              </h3>
              <div className={styles.translationOfDesignContainer}>
                <p className={styles.translationOfDesign}>
                  Translation of design and planning into actionable steps for
                  construction
                </p>
                <p className={styles.ensuringProperCoordination}>
                  Ensuring proper coordination of trades and resolution of
                  overlaps
                </p>
              </div>
              <h3 className={styles.importanceOfEffective}>
                Importance of Effective Workflow:
              </h3>
              <div className={styles.properSchedulingAndContainer}>
                <p className={styles.properSchedulingAnd}>
                  Proper scheduling and coordination minimize disruptions and
                  conflicts
                </p>
                <p className={styles.strategicPlanningEnsures}>
                  Strategic planning ensures smooth project execution and timely
                  completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionManagement;
