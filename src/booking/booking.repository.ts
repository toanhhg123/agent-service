import bookingModel, { BookingCreate } from './booking.model'

class BookingRepository {
  async createBooking(booking: BookingCreate) {
    const doc = await bookingModel.create(booking)
    return doc
  }

  async get(id: string) {
    const booking = await bookingModel.findById(id)
    if (!booking) throw new Error('Not found booking')

    return booking
  }

  async getByTourId(tourId: string) {
    const booking = await bookingModel.find({ tourId })
    return booking
  }

  async findAll() {
    return await bookingModel.find()
  }

  async updateById(id: string, bookingParam: BookingCreate) {
    const booking = await bookingModel.findByIdAndUpdate(id, bookingParam)
    if (!booking) throw new Error('not found booking')
    return booking
  }

  async deleteById(id: string) {
    const booking = await bookingModel.findByIdAndDelete(id)

    if (!booking) throw new Error('not found booking')

    return booking
  }
}

export default new BookingRepository()
