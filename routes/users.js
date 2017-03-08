var express = require('express');
var router = express.Router();
var fundTransfer = require("../models/fundTransfer");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/statements/:id", function(request, response, next) {
    fundTransfer.miniStatement(request, response);
});

module.exports = router;