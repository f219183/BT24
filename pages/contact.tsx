import type { NextPage } from "next";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.contact}>
      <section className={styles.photo}>
        <h1 className={styles.contactUs}>Contact Us</h1>
      </section>
      <section className={styles.contactFormSection}>
        <form className={styles.contactUs1}>
          <div className={styles.inputFieldContainer}>
            <h1 className={styles.getInTouchContainer}>
              <span className={styles.getIn}>{`Get in `}</span>
              <span className={styles.touch}>touch</span>
              <span className={styles.span}>{` `}</span>
            </h1>
          </div>
          <div className={styles.bringYourAmazing}>
            Bring your amazing imagination into reality by getting in touch with
            us.
          </div>
          <div className={styles.containerFrame}>
            <div className={styles.textFields}>
              <div className={styles.input}>
                <div className={styles.containerWrapper}>
                  <div className={styles.container}>
                    <div className={styles.textField}>
                      <input
                        className={styles.labelText}
                        placeholder="First name"
                        type="text"
                      />
                      <div className={styles.contactUsCallToAction} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input1}>
                <div className={styles.containerContainer}>
                  <div className={styles.container1}>
                    <div className={styles.textField1}>
                      <input
                        className={styles.labelText1}
                        placeholder="Last name"
                        type="text"
                      />
                      <div className={styles.textFieldChild} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input2}>
                <div className={styles.frameDiv}>
                  <div className={styles.container2}>
                    <div className={styles.textField2}>
                      <input
                        className={styles.labelText2}
                        placeholder="City"
                        type="text"
                      />
                      <div className={styles.textFieldItem} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input3}>
                <div className={styles.containerWrapper1}>
                  <div className={styles.container3}>
                    <div className={styles.textField3}>
                      <input
                        className={styles.labelText3}
                        placeholder="Contact Phone"
                        type="text"
                      />
                      <div className={styles.textFieldInner} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input4}>
                <div className={styles.containerWrapper2}>
                  <div className={styles.container4}>
                    <div className={styles.textField4}>
                      <input
                        className={styles.labelText4}
                        placeholder="E-mail"
                        type="text"
                      />
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input5}>
                <div className={styles.containerWrapper3}>
                  <div className={styles.container5}>
                    <div className={styles.textField5}>
                      <input
                        className={styles.labelText5}
                        placeholder="Project Details"
                        type="text"
                      />
                      <div className={styles.textFieldChild1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonFrame}>
            <button className={styles.button}>
              <div className={styles.text}>Submit</div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
