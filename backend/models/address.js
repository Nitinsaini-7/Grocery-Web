import mongoose, { Types } from "mongoose";

const addressSchema = mongoose.Schema({
  userId: {
    Type: String,
    required: true,
  },
  firstName: {
    Type: String,
    required: true,
  },
  lastName: {
    Type: String,
    required: true,
  },
  email: {
    Type: String,
    required: true,
  },
  street: {
    Type: String,
    required: true,
  },
  city: {
    Type: String,
    required: true,
  },
  state: {
    Type: String,
    required: true,
  },
  zipcode: {
    Type: Number,
    required: true,
  },
  country: {
    Type: String,
    required: true,
  },
  phone: {
    Type: String,
    required: true,
  },
});

const Address =
  mongoose.model.address || mongoose.model("address", addressSchema);

export default Address;
