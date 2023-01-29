const express=require('express');
const { fetchAllweather, fetchByHour, fetchByDays, fetchNow} = require('../../Controllers/Weather/Weather');
const router = express.Router();
router.get('/Apiweather',fetchAllweather).get('/ByHour', fetchByHour).get('/ByDays', fetchByDays).all('/Now',fetchNow)
module.exports = router