import { useNavigate } from 'react-router-dom';
import styles from './ResultCard.module.css';

const ResultCard = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Chaos Score: <span className={styles.score}>42 / 100</span>
        </h2>
        <p className={styles.text}>
          You’re surviving, not thriving. WorkElate can halve your chaos and give you back your evenings.
        </p>
        <div className={styles.projection}>
          Projected With WorkElate: <strong>21</strong> ↓ 50% reduction
        </div>
        <button className={styles.cta} onClick={() => navigate('/')}>
          Try Again →
        </button>
      </div>
    </section>
  );
};

export default ResultCard;
