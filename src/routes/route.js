const express = require('express');
const router = express.Router();
const cryptoController = require('../controller/cryptoController')


router.get('/assets', cryptoController.cryptoFunction )



router.all('/*', function(req,res){
    res.status(400).send({message: `Check Url`})
});


module.exports = router