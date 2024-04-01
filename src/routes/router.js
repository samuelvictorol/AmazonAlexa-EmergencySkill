const router = require('express').Router();

const emergenciaSkills = require('./EmergenciaSkills');

router.use('/', emergenciaSkills);

module.exports = router;