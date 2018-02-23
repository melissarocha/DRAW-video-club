const express = require('express');
const router = express.Router();

router.get('/', (request, response, next)=>{
  //Mandar al usuario una respuesta
  response.send("Estas en /movies/");
});

router.post('/', (request, response, next)=>{
  response.send("Estas en /movies/ -> POST");
});

router.put('/', (request, response, next)=>{
  response.send("Estas en /movies/ -> PUT");
});

router.delete('/', (request, response, next)=>{
  response.send("Estas en /movies/ -> DELETE");
});

module.exports = router;
