import React from 'react';
import styles from './HealthStatusCards.module.css';
import { healthStatusData } from '../../data/healthStatusData.jsx';

const HealthStatusCards = () => {
  if (!healthStatusData || healthStatusData.length === 0) {
    return <div className={styles.emptyState}>No health data available.</div>;
  }

  return (

    <div className={styles.cardsContainer}>
      {healthStatusData.map((item, index) => {
        const iconColor = item.icon?.props?.color || '#4caf50'; // fallback color

        return (
          <div key={index} className={styles.healthCard}>
            <div className={styles.cardIcon}>{item.icon}</div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>{item.label}</div>
              <div className={styles.cardDate}>Date: {item.date}</div>
              <div className={styles.statusBar}>
                <div
                  className={styles.statusBarFill}
                  style={{
                    width: `${item.status}%`,
                    backgroundColor: item.color
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
