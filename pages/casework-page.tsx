import type { NextPage } from "next";
import { useCallback } from "react";
import CaseworkHeroSection from "../components/casework-hero-section";
import BathroomsCarpentry2 from "../components/bathrooms-carpentry2";
import BathroomsCarpentry1 from "../components/bathrooms-carpentry1";
import { useRouter } from "next/router";
import styles from "./casework-page.module.css";

const CaseworkPage: NextPage = () => {
  const router = useRouter();

  const onGetStartedTodayClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onContactUsNowClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.caseworkPage}>
      <CaseworkHeroSection />
      <section className={styles.bathroomsCarpentry}>
        <div className={styles.text}>
          <h1 className={styles.customCasework}>Custom Casework</h1>
          <div className={styles.transformYourHomeContainer}>
            <p className={styles.transform}>
              Transform your home into a haven of order and sophistication with
              our tailored storage options that cater your unique needs and
              aesthetic preferences.
            </p>
            <p className={styles.exploreEndlessPossibilities}>
              Explore endless possibilities in optimizing space and decluttering
              your surroundings, as we turn your vision into reality with our
              expert craftsmanship and personalized touch.
            </p>
            <p className={styles.elevateYourLifestyle}>
              Elevate your lifestyle with Cabinets, Closets and More -where
              every inch of space is a masterpiece waiting to be unveiled.
            </p>
          </div>
        </div>
        <img
          className={styles.photoIcon}
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
        />
      </section>
      <section className={styles.bathroomsCarpentry1}>
        <img
          className={styles.photoIcon1}
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
        />
        <div className={styles.text1}>
          <h1
            className={styles.experienceThePinnacle}
          >{`Experience the pinnacle of craftsmanship `}</h1>
          <div className={styles.withOurCustomizable}>
            With our customizable casework, showcase your hobbies, your loved
            ones, and your style, turning functional storage into personalized
            expressions that resonate with the heart of your home. Whether it’s
            a treasured coin collectors’ display, a beloved pets’ photos or
            simply a valued keepsake or cherished belonging, display it
            beautifully with our tailorable casework and/or cabinetry.
          </div>
        </div>
      </section>
      <section className={styles.bathroomsCarpentry2}>
        <div className={styles.photo}>
          <img
            className={styles.adobestock47148588611}
            loading="lazy"
            alt=""
            src="/photo1@2x.png"
          />
        </div>
        <div className={styles.photo1}>
          <img
            className={styles.adobestock471485886111}
            loading="lazy"
            alt=""
            src="/photo1@2x.png"
          />
        </div>
      </section>
      <section className={styles.text2}>
        <div className={styles.text3}>
          <div className={styles.woodenMarvels}>WOODEN MARVELS</div>
          <h1
            className={styles.millworkInlays}
          >{`Millwork, Inlays & Decals`}</h1>
        </div>
        <button className={styles.button}>
          <div className={styles.learnMore}>LEARN MORE</div>
        </button>
      </section>
      <section className={styles.bathroomsCarpentry3}>
        <div className={styles.photo2}>
          <img
            className={styles.adobestock471485886112}
            loading="lazy"
            alt=""
            src="/photo1@2x.png"
          />
        </div>
        <div className={styles.photo3}>
          <img
            className={styles.adobestock471485886113}
            loading="lazy"
            alt=""
            src="/photo1@2x.png"
          />
        </div>
      </section>
      <BathroomsCarpentry2 />
      <BathroomsCarpentry1 />
      <footer className={styles.cta}>
        <h1 className={styles.getStartedToday} onClick={onGetStartedTodayClick}>
          Get Started Today
        </h1>
        <b className={styles.contactWithUs}>
          Contact with us today to start on your dream projects.
        </b>
        <button className={styles.contactUsNowButton}>
          <b
            className={styles.contactUsNow}
            onClick={onContactUsNowClick}
          >{`Contact Us Now! `}</b>
        </button>
      </footer>
    </div>
  );
};

export default CaseworkPage;
