import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Card from "../components/card";
import styles from "./design-page.module.css";

const DesignPage: NextPage = () => {
  const router = useRouter();

  const onMainTextContainerClick = useCallback(() => {
    router.push("/conceptual-modelling-plannin1");
  }, [router]);

  const onDesignText2Click = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onDesignText3Click = useCallback(() => {
    router.push("/construction-management");
  }, [router]);

  const onDesignText4Click = useCallback(() => {
    router.push("/accessible-construction");
  }, [router]);

  const onStaircasesByBuildingClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  const onDesignProjectTextClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/construction-design");
  }, [router]);

  const onPhotoImageClick = useCallback(() => {
    router.push("/staircases-pages");
  }, [router]);

  return (
    <div className={styles.designPage}>
      <section className={styles.designHeroSection}>
        <header className={styles.titleSection}>
          <h1 className={styles.design}>Design</h1>
          <div className={styles.craftingSuccessFrom}>
            Crafting Success from the Ground Up: Offering Comprehensive
            Modelling, Planning, Construction Design and Management for Every
            Phase of Your Project
          </div>
        </header>
        <div className={styles.cardDesignPage}>
          <Card
            photoPlaceholder="/photo-placeholder1@2x.png"
            conceptual="Conceptual "
            modelling="Modelling"
            aVirtualCanvasForYourDrea="A virtual canvas for your dreams. This step is to determine exactly what you want in your project. "
            onMainTextContainerClick={onMainTextContainerClick}
          />
          <Card
            photoPlaceholder="/photo-placeholder-11@2x.png"
            conceptual="Construction "
            modelling="Design"
            aVirtualCanvasForYourDrea="Rooted in years of experience, this step is to decide how best to achieve your project goals, considering and analyzing constraints (i.e.budget, local environment, building codes, city/township laws etc.)"
            modellingOverflow="hidden"
            aVirtualCanvasPadding="0px var(--padding-8xs)"
            propHeight="unset"
            onDesignText2Click={onDesignText2Click}
          />
          <Card
            photoPlaceholder="/photo-placeholder-21@2x.png"
            conceptual="Construction 
"
            modelling="Management"
            aVirtualCanvasForYourDrea="Streamlining your project from start to finish with expert planning, efficient execution, and cost-effective solutions. "
            modellingOverflow="hidden"
            aVirtualCanvasPadding="unset"
            propHeight="115px"
            onDesignText2Click={onDesignText3Click}
          />
          <Card
            photoPlaceholder="/photo-placeholder-31@2x.png"
            conceptual="Accessible 
"
            modelling="Construction "
            aVirtualCanvasForYourDrea="We don't often think about making our spaces adaptable to life's transitions until it's too late. Why wait for the unexpected to happen when you could plan to be in a space that has lifetime adaptability, for whatever life transitions occur. 
"
            modellingOverflow="hidden"
            aVirtualCanvasPadding="0px var(--padding-sm) 0px var(--padding-8xs)"
            propHeight="unset"
            onDesignText2Click={onDesignText4Click}
          />
        </div>
      </section>
      <section className={styles.section2DesignPage}>
        <div className={styles.contentFrame}>
          <div className={styles.blendingRevolutionaryTechnol}>
            Blending revolutionary technology with artistic craftsmanship across
            four specialized sectors to bring your visionary projects to life.
          </div>
        </div>
        <div className={styles.vectorGraphic}>
          <img
            className={styles.designProjectContainer}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </section>
      <section className={styles.bathroomsCarpentry}>
        <div className={styles.text}>
          <div
            className={styles.staircasesByBuilding}
            onClick={onStaircasesByBuildingClick}
          >
            Staircases by Building Tradition
          </div>
          <h1
            className={styles.designProject}
            onClick={onDesignProjectTextClick}
          >
            Design Project
          </h1>
          <div className={styles.ensureYourNext}>
            Ensure your next build goes smoothly by using our extensive
            experience with staircase design, which is an integral part of our
            conceptual modelling. We also provide pre-finished, ready to
            assemble staircases for your next project.
          </div>
          <div className={styles.btnFrameContent}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <h3 className={styles.learnMore}>READ MORE</h3>
            </div>
          </div>
        </div>
        <img
          className={styles.photoIcon}
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
          onClick={onPhotoImageClick}
        />
      </section>
    </div>
  );
};

export default DesignPage;
