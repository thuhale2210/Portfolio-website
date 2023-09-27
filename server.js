// File name: server.js
// Students Name: Thu Ha Le
// Student ID: 301259611 
// Date: September 27, 2023

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var express = require('./config/express')
var app = express()
app.listen(3000)
module.exports = app

console.log('Server running at https://localhost:3000/')