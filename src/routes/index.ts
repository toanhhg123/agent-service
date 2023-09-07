import { Express } from 'express'
import bookingRouter from '~/booking/booking.route'

export default function useRouter(app: Express) {
  app.use('/booking', bookingRouter)
}
