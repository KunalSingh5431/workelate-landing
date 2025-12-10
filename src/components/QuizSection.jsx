import { useState } from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './QuizSection.module.css';

const questions = [
  {
    question: 'When a task is “done”, what does it actually mean in your team?',
    options: ['It’s in some Trello column', 'Someone updated a doc. Maybe.', 'We shipped, measured, and learned'],
  },
  {
    question: 'How often do you feel your meetings are productive?',
    options: ['Rarely', 'Sometimes', 'Always'],
  },
  {
    question: 'Your brain after closing your laptop at the end of the day:',
    options: ['Still open in 17 tabs', 'Finally relaxed', 'Half asleep, half thinking'],
  },
  {
    question: 'What’s your team’s approach to urgent tasks?',
    options: ['Firefighting', 'Prioritized planning', 'Depends on the day'],
  },
  {
    question: 'How do you celebrate small wins?',
    options: ['Emoji reactions', 'Team shoutout', 'We barely notice'],
  },
];

const QuizSection = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      console.log('Quiz answers:', answers);
      navigate('/result');
    }
  };

  const currentQuestion = questions[currentQ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Mini Therapy for Overworked Founders & PMs</h2>
      <p className={styles.sub}>Answer honestly. We won’t judge (much).</p>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <h3 className={styles.question}>{currentQuestion.question}</h3>
          <Radio.Group
            onChange={(e) => handleSelect(e.target.value)}
            value={answers[currentQ]}
            className={styles.radioGroup}
          >
            {currentQuestion.options.map((opt, i) => (
              <Radio key={i} value={opt} className={styles.radio}>
                {opt}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        <button
          className={styles.cta}
          disabled={!answers[currentQ]}
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
