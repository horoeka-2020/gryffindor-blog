const express = require('express')
const hbs = require('express-handlebars')
const rootRoutes = require('./rootRoutes')

const server = express()

server.use(express.static('Public'))
server.use(express.urlencoded({ extended: false }))
server.use('/', rootRoutes)
server.use(express.static(__dirname + '/Public'));

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server