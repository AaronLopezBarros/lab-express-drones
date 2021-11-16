// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const chalk = require('chalk')
require('dotenv/config');

const projectName = 'lab-express-drones';

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];



  const MONGO_URI = process.env.MONGODB_URI || `mongodb+srv://Aaron-Lopez:${process.env.PASSWORD}@cluster0.7ywow.mongodb.net/${projectName}?retryWrites=true&w=majority`;

  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then((x) => {
      console.log(chalk.bgBlue(`Connected to Mongo! Database name: "${x.connections[0].name}"`));
    })
    .catch((err) => {
      console.error(chalk.bgRed("Error connecting to mongo: ", err));
    });
  
  const dronesCreate = async ()=>{
    try {
        await Drone.create(drones)
        await mongoose.connection.close()
    } catch(err){
        console.log(chalk.bgRed(err))
    }
}

dronesCreate()