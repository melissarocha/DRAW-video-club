const express = require('express');

function index(request, response, next){
  //Mandar al usuario una respuesta
  response.send("Estas en /movies/ -> GET");
}

function create(request, response, next){
  response.send("Estas en /movies/ -> POST");
}

function update(request, response, next){
  response.send("Estas en /movies/ -> PUT");
}

function remove(request, response, next){
  response.send("Estas en /movies/ -> DELETE");
}

module.exports = {
  index,
  create,
  update,
  remove
}
