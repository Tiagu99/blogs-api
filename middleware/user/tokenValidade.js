const jwt = require('../../helper/jwt');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ message: 'missing auth token' });

  const validateToken = jwt.validateToken(authorization);

  if (validateToken.message) return res.status(401).send({ message: 'jwt malformed' });

  req.user = validateToken;
  
  next();
};