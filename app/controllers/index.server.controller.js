// File name: index.server.controller.js
// Student Name: Thu Ha Le
// Student ID: 301259611 
// Date: September 27, 2023

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
}