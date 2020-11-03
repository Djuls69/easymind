export const mailSchema = {
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isSended: {
    type: Boolean,
    required: true,
    default: false
  },
  sendedDate: {
    type: Date
  }
}
