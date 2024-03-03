import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./accessible-construction.module.css";

const AccessibleConstruction: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='accessibleSection2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    router.push("/addition-renovations");
  }, [router]);

  const onButton2Click = useCallback(() => {
    window.open(
      "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2022-plan-grow-economy-make-life-more-affordable/home-accessibility-tax-credit.html"
    );
  }, []);

  return (
    <div className={styles.accessibleConstruction}>
      <section className={styles.frameParent}>
        <header className={styles.frameGroup}>
          <div className={styles.accessibleConstructionParent}>
            <h1
              className={styles.accessibleConstruction1}
            >{`Accessible Construction `}</h1>
            <div className={styles.byBuildingTradition}>
              by Building Tradition
            </div>
            <div className={styles.learnMoreButton}>
              <div className={styles.buildingTraditionOffers}>
                Building Tradition offers homes designed to grow alongside you
                and your family, seamlessly adapting to life's transitions. Our
                Custom Home Additions are designed for lifelong comfort,
                accessibility, and independence. Our expert team collaborates
                with clients to create tailored solutions that evolve with their
                needs, whether accommodating growing families, aging relatives,
                or individuals with mobility challenges. From seamless
                integration of accessibility features to prioritizing ease of
                maintenance and cleanliness, our custom home additions are
                crafted to enhance quality of life for years to come.
                Additionally, eligible renovations may qualify for the Home
                Accessibility Tax Credit (HATC), providing potential savings of
                up to $10,000 for seniors or individuals with disabilities.
                Partner with us to redefine your living space and enjoy the
                peace of mind that comes from living in a home that adapts to
                you.
              </div>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.learnMore}>LEARN MORE</div>
              </button>
            </div>
          </div>
          <div className={styles.photo}>
            <img
              className={styles.adobestock47148588611}
              alt=""
              src="/adobestock-471485886-1-1@2x.png"
            />
          </div>
        </header>
      </section>
      <section
        className={styles.accessibleSection2}
        data-scroll-to="accessibleSection2"
      >
        <h1 className={styles.yourHomeYour}>
          Your Home, Your Lifelong Companion:Growing with You Through Life's
          Transitions
        </h1>
        <div className={styles.photoHolder}>
          <img
            className={styles.adobestock27854565521}
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.tailoredSolutionsFrame}>
        <div className={styles.comfortFrame}>
          <h3 className={styles.lifelongComfortAnd}>
            Lifelong Comfort and Independence
          </h3>
          <div className={styles.designAHome}>
            – Design a home addition that prioritizes comfort, accessibility,
            and independence for lifelong enjoyment
          </div>
          <div className={styles.ensureYourLivingContainer}>
            <p className={styles.ensureYourLiving}>
              – Ensure your living space evolves with your changing needs and
              accommodates growing families, aging relatives, or mobility
              challenges
            </p>
          </div>
        </div>
        <div className={styles.accessibilityWashroomsFrame}>
          <h3 className={styles.tailoredSolutionsFor}>
            Tailored Solutions for Every Stage of Life
          </h3>
          <div className={styles.seamlesslyIntegrateAccessibi}>
            – Seamlessly integrate accessibility features into your home
            addition to promote independence and ease of movement.
          </div>
          <div className={styles.prioritizeEaseOf}>
            – Prioritize ease of maintenance and cleanliness to enhance quality
            of life for occupants of all ages and abilities.
          </div>
          <div className={styles.seamlessIncorporationOf}>
            – Seamless incorporation of universal design principles to promote
            inclusivity and functionality
          </div>
        </div>
        <div className={styles.accessibilityWashroomsFrame1}>
          <h3 className={styles.tailoredAccessibilityWashroContainer}>
            <p className={styles.tailoredAccessibility}>
              Tailored Accessibility:
            </p>
            <p
              className={styles.washroomsForComfort}
            >{`Washrooms for Comfort and Inclusivity `}</p>
          </h3>
          <div className={styles.personalizedDesignApproach}>
            – Personalized design approach to ensure washrooms meet individual
            accessibility needs
          </div>
          <div className={styles.integrationOfGrab}>
            – Integration of grab bars, roll-in showers, and adjustable fixtures
            for ease of use
          </div>
          <div className={styles.collaborationWithClients}>
            – Collaboration with clients to create a space that prioritizes
            comfort, safety, and independence
          </div>
        </div>
      </section>
      <section className={styles.accessibilityFrameParent}>
        <div className={styles.accessibilityFrame}>
          <div className={styles.accessibilityAdditions}>
            <div className={styles.additionText}>
              <div
                className={styles.accessibleHomeAdditions}
              >{`Accessible Home Additions `}</div>
            </div>
            <div className={styles.homeAdditions}>
              <h1 className={styles.ageInPlace}>
                Age in Place: Homes Crafted for Lifelong Comfort and Well-Being
              </h1>
              <div className={styles.ensureYourNext}>
                Ensure your next build goes smoothly by using our extensive
                experience with staircase design, which is an integral part of
                our conceptual modelling. We also provide pre-finished, ready to
                assemble staircases for your next project.
              </div>
            </div>
            <button className={styles.button1} onClick={onButton1Click}>
              <div className={styles.learnMore1}>LEARN MORE</div>
            </button>
          </div>
        </div>
        <div className={styles.photo1}>
          <img
            className={styles.adobestock471485886111}
            alt=""
            src="/adobestock-471485886-1-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.hATCSavingsWrapper}>
        <div className={styles.hATCSavings}>
          <div className={styles.accessibilityTaxCredit}>
            <h1 className={styles.homeAccessibilityTax}>
              Home Accessibility Tax Credit (HATC) Eligibility
            </h1>
          </div>
          <div className={styles.photoHolderFrame}>
            <div className={styles.photo2}>
              <img
                className={styles.adobestock471485886112}
                alt=""
                src="/adobestock-471485886-1-1@2x.png"
              />
            </div>
            <div className={styles.designsAndLinksFrames}>
              <div className={styles.homeAccessibility}>
                <div className={styles.designsAndLinksFrames1}>
                  <div className={styles.explorePotentialSavings}>
                    Explore potential savings with the Home Accessibility Tax
                    Credit (HATC) for eligible renovations.
                  </div>
                  <div className={styles.seniorsOrIndividuals}>
                    Seniors or individuals with disabilities may qualify for up
                    to $10,000 in expenses claimed for renovations that enhance
                    accessibility and safety.
                  </div>
                </div>
                <button className={styles.button2} onClick={onButton2Click}>
                  <div className={styles.learnMore2}>LEARN MORE</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.contactUsCTA}>
            <h1 className={styles.transformYourLiving}>
              Transform Your Living Space: Contact us today for a Custom Home
              Addition for Lifelong Comfort and Independence
            </h1>
          </div>
        </div>
      </section>
      <footer className={styles.newCta}>
        <h1
          className={styles.readyToTransform}
        >{`Ready to transform your space? `}</h1>
        <h3 className={styles.withOurExpertiseContainer}>
          <span className={styles.withOurExpertise}>
            With our expertise and dedication, let's bring your home Accessible
            Construction
          </span>
          <b>{` `}</b>
          <span className={styles.projectToLife}>
            {" "}
            project to life. Contact us today to begin your journey!
          </span>
        </h3>
        <button className={styles.button3}>
          <div className={styles.learnMore3}>CALL US</div>
        </button>
      </footer>
    </div>
  );
};

export default AccessibleConstruction;
