const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  try{
      const drones = await Drone.find()
      console.log(drones)
      res.render('../views/drones/list', {drones})
  } catch(err){
    console.log(chalk.bgRed(err))
  }
  
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  try{
    const createDrone = await Drone.create(req.body)
    console.log('ok')
    res.send(createDrone)
  } catch(err){
    console.log(chalk.bgRed(err))
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
