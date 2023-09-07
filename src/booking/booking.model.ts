import { InferSchemaType, Schema, model } from 'mongoose'

const bookingSchema = new Schema(
  {
    tourId: {
      type: {
        _id: Schema.Types.ObjectId,
        name: String
      },
      required: true
    },
    agentId: {
      type: {
        _id: Schema.Types.ObjectId,
        name: String
      },
      required: true
    },
    clientId: {
      type: {
        _id: Schema.Types.ObjectId,
        name: String
      },
      required: true
    },
    saleId: {
      type: {
        _id: Schema.Types.ObjectId,
        name: String
      },
      required: true
    },
    paxNum: {
      type: Number,
      required: true,
      default: 1
    },
    bookDate: {
      type: Schema.Types.Date,
      required: true,
      default: new Date()
    },
    expireDate: {
      type: Schema.Types.Date,
      required: true,
      default: new Date()
    },
    vat: {
      type: Number,
      required: true,
      default: 0
    },
    note: {
      type: String,
      required: true,
      default: ''
    },
    status: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    singleFee: {
      type: Number,
      required: true,
      default: 0
    },
    foreignFee: {
      type: Number,
      required: true,
      default: 0
    },
    visaFee: {
      type: Number,
      required: true,
      default: 0
    },
    otherFee: {
      type: Number,
      required: true,
      default: 0
    },
    visaStatus: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export type Booking = InferSchemaType<typeof bookingSchema>

export type BookingCreate = Omit<Booking, '_id'>

bookingSchema.pre('find', function () {})

const bookingModel = model('Bookings', bookingSchema)

export default bookingModel
