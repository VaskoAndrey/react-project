const loginModel = require('./login.model');

exports.createUser = async (req, res) => {
  const authification = await loginModel.createUser(req, res);  
  await res.send(authification)
}