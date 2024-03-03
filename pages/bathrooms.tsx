import type { NextPage } from "next";
import BathroomsCarpentry3 from "../components/bathrooms-carpentry3";
import styles from "./bathrooms.module.css";

const Bathrooms: NextPage = () => {
  return (
    <div className={styles.bathrooms}>
      <BathroomsCarpentry3 />
      <section className={styles.showers}>
        <div className={styles.photo}>
          <img
            className={styles.bath51Icon}
            loading="lazy"
            alt=""
            src="/photo-1@2x.png"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.textFirst}>
            <b className={styles.steamRoomShowers}>Steam Room Showers</b>
            <div className={styles.indulgeInThe}>
              Indulge in the Ultimate Relaxation
            </div>
          </div>
          <div className={styles.textSecond}>
            <b className={styles.accessibleWashrooms}>Accessible washrooms</b>
            <div className={styles.inclusiveDesignsFor}>
              Inclusive Designs for Every Need
            </div>
          </div>
          <div className={styles.textThird}>
            <b className={styles.bathroomAdditions}>Bathroom additions</b>
            <div className={styles.expandYourComfort}>
              Expand Your Comfort with Seamless Additions
            </div>
          </div>
          <div className={styles.textFourth}>
            <b className={styles.sustainableSolutions}>Sustainable solutions</b>
            <div
              className={styles.energyEfficiency}
            >{`Energy Efficiency & Eco-Friendliness`}</div>
          </div>
        </div>
      </section>
      <section
        className={styles.homeAccessibilityTaxCredit}
        data-scroll-to="homeAccessibilityTaxCredit"
      >
        <b className={styles.transformYourOutdated}>
          Transform your outdated bathroom into a luxurious retreat
        </b>
      </section>
      <section className={styles.explorePotential}>
        <div className={styles.textBox}>
          <div className={styles.ourComprehensiveBathroom}>
            Our comprehensive bathroom renovation services cover everything from
            plumbing and fixtures to tiling and lighting, all tailored to your
            preferences.
          </div>
        </div>
        <div className={styles.photo1}>
          <img
            className={styles.adobestock47148588611}
            loading="lazy"
            alt=""
            src="/adobestock-471485886-1-1-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.plannedDesigns}>
        <div className={styles.europeanStyleWashroomsFrame}>
          <b className={styles.meticulouslyPlannedDesigns}>
            Meticulously planned designs
          </b>
        </div>
        <div className={styles.europeanStyleWashroomsFrame1}>
          <b className={styles.europeanStyleWashroomsContainer}>
            <p className={styles.european}>European</p>
            <p className={styles.styleWashrooms}>style washrooms</p>
          </b>
        </div>
      </section>
      <section className={styles.bathroomFeatures}>
        <div className={styles.bathroom}>
          <img
            className={styles.bath41Icon}
            loading="lazy"
            alt=""
            src="/bath4-1@2x.png"
          />
        </div>
        <div className={styles.curblessShowers}>
          <img
            className={styles.adobestock542185006111}
            loading="lazy"
            alt=""
            src="/adobestock-542185006-1-1-1@2x.png"
          />
        </div>
        <div className={styles.functionalElegance}>
          <img
            className={styles.adobestock6530208591Icon}
            loading="lazy"
            alt=""
            src="/adobestock-653020859-1@2x.png"
          />
        </div>
        <div className={styles.luxuriousUpgrades}>
          <img
            className={styles.adobestock19972989921}
            loading="lazy"
            alt=""
            src="/adobestock-199729899-2-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Bathrooms;
