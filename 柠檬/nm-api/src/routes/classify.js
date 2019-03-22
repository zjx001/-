var express = require('express');
var router = express.Router();
var classifyApi = require('./classifyApi')
    /* function[分类的查找，添加] */
    //查找分类
router.get('/api/getcostum', classifyApi.costum);
//添加分类
router.post('/api/addcostum', classifyApi.classify);
//查找个人分类
router.get('/api/findclassify', classifyApi.findclassify);


module.exports = router;