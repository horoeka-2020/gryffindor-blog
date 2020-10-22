const fs = require('fs')
const path = require('path')

const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: false }))

const filePath = path.join(__dirname, 'data.json')

module.exports = router

router.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, contents) => {
    // respond with a 500 if there is an error
    if (err) return res.sendStatus(500)
    // parse the string contents into a JS object
    const data = JSON.parse(contents)
    // construct our view data
    const viewData = {
      puppies: data.puppies
    }
    res.render('home', viewData)
  })
})