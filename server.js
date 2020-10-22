const express = require('express')
const hbs = require('express-handlebars')
const rootRoutes = require('./rootRoutes')

const server = express()

// server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/', rootRoutes)

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server