const router = require('express').Router()

router.get('/', function(req, res, next) {
    res.json({
      status: 200,
      message: "Connected to Dash-Mine."
    });
  });

module.exports = router;
