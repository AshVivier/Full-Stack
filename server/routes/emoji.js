
const express = require('express')
const db = require('../db/emoji')

//Set up this file with stand alone router
const router = express.Router()

router.get('/', (req, res) => {
  db.getEmoji()
  .then(emoji => {
    res.json(emoji)
  })
  .catch(err => {
    // eslint-diable-next-line no-console
    console.error(err)
    res.setStatus(500).json({error: 'something is broken'})
  })
})

module.exports = router