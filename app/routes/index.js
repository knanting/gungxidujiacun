var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { con } = require('../db/db');
con.connect();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET home page. */

// 更改了主页面接口渲染地址
router.get('/', function(req, res, next) {
    res.render('./qdshome.html', {});
});
// 云社驿站接口
router.get('/ysyz', function(req, res, next) {
    console.log(1111)
    res.render('./qdsysyz.html', {});
});
// 购物车
router.get('/gwc', function(req, res, next) {
    console.log(1111)
    res.render('./qdsgwc.html', {});
});
// 点击云社驿站里图片跳转购物车
router.get('/aaap', function(req, res, next) {
    // console.log(req)
    console.log(1111)
    res.render('./qdsgwc.html', {});
});
// 跳转登陆界面
router.get('/denglu', function(req, res, next) {
    // console.log(req)
    console.log(1111)
    res.render('./qdsdenglu.html', {});
});
// 跳转注册
router.get('/zhuc', function(req, res, next) {
    var id = req.params.id
    res.render('./qdszhuce.html', {});
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
            if (data.length === 0) {
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
            if (data.length === 0) {
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
            if (data.length === 0) {
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