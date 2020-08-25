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

module.exports = router;