import { asyncHandler } from '~/core'

class BookingController {
  gets = asyncHandler(async (req, res) => {
    return res.json({
      status: 'success',
      message: 'success',
      element: []
    })
  })
}

export default new BookingController()
