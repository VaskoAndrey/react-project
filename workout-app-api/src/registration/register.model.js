const db = require('../db');

exports.createUser = async (req, res, passwordToSave) => {
  try {
    const foundUser = await db.users.findOne({
      where: {
        login: req.body.login
      }
    })    
    if(!foundUser) {
      return await db.users.create({
        login: req.body.login,
        password: passwordToSave,
        isTrainer: req.body.isTrainer
      }).then(log => {
        return { body: { id: log.id }, status: 201 };
      })
    } else {
      return res.status(400).json({ error: 'User already exists' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}