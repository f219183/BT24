import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.furtherLinks}>
        <div className={styles.linkComponents}>
          <div className={styles.designFrames}>
            <div className={styles.designOptions}>
              <div className={styles.figmaComponents}>
                <b className={styles.designs}>Designs</b>
                <div className={styles.constructionPlanning}>
                  <div className={styles.conceptualModelling}>
                    Conceptual Modelling
                  </div>
                  <div className={styles.planning}>Planning</div>
                  <div className={styles.constructionDesign}>
                    Construction Design
                  </div>
                  <div className={styles.constructionManagement}>
                    Construction Management
                  </div>
                  <div className={styles.accessibleConstruction}>
                    Accessible Construction
                  </div>
                </div>
              </div>
              <div className={styles.customHomeFrames}>
                <div className={styles.renovationFrames}>
                  <b className={styles.carpentry}>Carpentry</b>
                  <div className={styles.trimDecalsFrames}>
                    <div className={styles.customeHomes}>Custome Homes</div>
                    <div className={styles.additions}>Additions</div>
                    <div className={styles.renovations}>Renovations</div>
                    <div className={styles.kitchens}>Kitchens</div>
                    <div className={styles.bathrooms}>Bathrooms</div>
                    <div className={styles.accessibleConstructions}>
                      Accessible Constructions
                    </div>
                    <div className={styles.trim}>Trim</div>
                    <div className={styles.decksPatios}>{`Decks & Patios`}</div>
                  </div>
                </div>
                <div className={styles.caseworkFrames}>
                  <b className={styles.staircases}>Staircases</b>
                  <div className={styles.riserTypeFrames}>
                    <div className={styles.openRiser}>Open Riser</div>
                    <div className={styles.closedRiser}>Closed Riser</div>
                    <div className={styles.retrofit}>Retrofit</div>
                    <div className={styles.exterior}>Exterior</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cabinetryFrames}>
              <b className={styles.casework}>Casework</b>
              <div className={styles.logoFrame}>
                <div className={styles.cabinetry}>Cabinetry</div>
                <div className={styles.closets}>Closets</div>
                <div className={styles.displayCases}>Display Cases</div>
                <div className={styles.customMilwork}>Custom Milwork</div>
                <div className={styles.inlaysDecal}>{`Inlays & Decal`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainLogoFrame}>
          <img
            className={styles.btLogo2024LongIcon}
            loading="lazy"
            alt=""
            src="/bt-logo-2024-long@2x.png"
          />
        </div>
      </footer>
      <div className={styles.phoneCallEmailFrame}>
        <b
          className={styles.copyrightBuilding}
        >{`Copyright © Building Tradition 2024 `}</b>
        <div className={styles.contactInfo}>
          <div className={styles.phoneCall1} />
          <b className={styles.infobuildingTraditionca}>613-703-6840</b>
        </div>
        <div className={styles.contactInfo1}>
          <div className={styles.email1} />
          <b className={styles.infobuildingtraditionca}>
            info@buildingtradition.ca
          </b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
