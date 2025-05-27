    import React from "react";
    import styles from "./RightColumnContainer.module.css";
    import CalendarView from "../CalendarView/CalendarView";
    import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
    import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
    import CustomTeethDoc from "../icons/CustomTeethDoc";
    import {

    Syringe,
    Eye,
    HeartPulse,
    Brain,
    } from "lucide-react";

    const specificAppointments = [
    {
        type: "Dentist",
        time: "09:00-11:00",
        doctor: "Dr. Cameron Williamson",
        icon: <CustomTeethDoc size={6} color="" />,
        color: "#3366ff",
    },
    {

        type: "Physiotherapy Appointment",
        time: "11:00-12:00",
        doctor: "Dr. Kevin Djones",
        icon: "💪🏻",
        color: "#EDEFFF",
        textColor: "black",
    },
    ];

    const upcomingScheduleData = [
    {
        day: "On Thursday",
        appointments: [
        {
            description: "Health checkup complete",
            time: "11:00 AM",
            icon: <Syringe size={20} color="#28C76F" />,
            color: "#EDEFFF",
        },
        {
            description: "Ophthalmologist",
            time: "14:00 PM",
            icon: <Eye size={20} color="#5570F1" />,
            color: "#EDEFFF",
        },
        ],
    },
    {
        day: "On Saturday",
        appointments: [
        {
            description: "Cardiologist",
            time: "12:00 AM",
            icon: '❤️',
            color: "#EDEFFF",
        },
        {
            description: "Neurologist",
            time: "16:00 PM",
            icon: '👨‍⚕️',
            color: "#EDEFFF",
        },
        ],
    },
    ];

    const RightColumnContainer = () => {
    return (
        <div className={styles.rightContainer}>
        <CalendarView />

        <div className={styles.specificAppointmentsRow}>
            {specificAppointments.map((appointment, index) => (
            <SimpleAppointmentCard
                key={index}
                type={appointment.type}
                time={appointment.time}
                doctor={appointment.doctor}
                icon={appointment.icon}
                color={appointment.color}
                textColor={appointment.textColor}
            />
            ))}
        </div>

        <UpcomingSchedule upcomingScheduleData={upcomingScheduleData} />
        </div>
    );
    };

    export default RightColumnContainer;
