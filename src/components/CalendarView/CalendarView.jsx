  import React from 'react';
  import styles from './CalendarView.module.css';
  import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you have Lucide React for icons

  const CalendarView = () => {
    // Sample data for days and times
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    // Updated data structure to include specific time slots for each date
    const calendarData = [
      { date: 25, day: 'Mon', timeSlots: ['10:00', '11:00', '12:00'] },
      { date: 26, day: 'Tues', timeSlots: ['08:00', '09:00', '10:00'] },
      { date: 27, day: 'Wed', timeSlots: ['12:00', '—','13:00'] },
      { date: 28, day: 'Thurs', timeSlots: ['10:00', '11:00', '—'] },
      { date: 29, day: 'Fri', timeSlots: ['—', '14:00', '16:00'] },
      { date: 30, day: 'Sat', timeSlots: ['12:00', '14:00', '15:00'] },
      { date: 31, day: 'Sun', timeSlots: ['09:00', '10:00', '11:00'] },
    ];

    // Placeholder data for highlighting - replace with actual state/logic later
    const selectedDate = 26;
    const selectedTimeSlot = '09:00'; // Example of a specific time slot highlight
    const disabledDate = (28, 30, 31);
    const disabledTimeSlot = ('11:00', '12:00', '9:00');

    return (
      <div className={styles.calendarContainer}>
        <div className={styles.header}>
          <div className={styles.monthYear}>October 2021</div>
          <div className={styles.navigation}>
            <ChevronLeft size={20} className={styles.navIcon} />
            <ChevronRight size={20} className={styles.navIcon} />
          </div>
        </div>

        <div className={styles.dayHeaders}>
          {daysOfWeek.map(day => (
            <div key={day} className={styles.dayHeader}>{day}</div>
          ))}
        </div>

        <div className={styles.calendarGrid}>
          {calendarData.map((dayData, dateIndex) => (
            <div key={dayData.date} className={`${styles.dayCell} ${dayData.date === selectedDate ? styles.selectedDay : ''}`}> {/* Highlight selected day */}
              <div className={styles.date}>{dayData.date}</div>
              <div className={styles.timeSlots}>
                {dayData.timeSlots.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className={
                      `${styles.timeSlot}
                      ${dayData.date === 26 && time === '09:00' ? styles.selectedTimeSlot : ''}
                      ${dayData.date === 28 && time === '11:00' ? styles.disabledTimeSlot : ''}
                      ${dayData.date === 30 && (time === '12:00') ? styles.disabledTimeSlot : ''}
                      ${dayData.date === 31 && (time === '09:00') ? styles.disabledTimeSlot: ''}                      `}
                  >
                    {time} {/* Display time or dash */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default CalendarView;
