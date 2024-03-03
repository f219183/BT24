import type { NextPage } from "next";
import TextFrameCustomHomes from "../components/text-frame-custom-homes";
import RightBox from "../components/right-box";
import TheBuildingTraditionProcess from "../components/the-building-tradition-process";
import styles from "./custom-homes.module.css";

const CustomHomes: NextPage = () => {
  return (
    <div className={styles.customHomes}>
      <TextFrameCustomHomes />
      <div className={styles.whyChooseUsFrame}>
        <h2 className={styles.whyChooseUs}>Why Choose Us?</h2>
        <h2 className={styles.excellenceInCustom}>
          Excellence in Custom Home Building
        </h2>
      </div>
      <section className={styles.photoHolder}>
        <img
          className={styles.adobestock13732211131}
          alt=""
          src="/adobestock-137322111-3-1@2x.png"
        />
      </section>
      <RightBox />
      <TheBuildingTraditionProcess />
    </div>
  );
};

export default CustomHomes;
