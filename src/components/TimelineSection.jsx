import styles from "./TimelineSection.module.css";

const TimelineSection = () => (
  <section className={styles.section} id="timeline">
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Day in the Meeting Matrix</h2>
      <p className={styles.sub}>A clean snapshot of what “progress” usually looks like—until the system is fixed.</p>

      <div className={styles.row}>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.time}>12:17 PM</div>
          <div className={styles.text}>🧑‍🤝‍🧑 Still aligning on who owns what. Zero real work shipped.</div>
        </div>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.time}>3:45 PM</div>
          <div className={styles.text}>🔄 “Let’s take this offline.” Translation: Another meeting tomorrow.</div>
        </div>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.time}>7:49 PM</div>
          <div className={styles.text}>🧠 You close your laptop… but your brain is still in 17 tabs.</div>
        </div>

      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.cta} type="button">
          I’m Done With Tool Circus →
        </button>
      </div>
    </div>
  </section>
);

export default TimelineSection;
