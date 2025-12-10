import styles from "./WorkdayComparison.module.css";

const WorkdayComparison = () => (
  <section className={styles.section} id="workday">
    <div className={styles.bgGlow} />
    <div className={styles.container}>
      <h2 className={styles.heading}>Be Honest: Is This Your Workday?</h2>

      <div className={styles.grid}>

        <div className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.tag}>Current Reality</div>
              <h3 className={styles.title} style={{ color: "#FF4D4F" }}>
                Current Reality Check
              </h3>
            </div>

            <div className={styles.body}>
              <p className={styles.line}>
                <span className={styles.time}>9:02 AM</span> — Open Slack, Gmail, WhatsApp, Notion, Asana, Sheets.
              </p>
              <p className={styles.line}>Brain officially fried.</p>

              <p className={styles.line}>
                <span className={styles.time}>12:17 PM</span> — Still aligning on who owns what.
              </p>
              <p className={styles.line}>Zero real work shipped.</p>
            </div>

            <div className={styles.footer}>
              <span className={styles.pulse} />
              <span className={styles.footerText}>Chaos mode: ON</span>
            </div>
          </div>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.tag}>WorkElate Version</div>
              <h3 className={styles.title} style={{ color: "#00E6FF" }}>
                The WorkElate Version
              </h3>
            </div>

            <div className={styles.body}>
              <p className={styles.line}>One workspace. Clear owners. Clear outcomes.</p>
              <p className={styles.line}>Less “sync call” — more “it’s already done”.</p>
            </div>

            <div className={styles.footer}>
              <span className={styles.pulse} />
              <span className={styles.footerText}>Flow mode: ON</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default WorkdayComparison;
