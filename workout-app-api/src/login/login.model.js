const db = require('../db');
const bcrypt = require('bcrypt');

exports.createUser = async (req) => {

try {
  const foundUser = await db.users.findOne({
    where: {
      login: req.body.login
    }
  }) 

  if (foundUser) {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      return { body: { authification: true , isTrainer: foundUser.isTrainer}, status: 201 };
    } else {
      return { body: { authification: false, isTrainer: false }, status: 500 };
    }
  } else {
    return { body: { message: 'User not found' }, status: 404 };
  }

  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user'); 
  }
};
