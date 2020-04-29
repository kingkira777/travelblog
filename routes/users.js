var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});






/**User Profile */
router.get('/profile', function(req, res, next) {
  res.render('pages/user/profile',{
      title : 'User Profile',
      user : true
  });
  res.end();
});



module.exports = router;
