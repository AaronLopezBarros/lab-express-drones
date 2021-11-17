const express = require('express');
const router  = express.Router();
const chalk   = require('chalk')
// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
      const drones = await Drone.find()
      console.log(drones)
      res.render('../views/drones/list', {drones})
  } catch(err){
    console.log(chalk.bgRed(err))
  }
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const {name, propellers, maxSpeed} = req.body
    const createDrone = await Drone.create({name, propellers, maxSpeed})
    res.redirect('/drones')

  } catch(err){
    console.log(chalk.bgRed(err))
    res.render('/drones/create')
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const drone = await Drone.findById(req.params.id)
    res.render('../views/drones/update-form.hbs', {drone})
  } catch(err){
    console.log(chalk.bgRed(err))
  }
  
});

router.post('/drones/:id/edit', async (req, res, next) => {console.log('ok')
  // Iteration #4: Update the drone
  try{
    const {name, propellers, maxSpeed} = req.body
    const updateDrone = await Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
    res.redirect('/drones')
  } catch(err){
    console.log(chalk.bgRed(err))
    res.render('../views/drones/update-form.hbs')
  }
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
