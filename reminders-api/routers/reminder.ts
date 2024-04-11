import { Router } from 'express'


const router = Router()

interface CreateReminderDto {
    title: string
}

router.get('/', (req, res) => {
    res.send('List of reminders')
})

router.post('/', (req, res) => {
    const {title} = req.body as CreateReminderDto
    res.json(title)
})

export default router