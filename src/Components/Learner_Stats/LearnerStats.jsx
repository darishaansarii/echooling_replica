import React from 'react';
import styles from './LearnerStats.module.css';

const data = [
  { count: 1478 },
  { count: 1731 },
  { count: 280 },
  { count: 1045 }
];

const LearnerStats = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.title}>Successfully Trained</p>
          <h1 className={styles.count}>{item.count}</h1>
          <p className={styles.subtitle}>Enrolled Learners</p>
        </div>
      ))}
    </div>
  );
};

export default LearnerStats;
