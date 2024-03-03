import type { NextPage } from "next";
import { useCallback } from "react";
import HeroSection from "../components/hero-section";
import HonoringTraditionEmbracingI from "../components/honoring-tradition-embracing-i";
import DesignThatSizzles from "../components/design-that-sizzles";
import BathroomsCarpentry from "../components/bathrooms-carpentry";
import Showers from "../components/showers";
import ConceptualModellingPlannin from "../components/conceptual-modelling-plannin";
import AscentToEleganceWhereSta from "../components/ascent-to-elegance-where-sta";
import { useRouter } from "next/router";
import NewsletterCTA from "../components/newsletter-c-t-a";
import styles from "./index.module.css";

const LandingPageHomePage: NextPage = () => {
  const router = useRouter();

  const onCabinetsClosetsCaseworkClick = useCallback(() => {
    router.push("/casework-page");
  }, [router]);

  const onGetStartedTodayClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.landingPageHomePage}>
      <HeroSection />
      <HonoringTraditionEmbracingI />
      <DesignThatSizzles />
      <BathroomsCarpentry />
      <Showers />
      <ConceptualModellingPlannin />
      <AscentToEleganceWhereSta />
      <section className={styles.cabinetsClosetsCasework}>
        <div className={styles.photoAndText}>
          <h1
            className={styles.cabinetsClosetsCaseworkContainer}
            onClick={onCabinetsClosetsCaseworkClick}
          >
            <p className={styles.cabinetsClosets}>Cabinets, Closets,</p>
            <p className={styles.caseworkMore}>{`Casework & More
`}</p>
            <p className={styles.storageSolutions}>Storage Solutions</p>
          </h1>
        </div>
        <div className={styles.button}>
          <h3 className={styles.learnMore}>LEARN MORE</h3>
        </div>
      </section>
      <section className={styles.cta}>
        <h1 className={styles.getStartedToday} onClick={onGetStartedTodayClick}>
          Get Started Today
        </h1>
        <h3 className={styles.contactWithUs}>
          Contact with us today to start on your dream projects.
        </h3>
      </section>
      <NewsletterCTA />
    </div>
  );
};

export default LandingPageHomePage;
