import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ResultCard.module.css';

const ResultCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const totalScore = state?.totalScore ?? null;
  const maxScore = state?.maxScore ?? null;
  const result = state?.result ?? null;

  const isReady = totalScore !== null && maxScore !== null && result;
  const percentage = isReady ? Math.round((totalScore / maxScore) * 100) : 0;

  const level = !isReady
    ? 'neutral'
    : percentage >= 70
      ? 'good'
      : percentage >= 40
        ? 'medium'
        : 'bad';

  const levelClass =
    level === 'good' ? styles.good :
    level === 'medium' ? styles.medium :
    level === 'bad' ? styles.bad :
    '';

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.kicker}>Mini Therapy for Founders & PMs</div>
        <h2 className={styles.headTitle}>Discover Your Chaos Score</h2>
        <p className={styles.headLead}>
          Answer honestly, see where you stand, and learn how to work smarter — not harder.
        </p>
      </header>

      {/* Result Card Section */}
      <section className={styles.cardSection}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Chaos Score:{' '}
            <span className={`${styles.score} ${levelClass}`}>{percentage} / 100</span>
          </h2>

          <p className={styles.text}>
            {isReady
              ? result.message
              : 'Complete the quiz first to see your chaos score and suggested fixes.'}
          </p>

          <div className={styles.projection}>
            {isReady ? (
              <>
                Projected with WorkElate:{' '}
                <strong>{Math.max(0, Math.round(percentage * 0.5))}</strong> ↓ 50% chaos reduction
              </>
            ) : (
              <>Your improvement projection will appear here after the quiz.</>
            )}
          </div>

          <button className={styles.cta} onClick={() => navigate('/')}>
            Try Again →
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultCard;
