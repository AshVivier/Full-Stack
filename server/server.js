const express = require('express')
const emojiRoutes = require ('./routes/emoji.js')

const server = express()

//JSON API middleware
server.use(express.json())

//Static file serving middleware
server.use(express.static('./public'))

//add emoji routes, starting at /api/emoji
server.use('/api/emoji', emojiRoutes)
module.exports = server