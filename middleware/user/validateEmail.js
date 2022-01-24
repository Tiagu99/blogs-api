module.exports = (req, res, next) => {
  const { email } = req.body;
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Rex retirada de https://www.w3resource.com/javascript/form/email-validation.php

  if (!email) {
    return res.status(400).send({ message: '"email" is required' });
  }
  if (!reg.test(email)) {
    return res.status(400).send({ message: '"email" must be a valid email' });
  }

  return next();
};