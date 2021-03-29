const mongoose = global.mongoose

// schemas for entities in mongo Atlas

// const Offer = mongoose.model('Offer', {
//   city: String,
//   country: String,
//   description: String,
//   slogan: String,
//   address: String,
//   pics: [String],
//   bedrooms: Number,
//   price: Number,
//   bathroom: Number,
//   featureIds: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Feature'
//   }],
//   availableStart: Number,
//   availableEnd: Number,
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },
// })


const House = mongoose.model('House', {
  city: String,
  country: String,
  description: String,
  slogan: String,
  address: String,
  pics: [String],
  bedrooms: Number,
  price: Number,
  isOffer:Boolean,
  bathroom: Number,
  featureIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feature'
  }],
   dateRanges: [{
    availableStart: Number,
    availableEnd: Number
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

const Booking = mongoose.model('Booking', {
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  totalPrice: Number,
  startDate: Number,
  endDate: Number
})

const User = mongoose.model('User', {
  email: {
    type: String,
    unique: true,
    required: true   // could be everywhere
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  phone: String,    //optional maybe
  username: String   // optinal maybe

})

const Feature = mongoose.model('Feature', {
  index: Number,
  name: String
})

module.exports = {
  houses: House,
  users: User,
  bookings: Booking,
  features: Feature
}
