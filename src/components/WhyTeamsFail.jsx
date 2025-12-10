import styles from "./WhyTeamsFail.module.css";

const reasons = [
  {
    title: "Expectations Are Unclear",
    description:
      "\"I thought you meant…\" — the most expensive sentence in business. Ambiguity kills execution.",
  },
  {
    title: "Work Comes Back Half-Cooked",
    description:
      "Incomplete deliverables. Missing context. Rework loops. Your team isn’t lazy — the system is leaking.",
  },
  {
    title: "Follow-Ups Don’t Happen",
    description:
      "\"I forgot.\" \"It fell through the cracks.\" When everything is urgent, nothing moves.",
  },
  {
    title: "Progress Is Invisible",
    description:
      "Without visibility, leaders micromanage and teams overwork. Everyone loses.",
  },
  {
    title: "Knowledge Lives in People’s Heads",
    description:
      "When information isn't shared, everything slows down. Decisions become risky.",
  },
  {
    title: "Work Is Scattered Everywhere",
    description:
      "Slack, WhatsApp, Notion, random docs, sticky notes — execution becomes chaos.",
  },
];

const WhyTeamsFail = () => (
  <section className={styles.section} id="why">
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.kicker}>The real blockers</div>
        <h2 className={styles.title}>Why teams fail (even when they’re capable)</h2>
        <p className={styles.lead}>
          Not a talent problem — an execution problem. Fix the system, and performance follows.
        </p>
      </div>

      {/* 6 cards: 3 on top row + 3 bottom row (centered) */}
      <div className={styles.grid}>
        {reasons.map((r, i) => (
          <div key={i} className={styles.slot}>
            <div className={styles.card} tabIndex={0}>
              <div className={styles.cardTop}>
                <div className={styles.badge}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
              </div>
              <p className={styles.cardDesc}>{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTeamsFail;
