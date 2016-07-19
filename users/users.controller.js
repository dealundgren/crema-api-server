module.exports = {
  getCurrentUser
};

/***** PUBLIC *****/

function getCurrentUser(req, res) {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(401).send({message: 'user is not authenticated'});
  }
}

function createUser(req, res) {
  return User.create({
    username: req.body.username,
    password: req.body.password,
    fullName: req.body.fullName,
    email: req.body.email || null
    // handle role type here someday
  });
}

