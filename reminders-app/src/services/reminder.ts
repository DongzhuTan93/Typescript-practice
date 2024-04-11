import axios from 'axios'
import Reminder from '../modles/reminder'

class ReminderService {
    http = axios.create({
        baseURL : 'https://jsonplaceholder.typicode.com/'
    })

    async getReminders(){
        const response = await this.http.get<Reminder[]>('/todos')
        return response.data
    }

    async addReminder(title: string) {
        const reponse = await this.http.post<Reminder>('./todos', { title })
        return reponse.data
    }

    async removeReminder(id: number) {
        const reponse = await this.http.delete('/todos/' + id)
        return reponse.data
    }
}

// Create an instance of the service
const reminderService = new ReminderService();

// Export the instance
export default reminderService;