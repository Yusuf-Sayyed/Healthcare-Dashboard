import React from 'react';
import styles from './SimpleAppointmentCard.module.css';
import { BriefcaseMedical, Syringe } from 'lucide-react'; // Import necessary icons

const SimpleAppointmentCard = ({ type, time, doctor, icon, color, textColor }) => {
  return (
    <div className={styles.appointmentCard} style={{ backgroundColor: color }}>
      <div className={styles.appointmentInfo}>
        <div className={styles.appointmentType} style={{ color: textColor || undefined }}>{type}</div>
        <div className={styles.appointmentTime} style={{ color: textColor || undefined }}>{time}</div>
        <div className={styles.doctorName} style={{ color: textColor || undefined }}>{doctor}</div>
      </div>
      <div className={styles.appointmentIcon} style={{ color: textColor || undefined }}>
        {icon}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
