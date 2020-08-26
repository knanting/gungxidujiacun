var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { con } = require('../db/db');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 用户登录页面接口
router.get('/login', function(req, res, next) {
    console.log(1);
    // res.render('login', {})
});

// 登录提交接口
router.post('/doLogin', function(req, res, next) {
    var sql = `select * from users where username = '${req.body.username}' and password = '${req.body.password}'`
    con.query(sql, function(err, data) {
        if (data.length === '0') {
            res.send({
                code: 0,
                message: '请输入正确的账号密码'
            })
        } else {
            res.cookie('name', req.body.username)
            res.send({
                code: 1,
                message: '登录成功'
            })
        }
    })
})

// 注册提交接口
router.post('/regestor', function(req, res, next) {
    var sql1 = `select * from users where number = '${req.body.number}'`
    con.query(sql1, function(err, data) {
        if (data.length != 0) {
            res.send({
                code: 0,
                message: '用户已存在'
            })
        } else {
            if (req.body.company) {
                var address = req.body.pro + req.body.city + req.body.area
                var sql = `INSERT INTO users VALUES (null,'${req.body.username}','${req.body.password}','${req.body.number}','企业会员','${req.body.company}','${address}')`
            } else {
                var sql = `INSERT INTO users (id,username,password,number,type) VALUES (null,'${req.body.username}','${req.body.password}','${req.body.number}','个人会员')`
            }
            con.query(sql, function(err, data) {
                if (err) {
                    console.log(err);
                    res.send({
                        code: 0,
                        message: '数据不合法'
                    })
                } else {
                    res.send({
                        code: 1,
                        message: '注册成功'
                    })
                }
            })
        }
    })
})


// 用户留言接口
router.post('/feedback', function(req, res, next) {
    if (req.cookies.name) {
        var sql = `INSERT INTO feedback VALUES(null, '${req.body.text}','${req.body.number}','${req.body.email}','${req.cookies.name}')`
    } else {
        var sql = `INSERT INTO feedback VALUES(null, '${req.body.text}','${req.body.number}','${req.body.email}',null)`
    }
    con.query(sql, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                code: 0,
                message: '反馈失败！'
            })
        } else {
            res.send({
                code: 1,
                message: '反馈成功！'
            })
        }
    })
})

module.exports = router;