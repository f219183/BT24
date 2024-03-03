import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import OpenRiserStaircases from "../components/open-riser-staircases";
import styles from "./staircases-pages.module.css";

const StaircasesPages: NextPage = () => {
  const router = useRouter();

  const onTextBoxContainerClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onEmbarkOnAClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.staircasesPages}>
      <section className={styles.staircasesHeroSection}>
        <div className={styles.photoHolderAbsText}>
          <div className={styles.adobeStockRectangle}>
            <img
              className={styles.adobestock646941552411}
              alt=""
              src="/adobestock-646941552-4-1-1@2x.png"
            />
          </div>
          <h2 className={styles.customStaircases}>
            <p className={styles.custom}>Custom</p>
            <p className={styles.staircases}>Staircases</p>
          </h2>
          <b className={styles.uniqueService}>UNIQUE SERVICE</b>
          <img
            className={styles.vecticalLineIcon}
            loading="lazy"
            alt=""
            src="/vectical-line.svg"
          />
          <img
            className={styles.horizontalLineIcon}
            loading="lazy"
            alt=""
            src="/horizontal-line.svg"
          />
        </div>
      </section>
      <section className={styles.staircaseDesign}>
        <div className={styles.allText}>
          <div className={styles.textBox} onClick={onTextBoxContainerClick}>
            <div className={styles.buildingsService}>BUILDINGS SERVICE</div>
            <b className={styles.staircasesByDesign}>Staircases by Design</b>
            <div className={styles.collaborateWithBuilding}>
              Collaborate with Building Tradition, where partnering with us
              means more than just innovative staircase solutions – it's a
              commitment to crafting your vision.
            </div>
          </div>
          <div className={styles.serviceOverview}>SERVICE OVERVIEW</div>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            loading="lazy"
            alt=""
            src="/adobestock-471485886-1-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.craftingStaircases}>
        <div className={styles.textArea}>
          <b className={styles.craftingIntegratedStaircaseContainer}>
            <p
              className={styles.craftingIntegratedStaircase}
            >{`Crafting integrated staircase `}</p>
            <p className={styles.solutionsToAscend}>
              solutions to ascend to lasting excellence.
            </p>
          </b>
          <div className={styles.elevateYourSpace}>
            Elevate your space with our expertly crafted custom staircases,
            where design meets functionality to create a unique ascent tailored
            to your vision, ensuring smarter, more collaborative design
            practices for elevated success.
          </div>
        </div>
        <div className={styles.photoHolder}>
          <img
            className={styles.adobestock639370636311}
            loading="lazy"
            alt=""
            src="/adobestock-639370636-31-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.text}>
        <b className={styles.ascentToEleganceContainer}>
          <p className={styles.ascentToElegance}>Ascent to elegance:</p>
          <p className={styles.whereStaircasesMeet}>
            where staircases meet artistry
          </p>
        </b>
      </section>
      <OpenRiserStaircases
        frame25="/frame-25@2x.png"
        openRiserStaircases="Open Riser Staircases "
        elevateYourHomeWithOurExq="Elevate your home with our exquisite open riser staircases, where modern design meets timeless elegance. Our thoughtfully
crafted staircases not only create a striking visual impact but
also invite natural light to dance through, seamlessly blending
innovation and sophistication in every step."
      />
      <section className={styles.closeRiserStaircases}>
        <div className={styles.customizableOptionsParent}>
          <div
            className={styles.customizableOptions}
          >{`CUSTOMIZABLE OPTIONS `}</div>
          <b
            className={styles.closedRiserStaircases}
          >{`Closed Riser Staircases `}</b>
          <div className={styles.meticulouslyCraftedThese}>
            Meticulously crafted, these designs seamlessly merge classic
            elegance with modern functionality. Enjoy enhanced stability and
            privacy with each step, while natural light adds warmth and allure
            to your ascent. Discover the perfect fusion of style and
            practicality, elevating your living space with our exquisite closed
            riser staircases.
          </div>
        </div>
        <img
          className={styles.closeRiserStaircasesChild}
          loading="lazy"
          alt=""
          src="/frame-25-1@2x.png"
        />
      </section>
      <OpenRiserStaircases
        frame25="/frame-25-2@2x.png"
        openRiserStaircases="Outdoor Staircases "
        elevateYourHomeWithOurExq="Transform your outdoor space with our stunning outdoor staircases. Crafted with durability and aesthetics in mind, these staircases seamlessly blend into your landscape while providing safe and stylish access to different levels. Designed to withstand the elements, our outdoor staircases combine practicality with elegance, enhancing the beauty and functionality of your outdoor living area.Elevate your outdoor experience with our exquisite outdoor staircases, perfect for adding a touch of sophistication to any setting."
      />
      <section className={styles.apartmentBuildingStaircases}>
        <div className={styles.apartmentBuildingStaircasesWrapper}>
          <b className={styles.apartmentBuildingStaircases1}>
            Apartment Building Staircases
          </b>
        </div>
        <div className={styles.framesParent}>
          <img
            className={styles.framesIcon}
            loading="lazy"
            alt=""
            src="/frame-29@2x.png"
          />
          <img
            className={styles.framesIcon1}
            loading="lazy"
            alt=""
            src="/frame-30@2x.png"
          />
          <img
            className={styles.framesIcon2}
            loading="lazy"
            alt=""
            src="/frame-32@2x.png"
          />
          <img
            className={styles.framesIcon3}
            loading="lazy"
            alt=""
            src="/frame-31@2x.png"
          />
        </div>
      </section>
      <footer className={styles.cta}>
        <h2 className={styles.embarkOnAContainer} onClick={onEmbarkOnAClick}>
          <p className={styles.embarkOnA}>
            Embark on a staircase journey with us —
          </p>
          <p className={styles.areYouReady}>
            are you ready to create one together ?
          </p>
        </h2>
      </footer>
    </div>
  );
};

export default StaircasesPages;
