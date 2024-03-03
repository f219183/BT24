import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./about-us.module.css";

const AboutUs: NextPage = () => {
  const router = useRouter();

  const onContactUsNowClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className={styles.aboutus}>
      <section className={styles.aboutusHeroSection}>
        <header className={styles.title}>
          <h1 className={styles.aboutUs}>About Us</h1>
          <h1
            className={styles.whereCraftsmanshipMeets}
          >{`Where Craftsmanship Meets Excellence `}</h1>
        </header>
        <div className={styles.photoHolder}>
          <img
            className={styles.adobestock27854565522}
            loading="lazy"
            alt=""
            src="/adobestock-278545655-2-2@2x.png"
          />
        </div>
      </section>
      <section className={styles.textContainer}>
        <div className={styles.textBox}>
          <div className={styles.welcomeToBuildingContainer}>
            <p className={styles.welcomeToBuilding}>
              Welcome to Building Tradition, where craftsmanship meets
              excellence. Established in 2006, we began as a small contracting
              team driven by a passion for quality workmanship. Today, we're a
              leading general contracting company specializing in residential
              and commercial projects, including custom staircases,
            </p>
            <p className={styles.caseworkCabinetryAnd}>
              casework, cabinetry, and more.
            </p>
          </div>
          <div className={styles.whatSetsUs}>
            What sets us apart is our extensive network of trade experts and our
            focus on conceptual design. With these tools, we tackle every job
            with unique expertise, saving our clients time, money, and energy.
          </div>
          <div className={styles.weCollaborateWith}>
            We collaborate with trusted industry professionals to deliver
            outstanding results, blending traditional craftsmanship with
            innovative solutions. At Building Tradition, we prioritize
            excellence in every service, from consultation to execution.
          </div>
          <div className={styles.yourSatisfactionIs}>
            Your satisfaction is our top priority. Whether you're starting a new
            construction project or renovating your space, count on us as your
            trusted partner for high-quality work.
          </div>
          <b className={styles.reachOutToday}>
            Reach out today, and let's discuss how we can help you achieve your
            project goals.
          </b>
        </div>
      </section>
      <footer className={styles.textContainer1}>
        <h1
          className={styles.contactUsNow}
          onClick={onContactUsNowClick}
        >{`Contact Us Now! `}</h1>
      </footer>
    </div>
  );
};

export default AboutUs;
