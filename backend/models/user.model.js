import mongooes from "mongoose";

const userSchema = new mongooes.Schema({
    fullName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        require: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        require: true,
        enum: ["male", "female"]
    },
    passWord: {
        type: String,
        require: true,
        minlength: 6

    },
    avatar: {
        type: String,
        default: ""
    }

},
    { timestamps: true }
)
const User = mongooes.model("user", userSchema);

export default User;