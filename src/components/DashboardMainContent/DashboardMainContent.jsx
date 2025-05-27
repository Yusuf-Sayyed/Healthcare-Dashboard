import React, { useState } from 'react';
import styles from './DashboardMainContent.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import RightColumnContainer from '../RightColumnContainer/RightColumnContainer';
import CalendarView from '../CalendarView/CalendarView';

const DashboardMainContent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("This Week");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.leftColumnContent}>
        <div className={styles.topRow}>
        <div className={styles.anatomyWrapper}>
      <h2 className={styles.dashboardTitle}>Dashboard</h2>
      <AnatomySection />
    </div>
        <div className={styles.HealthStatusWrapper}>

          </div>
          <div className={styles.cards}>
          <div className={styles.thisWeekDropdown}
              onClick= {() => setShowDropdown(!showDropdown)}>
              {selectedOption}
              <span className='styles.chevron'>▼</span>
              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <div onClick={() => handleSelect("Today")}>Today</div>
                  <div onClick={() => handleSelect("This Week")}>This Week</div>
                  <div onClick={() => handleSelect("This Month")}>This Month</div>
                </div>
              )}
          </div>
            <HealthStatusCards />
          </div>
        </div>
        <div className={styles.bottomRow}>
          <ActivityFeed />
        </div>
        <div className={styles.rightColumnBelow}>
          <RightColumnContainer />
        </div>
      </div>

      <div className={styles.rightColumnContent}>
        <RightColumnContainer />
      </div>

    </div>
  );
};

export default DashboardMainContent;
