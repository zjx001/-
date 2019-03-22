var Mongo = require('Mongodb-curd');
const Bname = "lenmon"
module.exports = {
    costum: function(req, res, next) {
        //查找分类
        Mongo.find(Bname, 'costum', function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    data: 'error'
                })
            }
        })

    },
    //添加自定义分类
    classify: function(req, res, next) {
        let { icon, common, type, title } = req.body
        if (!icon || !common || !type || !type) {
            return res.send()
        }
        Mongo.insert(Bname, 'classify', req.body, function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    data: 'error'
                })
            }
        })

    },

    //查找默认用户分类
    findclassify: function(req, res, next) {
        let common = req.query.common
        let type = req.query.type
        console.log(common)
        Mongo.find(Bname, 'classify', { 'common': { $in: ['all', common] }, 'type': type }, function(re) {
            // console.log(re)
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    data: 'error'
                })
            }
        })

    }
}