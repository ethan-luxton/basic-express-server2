const express = require('express')
const logger = require('./middleware/logger')
const cors = require('cors')
const validator = require('./middleware/validator')
const errorHandler = require('./error-handlers/500')
const notFound = require('./error-handlers/404')
const server = express()
const PORT = process.env.PORT || 3002

server.use(cors())
server.use(logger)

server.get('/person', validator, (req, res) => {
    res.status(200).send({ name: req.name })
})

// server.get('/throw_error', () => {
//     throw new Error('Oh no the world!');
// });

// server.get('/pass_error', (req, res, next) => {
//     next('Something bad');
// });

server.use('*', notFound)

server.use(errorHandler)

const start = () => {
    server.listen(PORT, () => console.log('listening on port', PORT))
}

module.exports = { server, start }
