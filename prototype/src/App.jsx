
import './App.css'

function App() {
 

  return (
    <>
      <input type="search"></input>
      <select>
        <option value="1" disabled="true">Week 1</option>
        <option value="2" disabled="true">Week 2</option>
        <option value="3" disabled="true">Week 3</option>
        <option value="4" disabled="true">Week 4</option>
        <option value="5" disabled="true">Week 5</option>
        <option value="6" disabled="true">Week 6</option>
        <option value="7" disabled="true">Week 7</option>
        <option value="8" disabled="true">Week 8</option>
        <option value="9" disabled="true">Week 9</option>
        <option value="10" disabled="true">Week 10</option>
        <option value="11" disabled="true">Week 11</option>
        <option value="12" disabled="true">Week 12</option>
        <option value="13" disabled="true">Week 13</option>
        <option value="14" selected="selected">Week 14</option>
        <option value="15">Week 15</option>
        <option value="16">Week 16</option>
      </select>
      <select>
        <option value="" selected="selected">Select a day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>
      <select>
        <option value="" selected="selected">Select a timeslot</option>
        <option value="8am-10am">8AM - 10AM</option>
        <option value="10am-12pm">10AM - 12PM</option>
        <option value="1pm-3pm">1PM - 3PM</option>
        <option value="3pm-5pm">3PM - 5PM</option>
      </select>
      <select>
        <option value="" selected="selected">Select a room type</option>
        <option value="Computer Lab">Computer Lab</option>
        <option value="Lecture Hall">Lecture Hall</option>
        <option value="Classroom">Classroom</option>
      </select>
    </>
  )
}

export default App
