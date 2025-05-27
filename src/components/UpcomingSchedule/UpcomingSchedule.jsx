    import React from 'react';
    import styles from './UpcomingSchedule.module.css';

    const UpcomingSchedule = ({ upcomingScheduleData }) => {
        return (
            <div className={styles.upcomingScheduleContainer}>
                <h2 className={styles.upcomingScheduleTitle}> The Upcoming Schedule</h2>
                {upcomingScheduleData.map((dayData, index) => (
    <div key={index} className={styles.dayContainer}>
        <h3 className={styles.scheduleDay}>{dayData.day}</h3>
        <div className={styles.appointmentsRow}>
        {dayData.appointments.map((appointment, apptIndex) => (
            <div key={apptIndex} className={styles.appointmentItem} style={{ backgroundColor: appointment.color }}>

            <div className={styles.details}>
                <div className={styles.description}>{appointment.description}</div>
                <div className={styles.time}>{appointment.time}</div>
            </div>
            <div className={styles.icon}>{appointment.icon}</div>
            </div>
        ))}
        </div>
    </div>
    ))}

            </div>
        );
    };

    export default UpcomingSchedule;