const express=require('express');
const { fetchApiweather} = require('../../Controllers/Weather/Weather');
const router = express.Router();
router.get('/Apiweather',fetchApiweather)
module.exports = router