import bookingRepository from './booking.repository'
class BookingService {
  async findByTourId(id: string) {
    return await bookingRepository.getByTourId(id)
  }
}

export default new BookingService()
