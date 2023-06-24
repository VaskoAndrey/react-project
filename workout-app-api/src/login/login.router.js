const { Router } = require('express');
const router = Router();
const loginController = require('./login.controller');

router.post('/', async (req, res) => {
  await loginController.createUser(req, res)
});

module.exports = router;