var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { con } = require('../db/db');
con.connect();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./top', {});
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