const knex = require('knex')

const config = require('../../knexfile')


//work out what enviroment we are in e.g. development
const enviroment = process.env.NODE_ENV || 'development'

//connect to the database using the enviroment specific config
const connection = knex(config[enviroment])

module.exports = connection