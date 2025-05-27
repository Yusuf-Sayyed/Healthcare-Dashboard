import React from 'react';
import styles from './AnatomySection.module.css';
const anatomyImage = '/anatomy.png';
import { ScanLine } from 'lucide-react';

const AnatomySection = () => {
  return (
    <div className={styles.anatomyContainer}>
      <img src={anatomyImage} alt="Human Anatomy Illustration" className={styles.anatomyImage} />
      {/* Scan icon placed over the heart */}
      <div className={styles.scanHeartIcon}>
        <ScanLine size={45} color="#3d4ef4" strokeWidth={1.2} />
      </div>
      {/* Floating Labels */}
      <div className={styles.heartLabel}>❤️ Healthy Heart</div>
      <div className={styles.scanLegIcon}>
        <ScanLine size={45} color="#3d4ef4" strokeWidth={1.2} />
      </div>
      <div className={styles.legLabel}>🦵 Healthy Leg</div>
    </div>
  );
};
export default AnatomySection;
