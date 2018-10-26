const express = require('express');
const router = express.Router();
const nameUser = require('../logic/login')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function (req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.userName;
  const message = nameUser(name);
  console.log(nameUser(name));
  res.json({userName: message});
});

module.exports = router;
