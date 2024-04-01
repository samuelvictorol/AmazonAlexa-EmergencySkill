const emergenciaLeveEnum = require('../../enums/EmergenciaLeveEnum');

require('dotenv').config();

const saudeController = {
    emergenciaLeve: async (req, res) => {
        console.log('Emergência de Saúde Leve Acionada');
        const accountSid = process.env.TW_ACCOUNT_SID;
        const authToken = process.env.TW_ACCOUNT_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        
        client.messages
            .create({
                body: emergenciaLeveEnum.TO_WPP_MESSAGE + emergenciaLeveEnum.enganoMSG,
                from: process.env.TW_WPP_FROM,
                to: 'whatsapp:+556181748795'
            })
            .then(message => {
                res.status(200).send('Mensagem de Emergência de Saúde Leve enviada com sucesso')
                console.log(message)
            })
    },
}


module.exports = saudeController