// ChaosQuiz.jsx
import { useState } from 'react';
import styles from './ChaosQuiz.module.css';
import { CalculatorIcon } from 'lucide-react';

const offlineOptions = ['Every damn day', 'Often', 'Rarely'];

const ChaosQuiz = () => {
  // Values (0–10) like your screenshots
  const [tools, setTools] = useState(10);
  const [meetings, setMeetings] = useState(8);
  const [offline, setOffline] = useState('Every damn day');

  // Show result card inside same page (below quiz)
  const [showResult, setShowResult] = useState(false);

  // ----- scoring (lower chaos = better score) -----
  const offlineScore = offline === 'Rarely' ? 2 : offline === 'Often' ? 1 : 0;

  // max: (10 for tools) + (10 for meetings) + (2 for offline) = 22
  const totalScoreRaw = (10 - tools) + (10 - meetings) + offlineScore;
  const maxScoreRaw = 22;
  const percentage = Math.round((totalScoreRaw / maxScoreRaw) * 100);

  // result buckets (good / medium / bad)
  const result = (() => {
    if (percentage >= 70) {
      return {
        key: 'GOOD',
        levelLabel: 'Thriving (Good)',
        message:
          "You’re running your week like a grown-up: the work is measurable, the meetings are contained, and recovery is real.",
      };
    }
    if (percentage >= 40) {
      return {
        key: 'MEDIUM',
        levelLabel: 'Stabilizing (Medium)',
        message:
          "You’ve got some healthy habits—now tighten the system (fewer meetings, clearer ownership, and real shutdown moments).",
      };
    }
    return {
      key: 'BAD',
      levelLabel: 'Surviving (Not Thriving)',
      message:
        "You’re surviving on fumes. Cut the noise first (meetings/tools), then rebuild a repeatable cadence with clear ‘done’.",
    };
  })();

  // WorkElate projection (matches the “reduction” vibe from your screenshots)
  const reductionRate = result.key === 'BAD' ? 0.53 : result.key === 'MEDIUM' ? 0.40 : 0.25;
  const projected = Number((percentage * (1 - reductionRate)).toFixed(2));
  const reductionLabel = Math.round(reductionRate * 100);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.page}>
       <div className={styles.header}>
                 <div className={styles.kicker}>Workload Reality Check.</div>
                 <h2 className={styles.title}>Your Weekly Work Anxiety Score</h2>
                 <p className={styles.lead}>
                   Let’s quantify your chaos (and then fix it)
                 </p>
          </div>

        {/* --- QUIZ CARD --- */}
        <div className={styles.card}>
          <div className={styles.qRow}>
            <div className={styles.qLabel}>How many tools do you use daily?</div>
            <div className={styles.qValue}>{tools}</div>
            <input
              className={styles.slider}
              type="range"
              min="0"
              max="10"
              value={tools}
              onChange={(e) => setTools(Number(e.target.value))}
            />
          </div>

          <div className={styles.qRow}>
            <div className={styles.qLabel}>Hours/week in &quot;alignment meetings&quot;?</div>
            <div className={styles.qValue}>{meetings}</div>
            <input
              className={styles.slider}
              type="range"
              min="0"
              max="10"
              value={meetings}
              onChange={(e) => setMeetings(Number(e.target.value))}
            />
          </div>

          <div className={styles.qRow}>
            <div className={styles.qLabel}>How often do you say &quot;Let&apos;s take this offline&quot;?</div>
            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={offline}
                onChange={(e) => setOffline(e.target.value)}
              >
                {offlineOptions.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
              <div className={styles.selectChevron} aria-hidden="true">⌄</div>
            </div>
          </div>

          <button className={styles.submit} onClick={handleSubmit}>
            Calculate My Chaos Score
          </button>
        </div>

        {/* --- RESULT PANEL (appears below quiz in same section) --- */}
        {showResult && (
          <div className={styles.resultWrap}>
            <div className={styles.resultCard}>
              <div className={styles.resultTop}>
                <div className={`${styles.circle} ${styles[result.key.toLowerCase()]}`}>
                  <div className={styles.circleScore}>{percentage}</div>
                  <div className={styles.circleMax}>/100</div>
                </div>

                <div className={styles.resultInfo}>
                  <div className={styles.resultLevel}>
                    Chaos Level:{' '}
                    <span className={styles.levelText}>{result.levelLabel}</span>
                    <span className={styles.warn}>⚠</span>
                  </div>
                  <p className={styles.resultMsg}>{result.message}</p>
                </div>
              </div>

              <div className={styles.resultBottom}>
                <div className={styles.projTitle}>Projected With WorkElate</div>

                <div className={styles.bars}>
                  <div className={styles.barRow}>
                    <div className={styles.barLabel}>Current: {percentage}</div>
                    <div className={styles.bar}>
                      <div className={styles.barFillCurrent} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>

                  <div className={styles.barRow}>
                    <div className={styles.barLabel}>WorkElate: {projected}</div>
                    <div className={styles.bar}>
                      <div className={styles.barFillWork} style={{ width: `${projected}%` }} />
                    </div>
                  </div>
                </div>

                <div className={styles.reduction}>
                  ↓ {reductionLabel}% reduction in chaos score
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChaosQuiz;
