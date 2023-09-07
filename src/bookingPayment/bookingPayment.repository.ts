import bookingPaymentModel from './bookingPayment.model'

class BookingPaymentRepository {
  async removeById(id: string) {
    const bp = await bookingPaymentModel.findByIdAndDelete(id)

    if (!bp) throw new Error('not found booking')

    return bp
  }
}

export default new BookingPaymentRepository()
