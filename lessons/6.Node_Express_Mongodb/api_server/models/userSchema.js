import mongoose from "mongoose";
import bcrypt from "bcrypt"

let usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    registeredAt: {
        type: Object,
        require: true,
        default: Date.now
    },
    addedLanguges: {
        type: Array,
        default: []
    }
})

usersSchema.pre("save", async function () {
    try {
        console.log('pre method called !')

        this.registeredAt = "D:" + new Date().toLocaleDateString() + "T:" + new Date().toLocaleTimeString()

        let hash = await bcrypt.hash(this.password, 12)

        this.password = hash

    } catch (err) {
        console.log("error in pre save method of user schema : ", err)
    }
})

let userModel = new mongoose.model("user", usersSchema)

export { userModel }