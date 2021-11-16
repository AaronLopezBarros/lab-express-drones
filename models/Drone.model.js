// Iteration #1
const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const droneSchema = new Schema({
    name: {type: String, required: true},
    propellers: {type: Number},
    maxSpeed: {type: Number}
})

module.exports = mongoose.model('Drone', droneSchema)