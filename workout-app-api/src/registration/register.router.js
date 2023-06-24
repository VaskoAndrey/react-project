const { Router } = require('express');
const router = Router();
const registerController = require('./register.controller');

router.post('/', async (req, res) => {
  await registerController.createUser(req, res)
});

module.exports = router;

  