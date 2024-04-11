import { useEffect, useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './modles/reminder'
import reminderService from './services/reminder'
import NewReminder from './components/newReminder';



function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    const loadReminders = async () => {
      try {
        const fetchedReminders = await reminderService.getReminders()
        setReminders(fetchedReminders)
      } catch (error) {
        console.error('Error loading reminders:', error)
      }
    }

    loadReminders()
  }, [])


  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const NewReminder = await reminderService.addReminder(title)
    setReminders([NewReminder, ...reminders])
  }


  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList  items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  )
}

export default App