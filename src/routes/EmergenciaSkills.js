const router = require('express').Router();
const skillController = require('../controllers/Emergencia/SaudeController');

router.route('/emergenciaSaudeLeve')
    .get((req, res) => skillController.emergenciaLeve(req, res))

module.exports = router;