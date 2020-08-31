var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { con } = require('../db/db');
con.connect();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./', {});
});

 /*接口跳转到活动庆典 */
 router.get('/Celebration', function(req, res, next) {
    res.render('./Celebration.html', {});
});

/* 接口跳转到活动庆典子页 */
router.get('/Celebration-a', function(req, res, next) {
    res.render('./Celebration-a.html', {});
});

router.get('/getData', function(req, res, next) {
    if (req.query.type) {
        if (req.query.type === '*') {
            var sql = `select * from resources`;
        } else if (req.query.class === '*') {
            var sql = `select * from resources where type = '${req.query.type}'`;
        } else {
            var sql = `select * from resources where type = '${req.query.type}' and newsclass = '${req.query.class}'`;
        }
        con.query(sql, function(err, data) {
            if (data.length === '0') {
                res.send({
                    code: 0,
                    data: '请输入正确的类别',
                    message: 'error'
                })
            } else {
                res.send({
                    code: 1,
                    data: data,
                    message: 'succes'
                });
            }

        })
    } else {
        res.send({
            code: 0,
            data: '参数不正确',
            message: 'error'
        });
    }
});

router.get('/getDetailsByTitle', function(req, res, next) {
    if (req.query.type) {
        var sql = `select * from resources where type = '${req.query.type}' and title= '${req.query.title}'`
        con.query(sql, function(err, data) {
            if (data.length === '0') {
                res.send({
                    code: 0,
                    data: '未查找到数据',
                    message: 'error'
                })
            } else {
                var sql1 = `UPDATE resources SET views='${data[0].views+1}' WHERE id=${data[0].id}`
                con.query(sql1, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                })
                res.send({
                    code: 1,
                    data: data,
                    message: 'succes'
                })
            }
        })
    } else {
        res.send({
            code: 0,
            data: '参数不正确',
            message: 'error'
        })
    }
})

router.get('/getDetailsById', function(req, res, next) {
    if (req.query.type) {
        var sql = `select * from resources where type = '${req.query.type}' and id= '${req.query.id}'`
        con.query(sql, function(err, data) {
            if (data.length === '0') {
                res.send({
                    code: 0,
                    data: '未查找到数据',
                    message: 'error'
                })
            } else {
                var sql1 = `UPDATE resources SET views='${data[0].views+1}' WHERE id=${data[0].id}`
                con.query(sql1, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('浏览量+1');
                    }
                })
                res.send({
                    code: 1,
                    data: data,
                    message: 'succes'
                })
            }
        })
    } else {
        res.send({
            code: 0,
            data: '参数不正确',
            message: 'error'
        })
    }
})


module.exports = router;