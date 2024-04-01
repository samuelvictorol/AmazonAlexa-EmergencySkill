const mongoose = require('mongoose')
require('dotenv').config();

async function main () {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.CONNECTION_STRING)
            .then(() => {
                console.log('\n\n\n\n--------------- Bem Vindo ---------------\n\nAlexaSkills Api v1.0 no ar\n')
            })
            .catch((error) => {
                console.error('Erro de Conexão com Mongo: ' + error)
            })
    } catch (error) {
        console.error('Erro conn: ' + error)
    }
}

module.exports = main