import GradientButton from "./GradientButton";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* subtle floating accents */}
      <span className={`${styles.orb} ${styles.orb1}`} />
      <span className={`${styles.orb} ${styles.orb2}`} />
      <span className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.inner}>
        <div className={styles.topBadge}>Workelate • execution-first workflow</div>

        <h1 className={styles.title}>
          Stop managing tools. <span className={styles.titleAccent}>Start executing work.</span>
        </h1>

        <p className={styles.desc}>
          Most teams don’t fail because they lack talent — they fail because expectations
          are blurry, follow-ups slip, and progress stays invisible. Make work
          measurable, accountable, and fast.
        </p>

        <div className={styles.ctaRow}>
          <GradientButton className={styles.btnPrimary}>Start Free Trial</GradientButton>
          <GradientButton className={styles.btnSecondary}>Watch Demo</GradientButton>
        </div>

        <div className={styles.meta}>
          <div className={styles.pill}>No credit card</div>
          <div className={styles.pill}>Instant setup</div>
          <div className={styles.pill}>Team-ready</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
