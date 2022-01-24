const jwt = require('../../helper/jwt');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ message: 'Token not found' });

  const validateToken = jwt.validateToken(authorization);

  if (validateToken.message) return res.status(401).send({ message: 'Expired or invalid token' });

  req.user = validateToken;
  
  next();
};