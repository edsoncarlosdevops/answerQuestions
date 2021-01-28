const Sequilize = require('sequelize')

const connection = new Sequilize('guiaperguntas','root','1234',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection