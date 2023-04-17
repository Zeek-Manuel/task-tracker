import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Friday 2nd April at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Football match',
        day: '3rd April at 3:00pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Dinner Date',
        day: '4th April at 1:30pm',
        reminder: true
      }
    ]
  )

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder:!task.reminder} : task))
  }
  return (
    <div className="container">
    <Header/>
    {tasks.length > 0 ? (
    <Tasks tasks={tasks} 
    onDelete={deleteTask} onToggle={toggleReminder}/>) :
    ('No tasks available')}
    </div>
  );
}

export default App;
