var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { con } = require('../db/db');
con.connect();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./foot', {});
});

router.get('/getData', function(req, res, next) {
    if (req.query.type) {
        if (req.query.type === '*') {
            var sql = `select * from resources`;
        } else {
            var sql = `select * from resources where type like '${req.query.type}'`;
        }
        con.query(sql, function(err, data) {
            // console.log(data[2]);
            res.send({
                code: 1,
                data: data,
                message: 'succes'
            });
        })
    } else {
        res.send({
            code: 0,
            data: '参数不正确',
            message: 'error'
        });
    }
});
// router.post('/login', function(req, res, next) {
//     var sql = `select * from resources`;
//     con.query(sql, function(err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send({
//                 code: 1,
//                 data: data[0],
//                 message: 'success'
//             })
//         }
//     })
// })



module.exports = router;