var express = require('express');
var router = express.Router();
var userApi = require('./userApi')
    /* function[用户查找]. */
router.get('/api/getuser', userApi);

module.exports = router;