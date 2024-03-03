import type { NextPage } from "next";
import DesignCard from "./design-card";
import styles from "./hero-section.module.css";

const HeroSection: NextPage = () => {
  return (
    <section className={styles.heroSection}>
      <header className={styles.titleSection1}>
        <h1 className={styles.pioneeringInnovationCraftin}>
          Pioneering Innovation, Crafting Excellence
        </h1>
        <div className={styles.blendingRevolutionaryTechnolContainer}>
          <p className={styles.blendingRevolutionaryTechnol}>
            Blending revolutionary technology with artistic craftsmanship across
            four specialized
          </p>
          <p className={styles.sectorsToBring}>
            sectors to bring your visionary projects to life.
          </p>
        </div>
      </header>
      <div className={styles.cardsSections1}>
        <DesignCard
          photoPlaceholder="/photo-placeholder@2x.png"
          design="Design"
          aVirtualCanvasForYourDrea="A virtual canvas for your dreams. Efﬁcient planning that saves you  both time and money"
        />
        <DesignCard
          photoPlaceholder="/photo-placeholder-1@2x.png"
          design="Carpentry"
          aVirtualCanvasForYourDrea="From residential construction to general contracting, we excel in turning aspirations  into reality"
        />
        <DesignCard
          photoPlaceholder="/photo-placeholder-2@2x.png"
          design="Staircases"
          aVirtualCanvasForYourDrea="Elevate your space with our industry-leading staircases"
        />
        <div className={styles.caseworkCard}>
          <img
            className={styles.photoPlaceholderIcon}
            alt=""
            src="/photo-placeholder-3@2x.png"
          />
          <div className={styles.mainText}>
            <h3 className={styles.design}>Casework</h3>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.aVirtualCanvasContainer}>
              <p className={styles.excellenceInOur}>
                Excellence in our approach to cabinetry, casework, closets and
                millwork
              </p>
            </div>
          </div>
          <div className={styles.buttonFrame}>
            <div className={styles.button}>
              <div className={styles.learnMore}>LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
