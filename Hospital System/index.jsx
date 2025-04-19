import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/appointments")
            .then(res => setAppointments(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Hospital Booking System</h1>
            <h2>Appointments</h2>
            <ul>
                {appointments.map(apt => (
                    <li key={apt.id}>Doctor {apt.doctor_id} - {apt.date} at {apt.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;