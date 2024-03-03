import type { NextPage } from "next";
import Card1 from "../components/card1";
import styles from "./carpentry-page.module.css";

const CarpentryPage: NextPage = () => {
  return (
    <div className={styles.carpentryPage}>
      <div className={styles.carpentryHeroSection}>
        <header className={styles.titleSection}>
          <h1 className={styles.carpentry}>Carpentry</h1>
          <div className={styles.byBuildingTradition}>
            by Building Tradition
          </div>
          <div className={styles.craftingSuccessFrom}>
            Crafting Success from the Ground Up: Offering Comprehensive
            Modelling, Planning, Construction Design and Management for Every
            Phase of Your Project
          </div>
        </header>
        <Card1
          photoPlaceholder="/photo-placeholder2@2x.png"
          design="Design"
          aVirtualCanvasForYourDrea="Crafting your dream home from concept to completion with expert precision and attention to detail"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-12@2x.png"
          design={`Additions & Renovations`}
          aVirtualCanvasForYourDrea="Expand your living space seamlessly with custom-built additions tailored to your unique needs"
          buttonFrameLeft="396px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="unset"
          lEARNMOREPadding="0px var(--padding-sm) 0px var(--padding-8xs)"
          propFlex="unset"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-22@2x.png"
          design="Kitchens "
          aVirtualCanvasForYourDrea="Elevating the heart of your home with bespoke kitchen designs that blend functionality and style."
          buttonFrameLeft="738px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px var(--padding-lgi) 0px 0px"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-32@2x.png"
          design="Washrooms"
          aVirtualCanvasForYourDrea="Transforming your bathrooms into luxurious retreats with personalized designs and accessible features."
          buttonFrameLeft="1080px"
          buttonFrameTop="193px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px var(--padding-sm) 0px var(--padding-8xs)"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-41@2x.png"
          design="Accessible Construction"
          aVirtualCanvasForYourDrea="Creating safe and inclusive living environments with expertly crafted accessibility solutions."
          buttonFrameLeft="54px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px var(--padding-sm) 0px var(--padding-8xs)"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-51@2x.png"
          design="Trim Work"
          aVirtualCanvasForYourDrea="Adding the perfect finishing touches to your space with exquisite trim and molding installations."
          buttonFrameLeft="396px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px var(--padding-sm) 0px var(--padding-8xs)"
          propFlex="1"
        />
        <Card1
          photoPlaceholder="/photo-placeholder-61@2x.png"
          design={`Decks & Patios`}
          aVirtualCanvasForYourDrea="Enhancing your outdoor living experience with beautifully designed and expertly constructed decks and patios."
          buttonFrameLeft="738px"
          buttonFrameTop="778px"
          lEARNMOREAlignSelf="stretch"
          lEARNMOREPadding="0px var(--padding-lgi) 0px 0px"
          propFlex="1"
        />
        <div className={styles.card}>
          <div className={styles.wrapperPhotoPlaceholder}>
            <img
              className={styles.photoPlaceholderIcon}
              alt=""
              src="/photo-placeholder-7@2x.png"
            />
          </div>
          <div className={styles.mainText}>
            <h1 className={styles.design}>{`& Much More!`}</h1>
          </div>
          <div className={styles.paragraph}>
            <div
              className={styles.aVirtualCanvas}
            >{`Ask us about how we can help your with your unique project needs! `}</div>
          </div>
          <div className={styles.buttonFrame}>
            <div className={styles.button}>
              <div className={styles.learnMore}>LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.carpentrySection2}>
        <div className={styles.text}>
          <h1 className={styles.elevateEveryAspect}>
            Elevate every aspect of your living space with our comprehensive
            carpentry services
          </h1>
          <div className={styles.fromCustomHome}>
            From custom home construction to accessible renovations, we
            specialize in creating environments that seamlessly blend
            functionality and aesthetics, ensuring your space reflects your
            lifestyle and exceeds your expectations.
          </div>
        </div>
        <div className={styles.photoHolder}>
          <img
            className={styles.adobestock34964374511}
            loading="lazy"
            alt=""
            src="/adobestock-349643745-1-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.shoeMoulding}>
        <div className={styles.heading}>
          <h1 className={styles.elevateYourHomeContainer}>
            <p className={styles.elevateYourHome}>
              Elevate Your Home with Shoe Moulding:
            </p>
            <p className={styles.thePerfectBlend}>
              The Perfect Blend of Style and Function
            </p>
          </h1>
        </div>
        <div className={styles.firstParagraph}>
          <div className={styles.first}>
            <div className={styles.haveYouEver}>
              Have you ever heard of shoe moulding? It’s a simple yet incredibly
              versatile addition to your home's trim that adds class, style,
              beauty, and function.
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.shoeMouldingIs}>
              Shoe moulding is a small piece of trim that sits at the bottom of
              your baseboard, offering protection from various elements like
              shoes, furniture legs, and even the vacuum cleaner. It not only
              enhances the aesthetic appeal of your space but also serves a
              practical purpose in safeguarding your walls and baseboards from
              daily wear and tear.
            </div>
          </div>
        </div>
        <div className={styles.photoPanel}>
          <div className={styles.photoHolder1}>
            <img
              className={styles.shoemoulding1Icon}
              loading="lazy"
              alt=""
              src="/shoemoulding-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameWithInfoParent}>
          <div className={styles.frameWithInfo}>
            <div className={styles.frameWithDescriptionWrapper}>
              <div className={styles.frameWithDescription}>
                <div className={styles.whatMakesShoe}>
                  What makes shoe moulding even more appealing is its ease of
                  installation. Depending on the material you choose, it can be
                  a simple do-it-yourself project. You can cut it with garden
                  shears or, for a more precise fit, try your hand at coping
                  with a coping saw.
                </div>
              </div>
            </div>
            <div className={styles.lastBoldLineFrame}>
              <div className={styles.ifYoureInterested}>
                If you're interested in learning more about how to install shoe
                moulding, be sure to sign up for our newsletter. You'll be the
                first to know when we release our how-to video, guiding you
                through the process step by step.
              </div>
            </div>
          </div>
          <footer className={styles.lastBoldLine}>
            <h3 className={styles.elevateTheLook}>
              Elevate the look and functionality of your home with shoe moulding
              – a small detail that makes a big difference.
            </h3>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default CarpentryPage;
