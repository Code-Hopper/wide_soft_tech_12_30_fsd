import mongoose, { mongo } from "mongoose";

let techSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    scope: {
        type: Array,
        require: true,
        default: []
    },
    duration: {
        type: String,
        require: true,
        default: '1'
    },
    difficulties: {
        type: String,
        require: true
    }
})

let techModel = new mongoose.model("techs", techSchema)

export { techModel }