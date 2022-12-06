import mongoose, {Schema} from "mongoose";

const AddressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    postal: {
        type: String,
        required: true
    },
    houseNumber: {
        type: Date,
        required: true
    },
    apartmentNumber: String
});

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: AddressSchema,
        required: true
    }
});

export default mongoose.model("registerSchema", UserSchema);
