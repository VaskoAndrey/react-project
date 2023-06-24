const registerModel = require('./register.model');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const passwordFromUser = req.body.password;

    const salt = bcrypt.genSaltSync(10);

    const passwordToSave = bcrypt.hashSync(passwordFromUser, salt);

    if (!salt || !passwordToSave) {
      return res.status(500).send('Error occurred during password hashing');
    }

    await registerModel.createUser(req, res, passwordToSave);
    res.send('User was created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred during user creation');
  }
}

