document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-drones JS imported successfully!');


    const createButton = document.getElementById('button-create')

    createButton.addEventListener('click', async () =>{
      const name      = document.getElementById('name').value
      const propeller = document.getElementById('propellers').value
      const maxSpeed  = document.getElementById('maxSpeed').value

      const allInputs = {name, propeller, maxSpeed}

      await axios({
        method: 'POST',
        url: '/drones/create',
        data: allInputs,
      })
      window.location.assign('/drones')
    })
    
}, false);


