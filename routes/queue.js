const router = require("express").Router();
const Queue = require('../models/Queue');

let generateRandomCode = function(length) {
    let code = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return code;
  };

  router.post('/api/queue', (req, res, next) => {
    const inviteCode = generateRandomCode(10);
    console.log(req.body)
    const { selectedDevice, token } = req.body;
    Queue.create({
		selectedDevice,
		token,
		inviteCode
	}).then(createdQueue => {
			res.status(201).json(createdQueue);
		})
		.catch(err => {
			next(err);
		})
  });

  module.exports = router;