import { useState } from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './QuizSection.module.css';

const questions = [
  {
    question: 'When a task is “done”, what does it actually mean in your team?',
    options: [
      { label: 'It’s in some Trello column', score: 0 },          // bad
      { label: 'Someone updated a doc. Maybe.', score: 1 },      // neutral
      { label: 'We shipped, measured, and learned', score: 2 },  // good
    ],
  },
  {
    question: 'How often do you feel your meetings are productive?',
    options: [
      { label: 'Rarely', score: 0 },
      { label: 'Sometimes', score: 1 },
      { label: 'Always', score: 2 },
    ],
  },
  {
    question: 'Your brain after closing your laptop at the end of the day:',
    options: [
      { label: 'Still open in 17 tabs', score: 0 },
      { label: 'Half asleep, half thinking', score: 1 },
      { label: 'Finally relaxed', score: 2 },
    ],
  },
  {
    question: 'What’s your team’s approach to urgent tasks?',
    options: [
      { label: 'Firefighting', score: 0 },
      { label: 'Depends on the day', score: 1 },
      { label: 'Prioritized planning', score: 2 },
    ],
  },
  {
    question: 'How do you celebrate small wins?',
    options: [
      { label: 'We barely notice', score: 0 },
      { label: 'Emoji reactions', score: 1 },
      { label: 'Team shoutout', score: 2 },
    ],
  },
];

const getResultFromScore = (totalScore, maxScore) => {
  const ratio = totalScore / maxScore; // 0..1

  // 3 outcomes (good / mixed / bad) — dynamic based on combination
  if (ratio >= 0.7) {
    return {
      key: 'GOOD',
      title: 'Momentum Mode: You’re building the right habits',
      message:
        'Your team is shipping, learning, and protecting focus—keep doubling down on clarity and tiny wins.',
    };
  }
  if (ratio >= 0.4) {
    return {
      key: 'MIXED',
      title: 'The “almost there” zone: stabilize the basics',
      message:
        'You’ve got some healthy signals, but the gaps (meetings, priorities, recovery) are still leaking energy—tighten one loop at a time.',
    };
  }
  return {
    key: 'BAD',
    title: 'Burnout red flag: the system is running on fumes',
    message:
      'Your workflow is mostly reactive right now—start by protecting focus (fewer meetings), and make “done” mean shipped + learned.',
  };
};

const QuizSection = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);

  // store selected option index per question (or null)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const currentQuestion = questions[currentQ];

  const handleSelect = (optionIndex) => {
    const next = [...answers];
    next[currentQ] = optionIndex;
    setAnswers(next);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      return;
    }

    // compute dynamic result from combination of good/neutral/bad choices
    let total = 0;
    let max = 0;

    questions.forEach((q, idx) => {
      const selected = answers[idx];
      const opt = selected === null ? null : q.options[selected];
      if (opt) total += opt.score;
      // max score is always "best" option (2) per question here
      max += 2;
    });

    const result = getResultFromScore(total, max);

    // pass everything to result page (dynamic, not static)
    navigate('/result', {
      state: {
        answers,
        result,
        totalScore: total,
        maxScore: max,
      },
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
          <div className={styles.kicker}>Overwork Alert</div>
          <h2 className={styles.title}>Your Overwork Scorecard</h2>
          <p className={styles.lead}>
           No filters, no judgment—just your true vibe in a few clicks.
          </p>
        </div>
      <h2 className={styles.heading}>Mini Therapy for Overworked Founders & PMs</h2>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <h3 className={styles.question}>{currentQuestion.question}</h3>

          <Radio.Group
            onChange={(e) => handleSelect(e.target.value)}
            value={answers[currentQ]}
            className={styles.radioGroup}
          >
            {currentQuestion.options.map((opt, i) => (
              <Radio key={i} value={i} className={styles.radio}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        <button
          className={styles.cta}
          disabled={answers[currentQ] === null}
          onClick={handleNext}
        >
          {currentQ < questions.length - 1 ? 'Next →' : 'Finish →'}
        </button>
      </div>

      <p className={styles.progress}>
        Question {currentQ + 1} of {questions.length}
      </p>
    </section>
  );
};

export default QuizSection;
