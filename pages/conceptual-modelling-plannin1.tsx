import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./conceptual-modelling-plannin1.module.css";

const ConceptualModellingPlannin1: NextPage = () => {
  const router = useRouter();

  const onTheConceptualModelClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.conceptualModellingPlannin}>
      <section className={styles.conceptualModellingPlannin1}>
        <div className={styles.textBox}>
          <h3 className={styles.design}>Design</h3>
          <h1 className={styles.conceptualModellingPlanningContainer}>
            <p className={styles.conceptualModelling}>Conceptual Modelling</p>
            <p className={styles.planning}>{` &Planning`}</p>
          </h1>
          <div className={styles.embarkOnYour}>
            Embark on your renovation or new build project with confidence by
            leveraging Building Tradition's Conceptual Model Plan Package. Our
            service offers a comprehensive approach to project planning,
            combining expertise, personalized consultations, and detailed model
            plans to bring your vision to life. From initial consultation to
            final draft plans, we prioritize your needs and ensure a
            collaborative environment to refine ideas and make informed
            decisions. With our support, you'll save time, money, and resources,
            ultimately achieving a streamlined and perfect planning stage for
            your dream project.
          </div>
          <h3
            className={styles.theConceptualModelContainer}
            onClick={onTheConceptualModelClick}
          >
            <p className={styles.theConceptualModelPlan}>
              <span className={styles.the}>{`The `}</span>
              <b className={styles.conceptualModelPlan}>
                Conceptual Model Plan
              </b>
              <span></span>
            </p>
            <p className={styles.byBuildingTradition}>
              by Building Tradition is the solution you need! Is The Solution
              You Need!
            </p>
          </h3>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            loading="lazy"
            alt=""
            src="/adobestock-471485886-1-11@2x.png"
          />
        </div>
      </section>
      <section className={styles.benefitsOfChoosingBuilding}>
        <div className={styles.benefitsText}>
          <h1 className={styles.benefitsOfChoosing}>
            Benefits of Choosing Building Tradition
          </h1>
        </div>
      </section>
      <section className={styles.benefits}>
        <div className={styles.photoHolder}>
          <img
            className={styles.designConceptual1}
            alt=""
            src="/design-conceptual-1@2x.png"
          />
          <img
            className={styles.benefitsListIcon}
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.personalizedConsultation}>
            <ul className={styles.personalizedConsultation1}>
              <li>Personalized Consultation</li>
            </ul>
          </h3>
          <h3 className={styles.continuousSupportContainer}>
            <ul className={styles.continuousSupportExpertG}>
              <li>{`Continuous Support & 
Expert Guidance`}</li>
            </ul>
          </h3>
          <h3 className={styles.confidenceInExecutionContainer}>
            <ul className={styles.confidenceInExecution}>
              <li>Confidence in Execution</li>
            </ul>
          </h3>
          <h3 className={styles.decadesOfIndustryContainer}>
            <ul className={styles.decadesOfIndustryExpertise}>
              <li>Decades of Industry Expertise</li>
            </ul>
          </h3>
        </div>
      </section>
      <section className={styles.blueprintVision}>
        <div className={styles.carpentryStaircasesCasework}>
          <div className={styles.textBox1}>
            <h1 className={styles.blueprintYourVision}>
              BLUEPRINT YOUR VISION
            </h1>
            <div className={styles.embarkOnYourContainer}>
              <p className={styles.embarkOnYour1}>
                Embark on your renovation or new build project with confidence
                by
              </p>
              <p
                className={styles.tailoredConceptualModelling}
              >{`Tailored Conceptual Modelling & Planning for Precision-Driven Project Outcomes`}</p>
            </div>
          </div>
          <div className={styles.btlogolongRectangle}>
            <img
              className={styles.modelplanspage21Icon}
              loading="lazy"
              alt=""
              src="/modelplanspage2-1@2x.png"
            />
          </div>
          <div className={styles.copyrightText}>
            <h3 className={styles.experienceTheBuilding}>
              Experience the Building Tradition difference!
            </h3>
          </div>
          <div className={styles.modelSection}>
            <img
              className={styles.modelplanspage21Icon1}
              loading="lazy"
              alt=""
              src="/modelplanspage2-1-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.photoFrame}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </section>
      <section className={styles.whatOurConceptualModelPlan}>
        <div className={styles.title}>
          <h1 className={styles.whatOurConceptual}>
            What our Conceptual Model Plan Package Includes:
          </h1>
        </div>
        <div className={styles.photoHolder1}>
          <img
            className={styles.adobestock27854565521}
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-11@2x.png"
          />
        </div>
      </section>
      <section className={styles.boxcontainer}>
        <div className={styles.leftBox}>
          <h3 className={styles.inHomeonSiteConsultation}>
            In-Home/On Site Consultation
          </h3>
          <div className={styles.collaborativeBrainstormingSe}>
            – Collaborative brainstorming session to discuss project ideas
          </div>
          <div className={styles.detailedMeasurementsAnd}>
            – Detailed measurements and gathering of necessary project details
          </div>
          <div className={styles.ensuringAllQuestions}>
            – Ensuring all questions and concerns are addressed
          </div>
        </div>
        <div className={styles.middleBox}>
          <h3 className={styles.modelDrafts}>{`Model Drafts & Estimates`}</h3>
          <div className={styles.detailedBreakdownOf}>
            – Detailed breakdown of pricing for better understanding and
            confidence
          </div>
          <div className={styles.opportunityForRevisions}>
            – Opportunity for revisions and adjustments based on initial
            feedback
          </div>
        </div>
        <div className={styles.mrightBox}>
          <h3 className={styles.followUpModelSessions}>
            Follow-Up Model Sessions
          </h3>
          <div className={styles.phoneConsultationsFor}>
            – Phone consultations for ongoing support
          </div>
          <div className={styles.refinementOfIdeas}>
            – Refinement of ideas and making necessary adjustments
          </div>
          <div className={styles.ensuringProjectVision}>
            – Ensuring project vision remains on track throughout the process
          </div>
        </div>
        <div className={styles.rightBox}>
          <h3 className={styles.finalSetOf}>Final Set of Plans</h3>
          <div className={styles.revisedEstimatesAnd}>
            – Revised estimates and material schedules for accurate quoting and
            planning
          </div>
          <div className={styles.lifelike3dRepresentations}>
            – Lifelike 3D representations for visualizing the end result
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptualModellingPlannin1;
