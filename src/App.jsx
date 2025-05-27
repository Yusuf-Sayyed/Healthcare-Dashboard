import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appContainer}>
    <Sidebar />
    <div className={styles.mainContentArea}>
      <Header />
      {/* DashboardMainContent component will go here later */}
      <DashboardMainContent />
    </div>
  </div>
);

export default App;
