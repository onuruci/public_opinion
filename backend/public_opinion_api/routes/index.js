var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ status: 'Entered' });
});

router.get('/most_popular', function(req, res, next){
  res.send({status: 'most_popular_question'});
});

router.get('/all_questions', function(req, res, next){
  res.send({status: 'all_questions'});
});

router.get('/admin_auth', function(req, res, next){
  res.send({status: 'admin_auth'});
});

router.get('/admin_content', function(req, res, next){
  res.send({status: 'admin_auth'});
});

module.exports = router;
