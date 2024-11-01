import { useState } from 'react'
import './App.css'
import data from './assets/data.json'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedWeek, setSelectedWeek] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleWeekChange = (event) => {
        setSelectedWeek(event.target.value)
    }

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value)
      }

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    }

    const filteredClasses = data.weeks
        .filter((week) => selectedWeek ? week.week === Number(selectedWeek) : true)             //week filter
        .flatMap((week) => week.days)
        .filter((day) => selectedDay ? day.day === selectedDay : true)                          //day filter
        .flatMap((day) =>
            day.timeSlots.filter((timeSlot) =>
                (selectedTime ? timeSlot.time === selectedTime : true) &&
                (timeSlot.class.room?.toLowerCase().includes(searchTerm.toLowerCase()) ||       //search filters
                    timeSlot.class.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    timeSlot.class.roomType?.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        )

    return (
        <>
            <input
                type="search"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <select value={selectedWeek} onChange={handleWeekChange}>
                <option value="">Select a week</option>
                {data.weeks.map((week, index) => (
                    <option key={index} value={week.week}>
                        Week {week.week}
                    </option>
                ))}
            </select>
            <select value={selectedDay} onChange={handleDayChange}>
                <option value="">Select a day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select>
            <select value={selectedTime} onChange={handleTimeChange}>
                <option value="">Select a time</option>
                <option value="8am-10am">8am-10am</option>
                <option value="10am-12pm">10am-12pm</option>
                <option value="1pm-3pm">1pm-3pm</option>
                <option value="3pm-5pm">3pm-5pm</option>
            </select>

            {filteredWeeks.map((week, weekIndex) => (
                <div key={weekIndex}>
                    {week.days
                    .filter((day) => (selectedDay ? day.day === selectedDay : true))
                    .map((day, dayIndex) => (
                        <div key={dayIndex}>
                            {day.classes
                                .filter((classroom) =>
                                    (selectedTime ? classroom.time === selectedTime : true) &&
                                    (classroom.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        classroom.class.toLowerCase().includes(searchTerm.toLowerCase()))
                                )
                                .map((classroom, classIndex) => {
                                    return (
                                        <div key={classIndex}
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '16px',
                                                marginBottom: '16px',
                                            }}>
                                            <h2>{classroom.room}</h2>
                                            <h3>Week {week.week} {day.day}</h3>
                                            <p>Class: {classroom.class}</p>
                                            <p>Time: {classroom.time}</p>
                                        </div>
                                    )
                                })}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default App