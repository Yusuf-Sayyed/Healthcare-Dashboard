import React from 'react';
import styles from './ActivityFeed.module.css';

const activityData = [
  { day: 'Mon', bars: [30, 50, 70, 40] },
  { day: 'Tues', bars: [60, 30] },
  { day: 'Wed', bars: [80, 45] },
  { day: 'Thurs', bars: [45, 60] },
  { day: 'Fri', bars: [20, 35, 50] },
  { day: 'Sat', bars: [65, 30] },
  { day: 'Sun', bars: [40, 55] },
];

const ActivityFeed = () => {
  return (
    <div className={styles.activityContainer}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Activity</h3>
        <span className={styles.appointmentCount}>3 appointments this week</span>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.barsContainer}>
          {activityData.map((dayData, index) => (
            <div key={index} className={styles.dayColumn}>
              <div className={styles.barGroup}>
                {dayData.bars.map((height, barIndex) => (
                  <div
                    key={barIndex}
                    className={styles.bar}
                    style={{
                      height: `${height}px`, // Using pixel values instead of percentages
                      backgroundColor: barIndex % 2 === 0 ? '#3366ff' : '#4AC1C3'
                    }}
                  />
                ))}
              </div>
              <div className={styles.dayLabel}>{dayData.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;