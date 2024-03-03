import type { NextPage } from "next";
import styles from "./newsletter-c-t-a.module.css";

const NewsletterCTA: NextPage = () => {
  return (
    <footer className={styles.newsletterCta}>
      <div className={styles.content}>
        <h1 className={styles.stayInLoop}>Stay in loop with us.</h1>
        <div className={styles.keepUpTo}>
          Keep up to date with our new products, services and anything else you
          might have missed.
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.form}>
          <div className={styles.textInput}>
            <input
              className={styles.placeholder}
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <button className={styles.button}>
            <b className={styles.learnMore}>Sign up</b>
          </button>
        </div>
        <div className={styles.byClickingSignContainer}>
          {`By clicking Sign Up you're confirming that you agree with our `}
          <span className={styles.termsAndConditions}>
            Terms and Conditions
          </span>
          .
        </div>
      </div>
    </footer>
  );
};

export default NewsletterCTA;
